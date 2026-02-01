# CBZ to PDF Converter

A **client-side web application** that converts `.cbz` (Comic Book ZIP) files into high-quality PDF documents **directly in the browser**. No uploads, no servers, no tracking — your files stay on your device.

---

## ✨ Features

* 📚 Convert CBZ comic files to PDF
* 🖼️ Preserves original image resolution
* ⚡ Fast, fully client-side conversion
* 🔒 Files never leave your browser
* 🎞️ Animated loading indicator for better UX
* 💬 User feedback with toast notifications

---

## 🧠 How It Works (High-Level)

1. The user selects a `.cbz` file from their device
2. The app treats the CBZ file as a ZIP archive
3. All image files inside the archive are extracted
4. Each image is added as a full-size page in a PDF
5. The final PDF is generated and downloaded automatically

Everything runs **locally in the browser** using JavaScript.

---

## 🛠️ Tech Stack

* **React** – UI and state management
* **JSZip** – Reading and extracting CBZ (ZIP) files
* **pdf-lib** – Creating and exporting PDF files
* **GSAP** – Loading animation
* **react-hot-toast** – User notifications
* **Tailwind CSS** – Styling

---

## 📦 Supported Formats

* Input: `.cbz`
* Embedded images:

  * JPG / JPEG
  * PNG
  * WEBP
* Output: `.pdf`

---

## 🚀 Application Flow

### 1. File Upload

* User selects a `.cbz` file
* File is validated and stored in state
* Success or error feedback is shown

### 2. Conversion

* ZIP archive is loaded from the CBZ file
* Image files are filtered from the archive
* A new PDF document is created
* Each image becomes one PDF page

### 3. Download

* PDF is finalized and saved
* Browser automatically downloads the file
* User receives a success message with page count

---

## ⏳ Loading Experience

* While converting, a modal overlay appears
* A looping animation indicates progress
* UI interactions are disabled during conversion

This improves clarity, trust, and perceived performance.

---

## ❌ Error Handling

The app gracefully handles common errors:

* No file selected
* Invalid or empty CBZ files
* CBZ files with no images
* Parsing or conversion failures

Clear error messages are shown to guide the user.

---

## 🔐 Privacy & Security

* No file uploads
* No server interaction
* No analytics or tracking
* Files exist only in memory during conversion

Your data never leaves your browser.

---

## 📌 Known Limitations

* Image order depends on file naming inside the CBZ
* Very large CBZ files may take longer to process
* No progress percentage (only loading indicator)

---

## 🌱 Future Improvements

* Natural sorting of comic pages
* Drag-and-drop file upload
* Progress bar with percentage
* Preserve CBZ filename for output PDF
* Multi-file batch conversion

---

## 👤 Author

Made with ❤️ by **Emmanuel**

---

## 📄 License

This project is open-source and intended for educational and personal use.

---

If you find this project useful, feel free to improve it, share it, or build on top of it 🚀
