// MobileContact — M3-styled contact form + quick-info cards.
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import M3Card from "../components/M3Card";
import M3Button from "../components/M3Button";
import M3Chip from "../components/M3Chip";
import { EMAILJS_CONFIG, CONTACT_INFO } from "../../shared/data/contact";

export default function MobileContact() {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          toast.success(t("contact.form.success", "✅ Message sent successfully!"));
          formRef.current?.reset();
          setSending(false);
        },
        (err) => {
          console.error(err);
          toast.error(t("contact.form.error", "❌ Failed to send. Try again."));
          setSending(false);
        }
      );
  };

  return (
    <div className="px-4 pt-2 pb-10 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* 1. Form First */}
          <M3Card elevation={1} className="text-left rtl:text-right m3-shape-xl p-5 border border-base-300/70 shadow-sm">
            <h2 className="text-2xl font-black text-base-content tracking-tight">
              {t("contact.form.send", "Send a Message")}
            </h2>
            <p className="text-xs text-base-content/60 mt-1 font-medium">
              {t("footer.status.replyLabel", "Reply")}: {t("footer.status.replyValue", "Within 24 hrs")}
            </p>

            <form ref={formRef} onSubmit={onSubmit} className="mt-4 space-y-3 font-body-fa">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block m3-label-medium text-base-content/65 mb-1 text-left rtl:text-right font-semibold font-body-fa">
                    {t("contact.form.fullName", "Full Name")}
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder={t("contact.form.fullNamePlaceholder", "e.g. Alex Smith")}
                    className="w-full px-3 py-2.5 m3-body-medium bg-base-200/60 border border-base-300/60 rounded-xl text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:bg-base-200 transition-colors text-left rtl:text-right font-body-fa"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block m3-label-medium text-base-content/65 mb-1 text-left rtl:text-right font-semibold font-body-fa">
                    {t("contact.form.email", "Email Address")}
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder={t("contact.form.emailPlaceholder", "you@example.com")}
                    className="w-full px-3 py-2.5 m3-body-medium bg-base-200/60 border border-base-300/60 rounded-xl text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:bg-base-200 transition-colors text-left rtl:text-right font-body-fa"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block m3-label-medium text-base-content/65 mb-1 text-left rtl:text-right font-semibold font-body-fa">
                    {t("contact.form.subject", "Subject")}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder={t("contact.form.subjectPlaceholder", "Project Inquiry / Collaboration")}
                    className="w-full px-3 py-2.5 m3-body-medium bg-base-200/60 border border-base-300/60 rounded-xl text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:bg-base-200 transition-colors text-left rtl:text-right font-body-fa"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block m3-label-medium text-base-content/65 mb-1 text-left rtl:text-right font-semibold font-body-fa">
                    {t("contact.form.message", "Message")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={t("contact.form.messagePlaceholder", "Tell me about your project, timeline, and vision...")}
                    className="w-full px-3 py-2.5 m3-body-medium bg-base-200/60 border border-base-300/60 rounded-xl text-base-content placeholder:text-base-content/35 focus:outline-none focus:border-primary focus:bg-base-200 transition-colors resize-none text-left rtl:text-right font-body-fa"
                  />
                </div>
              </div>

              <M3Button
                variant="filled"
                type="submit"
                icon={<FaPaperPlane className="rtl:rotate-180" />}
                fullWidth
                disabled={sending}
              >
                {sending ? t("contact.form.sending", "Sending…") : t("contact.form.send", "Send Message")}
              </M3Button>
            </form>
          </M3Card>

          {/* 2. Hero / About Contact */}
          <M3Card elevation={1} className="text-left rtl:text-right m3-shape-xl p-5 border border-base-300/70">
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-extrabold">
              {t("contact.eyebrow", "Conversation")}
            </p>
            <h1 className="text-3xl font-black text-base-content tracking-tight leading-tight mt-1">
              {t("contact.title", "Get In")} <span className="text-primary">{t("contact.touch", "Touch")}</span>
            </h1>
            <p className="text-sm font-medium text-base-content/75 mt-2 leading-[1.8] font-body-fa">
              {t("contact.subtitle")}
            </p>
            <div className="mt-4">
              <M3Chip
                variant="assist"
                label={t("contact.badge", "Available for Work")}
                icon={<span className="w-2 h-2 rounded-full bg-success animate-ping" />}
              />
            </div>
          </M3Card>

          {/* 3. Quick info */}
          <M3Card elevation={0} className="!p-0 divide-y divide-base-300/60 m3-shape-xl border border-base-300/70 overflow-hidden shadow-xs font-body-fa">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="m3-tap flex items-center gap-3.5 px-4 py-4 active:bg-base-200/60"
            >
              <span className="w-10 h-10 rounded-2xl bg-primary/15 text-primary flex items-center justify-center text-lg flex-shrink-0">
                <FaEnvelope />
              </span>
              <span className="min-w-0 flex-1 text-left rtl:text-right">
                <span className="block text-xs font-semibold text-base-content/55">
                  {t("contact.emailLabel", "Email")}
                </span>
                <span className="block text-sm font-bold text-base-content truncate mt-0.5" dir="ltr">
                  {CONTACT_INFO.email}
                </span>
              </span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="m3-tap flex items-center gap-3.5 px-4 py-4 active:bg-base-200/60"
            >
              <span className="w-10 h-10 rounded-2xl bg-success/15 text-success flex items-center justify-center text-lg flex-shrink-0">
                <FaPhone />
              </span>
              <span className="min-w-0 flex-1 text-left rtl:text-right">
                <span className="block text-xs font-semibold text-base-content/55">
                  {t("contact.phoneLabel", "Phone")}
                </span>
                <span className="block text-sm font-bold text-base-content mt-0.5 tracking-wide font-mono inline-block" dir="ltr">
                  {CONTACT_INFO.phone}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3.5 px-4 py-4">
              <span className="w-10 h-10 rounded-2xl bg-error/15 text-error flex items-center justify-center text-lg flex-shrink-0">
                <FaMapMarkerAlt />
              </span>
              <span className="min-w-0 flex-1 text-left rtl:text-right">
                <span className="block text-xs font-semibold text-base-content/55">
                  {t("contact.locationLabel", "Location")}
                </span>
                <span className="block text-sm font-bold text-base-content mt-0.5">
                  {t("contact.locationValue", "Iran")}
                </span>
              </span>
            </div>
          </M3Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}