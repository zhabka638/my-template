#!/bin/bash

# Скрипт для загрузки Linux-тематических изображений
# Использует бесплатные изображения из Unsplash и Pexels

IMAGES_DIR="images"
mkdir -p "$IMAGES_DIR"

echo "🐧 Загрузка Linux-изображений..."

# Banner - терминал с кодом
echo "📥 Загрузка banner.jpg..."
curl -L "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&q=80" \
  -o "$IMAGES_DIR/banner.jpg"

# pic01.jpg - Tux логотип (Wikipedia)
echo "📥 Загрузка pic01.jpg (Tux)..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" \
  -o "$IMAGES_DIR/tux.svg"
# Конвертируем SVG в JPG если установлен ImageMagick
if command -v convert &> /dev/null; then
  convert "$IMAGES_DIR/tux.svg" -resize 200x200 "$IMAGES_DIR/pic01.jpg"
  rm "$IMAGES_DIR/tux.svg"
else
  echo "⚠️  ImageMagick не установлен. Пропускаем конвертацию pic01.jpg"
fi

# pic02.jpg - Ubuntu/GNOME desktop
echo "📥 Загрузка pic02.jpg..."
curl -L "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=1200&q=80" \
  -o "$IMAGES_DIR/pic02.jpg"

# pic03.jpg - KDE Plasma
echo "📥 Загрузка pic03.jpg..."
curl -L "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80" \
  -o "$IMAGES_DIR/pic03.jpg"

# pic04.jpg - Терминал
echo "📥 Загрузка pic04.jpg..."
curl -L "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80" \
  -o "$IMAGES_DIR/pic04.jpg"

# pic05.jpg - Ubuntu theme
echo "📥 Загрузка pic05.jpg..."
curl -L "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?w=800&q=80" \
  -o "$IMAGES_DIR/pic05.jpg"

# pic06.jpg - Минималистичный setup
echo "📥 Загрузка pic06.jpg..."
curl -L "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" \
  -o "$IMAGES_DIR/pic06.jpg"

# pic07.jpg - Серверы
echo "📥 Загрузка pic07.jpg..."
curl -L "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?w=800&q=80" \
  -o "$IMAGES_DIR/pic07.jpg"

# pic08.jpg - Облачные технологии
echo "📥 Загрузка pic08.jpg..."
curl -L "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?w=800&q=80" \
  -o "$IMAGES_DIR/pic08.jpg"

echo "✅ Загрузка завершена!"
echo ""
echo "Альтернативные источники для ручной загрузки:"
echo "- Ubuntu: https://ubuntu.com/download/desktop"
echo "- Arch Linux: https://archlinux.org/art/"
echo "- Fedora: https://fedoraproject.org/wiki/Logo"
echo "- Unsplash: https://unsplash.com/s/photos/linux"
echo "- Pexels: https://pexels.com/search/programming/"
