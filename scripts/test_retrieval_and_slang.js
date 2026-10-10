import fs from 'fs';
import path from 'path';
import { evaluateSpecialPhrase, SPECIAL_REPLY } from '../src/features/chatbot/services/specialPhraseHandler.js';
import { tokenize, rank } from '../src/features/chatbot/services/retriever.js';

console.log('=== TEST 1: SPECIAL PHRASE HANDLER ===');

const matchingCases = [
  'کسکش',
  'کس کش',
  'کس‌کش',
  'کس   کش',
  'کونی',
  'کون',
  'کیر',
  'کیری',
  'کونده',
  'کون ده',
  'کون‌ده',
  'کس',
  'سلام کسکش چطوری',
  'عجب کیری بود',
  'این کونی کیه؟',
  'کون لقش!',
  'کس نگو',
];

const nonMatchingCases = [
  'سلام طاها چطوری؟',
  'کسری بودجه شرکت چقدره؟',
  'کسرا در چه دانشگاهی درس خوانده؟',
  'کسوت ایشان در مهندسی',
  'عکس‌های پروژه را دیدم',
  'باکس دانلود وبسایت',
  'ارکستر سمفونیک تهران',
  'فوکوس دوربین چطور بود؟',
  'کنترل پروژه و مدیریت زمان',
  'کنتور هوشمند برق',
  'کویر لوت و تصویربرداری هوایی',
  'ترکیب رنگ در داوینچی ریزالو',
  'دیکتاتوری و تاریخ',
  'تاکنون چه پروژه‌هایی انجام شده؟',
  'پروژه سی استودیو چیست؟',
  'پروژه پیشگام نور',
  'پروژه سیمفام آلومینیوم',
  'پروژه ساعت ابراهیمی',
];

let slangPass = 0;
let slangFail = 0;

for (const text of matchingCases) {
  const res = evaluateSpecialPhrase(text);
  if (res.matched && res.reply === SPECIAL_REPLY) {
    slangPass++;
  } else {
    console.error(`FAIL: expected match for "${text}", got:`, res);
    slangFail++;
  }
}

for (const text of nonMatchingCases) {
  const res = evaluateSpecialPhrase(text);
  if (!res.matched) {
    slangPass++;
  } else {
    console.error(`FAIL: expected NO match for "${text}", got:`, res);
    slangFail++;
  }
}

console.log(`Special Phrase Test: ${slangPass}/${matchingCases.length + nonMatchingCases.length} passed.`);

console.log('\n=== TEST 2: KNOWLEDGE BASE & RETRIEVAL ===');

// Load knowledge markdown files directly
const knowledgeDir = path.resolve('knowledge');
const files = fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.md'));

const allChunks = [];
for (const fileName of files) {
  const raw = fs.readFileSync(path.join(knowledgeDir, fileName), 'utf8');
  const lines = raw.split(/\r?\n/);
  let currentSection = '';
  let buffer = [];
  let sectionIndex = 0;

  const flush = () => {
    const text = buffer.join('\n').trim();
    if (!text) return;
    const tokens = tokenize(text);
    allChunks.push({
      id: `${fileName}#${sectionIndex}`,
      source: fileName,
      section: currentSection,
      text,
      tokens,
      index: sectionIndex,
    });
    sectionIndex++;
  };

  for (const line of lines) {
    const heading = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (heading) {
      flush();
      buffer = [];
      currentSection = heading[2].trim();
      continue;
    }
    buffer.push(line);
  }
  flush();
}

console.log(`Loaded ${allChunks.length} chunks across ${files.length} markdown files.`);

const testQueries = [
  { q: 'درباره پروژه سی‌استودیو توضیح بده', expectedKeyword: 'cstudio' },
  { q: 'پروژه پیشگام نور چیه؟', expectedKeyword: 'pishgam' },
  { q: 'سیمفام آلومینیوم چه پروژه‌ای است؟', expectedKeyword: 'simfam' },
  { q: 'پروژه ساعت ابراهیمی چیه؟', expectedKeyword: 'ebrahimi' },
  { q: 'کرست واچ چیست؟', expectedKeyword: 'crest' },
  { q: 'تیزر لاغری کلینیک آلما چیه؟', expectedKeyword: 'alma' },
  { q: 'مستند صنعتی ساینا', expectedKeyword: 'saina' },
  { q: 'اصلاح کلاسیک پلاک ۸ مستر باربر', expectedKeyword: 'pelak8' },
  { q: 'مصاحبه تغذیه مسیرینو', expectedKeyword: 'masirino' },
  { q: 'طاها چند سالشه؟', expectedKeyword: '20' },
  { q: 'راه ارتباطی و ایمیل طاها چیه؟', expectedKeyword: 'tahanaghdi.dev@gmail.com' },
];

let retrievalPass = 0;
let retrievalFail = 0;

for (const { q, expectedKeyword } of testQueries) {
  const top = rank(q, allChunks, { topK: 3, minScore: 0.3 });
  const joinedText = top.map(c => c.text + ' ' + c.section + ' ' + c.source).join(' ').toLowerCase();
  const found = joinedText.includes(expectedKeyword.toLowerCase());
  if (found) {
    retrievalPass++;
    console.log(`PASS: "${q}" => Top match: [${top[0]?.source}] ${top[0]?.section}`);
  } else {
    retrievalFail++;
    console.error(`FAIL: "${q}" did not find "${expectedKeyword}" in top 3 chunks:`, top.map(c => c.section));
  }
}

console.log(`Retrieval Test: ${retrievalPass}/${testQueries.length} passed.`);

if (slangFail === 0 && retrievalFail === 0) {
  console.log('\nALL VERIFICATION CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('\nSOME CHECKS FAILED!');
  process.exit(1);
}
