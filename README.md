# 🧩 Google Drive Protected PDF Downloader - Browser Extension

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-blue.svg" alt="Manifest V3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow.svg" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chrome%20%7C%20Edge%20%7C%20Brave-Supported-success.svg" alt="Browser Support">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
</p>

A convenient browser extension (Manifest V3) that automates the extraction of protected view-only PDF files from Google Drive with a single click.

---

## 📑 Table of Contents
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Installation Guide](#-installation-guide)
- [How to Use](#-how-to-use)
- [Repository Structure](#-repository-structure)
- [License](#-license)

---

## ✨ Features

* **One-Click Execution:** No need to open Developer Tools (`F12`) or copy-paste code into the console manually.
* **Automated Scrolling:** Detects document scrollbars and automatically performs background scrolling to load all lazy-loaded PDF pages.
* **Clean Filenames:** Automatic filename sanitation to ensure compatibility with local file systems.
* **Manifest V3 Compliant:** Built using current Web Extension standards for fast execution, enhanced security, and low memory consumption.

---

## ⚙️ How It Works

1. **Trigger:** Clicking the extension action icon injects `content.js` into the active Google Drive tab.
2. **Auto-Scan & Scroll:** The extension locates the scrollable document viewer and progressively scrolls to ensure every page renders.
3. **Extraction:** It reads the rendered high-resolution image blobs from the document canvas.
4. **Data Export:** A `.PDF_DataFile` containing raw image stream data is generated and downloaded automatically.
5. **PDF Conversion:** Use the local converter CLI (`GeneratePDF.cmd`) from the core project to build the final high-quality `.pdf` document.

---

## 🛠️ Installation Guide

Since this is a custom extension, install it in **Developer Mode**:

1. **Download or Clone** this repository to your computer.
2. Open your Chromium-based browser (Google Chrome, Microsoft Edge, Brave, Opera).
3. Navigate to the extensions management page:
   * **Chrome:** `chrome://extensions/`
   * **Edge:** `edge://extensions/`
   * **Brave:** `brave://extensions/`
4. Enable **Developer mode** using the toggle switch (usually in the top right corner).
5. Click **Load unpacked** (*Carregar sem compactação*).
6. Select the folder containing the extension files (`manifest.json`, `background.js`, `content.js`).

---

## 🚀 How to Use

1. Open a protected **view-only** PDF file in Google Drive.
2. Click on the **Google Drive PDF Downloader** extension icon in your browser toolbar.
3. Allow the extension to automatically scroll down and scan all document pages.
4. Once finished, a file named `Document.PDF_DataFile` will be saved to your default **Downloads** directory.
5. Move the `.PDF_DataFile` to the `Input/` folder of the conversion tool and execute `GeneratePDF.cmd` to get your finished PDF document.

---

## 📁 Repository Structure

```text
gdrive-pdf-downloader-extension/
├── manifest.json      # Extension configuration (Manifest V3)
├── background.js      # Service worker for handling click events
├── content.js         # Injected script handling auto-scroll and extraction
└── README.md          # Project documentation
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).