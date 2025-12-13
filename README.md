
# 📄 Bulk PDF Generator (JSON-Driven)

![GitHub Repo stars](https://img.shields.io/github/stars/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
![License](https://img.shields.io/github/license/BR1JM0H4N/Bulk-pdf-gen?style=for-the-badge)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge)](https://br1jm0h4n.github.io/Bulk-pdf-gen/)
![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge)
![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)

---

A **browser-based bulk PDF generator** that lets you place dynamic and static text fields on a template PDF using a JSON configuration, preview results live on canvas, and export hundreds of PDFs or reusable presets — **no backend required**.

🚀 Built with **pdf-lib**, **PDF.js**, **JSZip**, and pure **HTML/CSS/JS**  
📱 Optimized for **mobile & Android WebView**  
🎨 Dark Material-inspired UI

---

## 🔗 Live Demo

👉 **Demo Page:**  
https://br1jm0h4n.github.io/Bulk-pdf-gen/

👉 **Repository:**  
https://github.com/BR1JM0H4N/Bulk-pdf-gen

---

## ✨ Features

### 📑 Template-Based PDF Generation
- Upload any **PDF template**
- Place text precisely using **X/Y coordinates**
- Supports **multiple fonts (TTF/OTF)**

---

### 🧠 JSON-Driven Configuration
- Define fields once, generate unlimited PDFs
- Supports:
  - **Dynamic fields**
  - **Static fields**

```json
{
  "fields": {
    "name": {
      "posX": 360,
      "posY": 329,
      "fontSize": 20,
      "color": "#000000",
      "align": "righted",
      "font": "gint"
    },
    "id": {
      "posX": 443,
      "posY": 345,
      "fontSize": 20,
      "color": "#000000",
      "align": "centred",
      "font": "gint"
    },
    "set": {
      "posX": 556,
      "posY": 345,
      "fontSize": 20,
      "color": "#000000",
      "align": "default",
      "font": "gint"
    },
    "Dean": {
      "type":"static",
      "value":"Mr.Vishal (MD,MS)",
      "posX": 400,
      "posY": 345,
      "fontSize": 20,
      "color": "#000000",
      "align": "default",
      "font": "gint"
    }
  },
  "values":[
    {
      "name": "C PANDEY",
      "id": "1220442",
      "set": "A"
    },
    {
      "name": "R KUMAR",
      "id": "1220037",
      "set": "B"
    },
    {
      "name": "RAVI KUMAR",
      "id": "1220137",
      "set": "A"
    }
  ]
}
````

---

### 🖼️ Live Canvas Preview

* Generates a real PDF
* Renders first page instantly on `<canvas>`
* Accurate WYSIWYG output

---

### 🧾 Bulk Export

* Generate multiple PDFs
* Auto-zipped download
* Smart file naming

---

### 🧩 Field Editor

* Font selection
* Color picker
* Alignment controls
* X/Y positioning
* Snap to page center (X & Y)
* Add / update fields live

---

### 🗂️ Values Editor

* Add / edit dynamic entries
* No manual JSON editing needed

---

### 🎨 Font Management

* Upload TTF / OTF fonts
* Auto-populated dropdown
* Safe fallback to system fonts

---

### 📦 Preset System (`.pep`)

Custom **PDF Editor Preset** format bundling:

* Template PDF
* Config JSON
* Fonts

Perfect for reuse & sharing.

---

### 🌙 Dark Material UI

* Android 15 inspired
* Touch friendly
* Mobile responsive

---

## 🛠️ Tech Stack

* **pdf-lib**
* **PDF.js**
* **JSZip**
* **FileSaver.js**
* **Vanilla JavaScript**

---

## 📱 Supported Platforms

* Desktop browsers
* Mobile browsers
* Android WebView
* Offline capable

---

## 🧭 Roadmap

* Drag & drop fields
* Multi-page PDFs
* Alignment guides
* PWA / APK build

---

## 🧑‍💻 Author

**BR1JM0H4N**
GitHub: [https://github.com/BR1JM0H4N](https://github.com/BR1JM0H4N)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🐛 Report bugs
* 💡 Suggest features

---

## 📜 License

MIT License

