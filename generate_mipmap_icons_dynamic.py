from PIL import Image, ImageDraw
import os

# Одоогийн folder
base_dir = os.path.dirname(os.path.abspath(__file__))

# Орж буй PNG зам
input_file = os.path.join(base_dir, "assets", "Simix.png")

# Android mipmap folder
res_base = os.path.join(base_dir, "android", "app", "src", "main", "res")

# mipmap хэмжээнүүд
mipmap_sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192
}

# PNG нээх
im = Image.open(input_file).convert("RGBA")
w, h = im.size

# Дугуй mask үүсгэх
mask = Image.new('L', (w, h), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0,0,w,h), fill=255)

# Дугуй PNG үүсгэх
im.putalpha(mask)

for folder, size in mipmap_sizes.items():
    output_dir = os.path.join(res_base, folder)
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    resized = im.resize((size, size), Image.Resampling.LANCZOS)

    # Launcher icon
    resized.save(os.path.join(output_dir, "ic_launcher.png"))
    # Round icon
    resized.save(os.path.join(output_dir, "ic_launcher_round.png"))

print("Android mipmap icons амжилттай үүсгэлээ!")
