Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile((Join-Path (Get-Location) 'public/img/about_photo.jpg'))

function Resize-And-Save([System.Drawing.Image]$source, [int]$w, [int]$h, [string]$dest) {
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.DrawImage($source, 0, 0, $w, $h)
    $bmp.Save((Join-Path (Get-Location) $dest), [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Resize-And-Save $img 32 32 'public/favicon-32.png'
Resize-And-Save $img 16 16 'public/favicon-16.png'
Resize-And-Save $img 180 180 'public/apple-touch-icon.png'
$img.Dispose()
Write-Output "Favicons generated successfully!"
