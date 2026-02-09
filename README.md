# ProcureHub - Landing Page Pengadaan Barang

Landing page modern dan responsif untuk perusahaan yang bergerak di bidang pengadaan barang. Dirancang dengan design yang fresh, clean, dan user-friendly.

## 🎨 Fitur Utama

### 1. **Header & Navigation**
- Navbar yang sticky dan responsif
- Menu navigasi yang smooth
- Hamburger menu untuk mobile devices
- Logo perusahaan (ProcureHub)

### 2. **Hero Section**
- Welcome message yang menarik
- Call-to-action buttons
- Animasi shape yang floating
- Gradient background yang modern

### 3. **Services Section**
- 6 layanan utama dengan icon
- Hover effect yang interaktif
- Grid layout yang responsive
- Deskripsi layanan yang jelas

### 4. **Features Section**
- 6 keunggulan perusahaan
- Numbered feature items
- Border accent untuk visual hierarchy
- Responsive grid layout

### 5. **Statistics Section**
- Counter animation
- Showcase key metrics
- Gradient background
- Mobile friendly

### 6. **Testimonial Section**
- 3 customer testimonials
- 5-star rating display
- Author information
- Hover effects

### 7. **Newsletter Subscription**
- Email subscription form
- Gradient background
- Call-to-action yang jelas

### 8. **Contact Section**
- Contact information (alamat, telepon, email, jam operasional)
- Contact form dengan validation
- 2-column layout untuk desktop
- Mobile responsive

### 9. **Footer**
- Company information
- Links navigation
- Social media links
- Copyright information

## 📱 Responsive Design

Landing page ini fully responsive untuk semua ukuran layar:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (optimized layout)
- **Mobile**: < 768px (single column layout)

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantic markup
- **CSS3**: Modern styling dengan CSS variables
- **JavaScript**: Vanilla JS untuk interaktifitas
  - Smooth scrolling
  - Form validation
  - Counter animation
  - Mobile menu toggle
  - Scroll effects

## 📦 File Structure

```
AMH07/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🎯 Fitur JavaScript

1. **Smooth Scrolling** - Navigasi antar section dengan smooth effect
2. **Form Validation** - Validasi input form untuk contact dan newsletter
3. **Hamburger Menu** - Mobile menu toggle dengan responsif
4. **Scroll Animation** - Fade in effect untuk cards saat di-scroll
5. **Counter Animation** - Animate statistics dengan counting effect
6. **Navbar Effect** - Shadow change saat scroll
7. **Active Link Tracking** - Highlight navigation link berdasarkan section yang aktif

## 🎨 Color Scheme

- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #1e40af (Dark Blue)
- **Accent Color**: #f59e0b (Amber)
- **Light Background**: #f8fafc (Light Blue-Gray)
- **Dark Text**: #1e293b (Dark Blue-Gray)
- **Light Text**: #64748b (Gray)

## 🚀 Cara Menggunakan

1. **Buka di Browser**
   - Double-click `index.html`
   - Atau drag-drop ke browser

2. **Live Server (VS Code)**
   - Install extension "Live Server"
   - Right-click `index.html` → "Open with Live Server"

3. **Customize Content**
   - Edit `index.html` untuk mengubah teks dan struktur
   - Edit `style.css` untuk mengubah warna dan styling
   - Edit `script.js` untuk mengubah fungsionalitas

## 📋 Customization Guide

### Mengubah Nama Perusahaan
Edit di `index.html`:
```html
<div class="logo">
    <h2>Nama Perusahaan Anda</h2>
</div>
```

### Mengubah Warna Utama
Edit di `style.css`:
```css
:root {
    --primary-color: #warna-anda;
    --secondary-color: #warna-anda;
    --accent-color: #warna-anda;
}
```

### Mengubah Informasi Kontak
Edit di `index.html` section `#contact`:
```html
<div class="info-item">
    <h3>📍 Alamat</h3>
    <p>Alamat Anda</p>
</div>
```

### Menambah/Mengurangi Service Cards
Duplicate atau hapus div `.service-card` di section `#services`

## ✨ Best Practices Implementasi

1. **SEO Optimization**
   - Tambahkan meta description
   - Optimize heading structure (h1, h2, h3)
   - Add schema markup untuk structured data

2. **Performance**
   - Minify CSS dan JavaScript
   - Optimize images
   - Lazy loading untuk images

3. **Security**
   - Sanitize form input
   - Add CSRF protection untuk form submission
   - Use HTTPS

4. **Accessibility**
   - Add aria-labels
   - Semantic HTML elements
   - Keyboard navigation support

## 🐛 Troubleshooting

### Menu tidak responsive
- Pastikan JavaScript dimuat dengan benar
- Check browser console untuk error messages

### Form tidak berfungsi
- Verify input field names dan types
- Check browser console untuk validation errors

### Styling tidak sesuai
- Clear browser cache (Ctrl+Shift+Delete)
- Reload page dengan Ctrl+Shift+R

## 📞 Support

Untuk customization lebih lanjut atau tambahan fitur, hubungi tim development Anda.

---

**Version**: 1.0  
**Last Updated**: February 2024  
**Created with ❤️ for ProcureHub**
