$source = "c:\laragon\www\php-practice\personal-website\images"
$dest = "c:\laragon\www\php-practice\personal-website\portfolio-nextjs\public\images\projects"
$destRoot = "c:\laragon\www\php-practice\personal-website\portfolio-nextjs\public\images"

Write-Host "Copying new images..."

# Ensure directories exist
if (-not (Test-Path -Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest | Out-Null
}

# List of files to copy
$filesToCopy = @(
    "cloud-ketichen.png",
    "finance.png",
    "interior3d.png",
    "courier.png",
    "elearning.png",
    "whatsapp.png",
    "recipe.png",
    "POS.PNG",
    "login_hms.png",
    "ecommerce.png",
    "Real Estate.PNG"
)

foreach ($file in $filesToCopy) {
    if (Test-Path "$source\$file") {
        Copy-Item "$source\$file" "$dest\$file" -Force
        Write-Host "Copied $file"
    } else {
        Write-Warning "File not found in source: $file"
    }
}

# Special case: copy courier.png to root images folder as well if needed
if (Test-Path "$source\courier.png") {
    Copy-Item "$source\courier.png" "$destRoot\courier.png" -Force
}

Write-Host "Image copy completed."
