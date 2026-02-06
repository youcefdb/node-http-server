# 🧠 Node.js HTTP Server (Vanilla Node)

A simple yet powerful HTTP server built with **pure Node.js**, without using Express or any framework.  
This project demonstrates how web servers actually work under the hood.

---

## 🚀 Features

- ✅ Built with **Node.js core modules only**
- 📄 Serve HTML pages (views)
- 🖼 Serve static assets (images, css, js, pdf…)
- 🔄 URL routing (manual)
- 🔁 Redirects using HTTP status codes (301)
- ❌ Custom 404 page
- 📝 Request & error logging using `EventEmitter`
- 📦 Correct handling of text vs binary files
- 🧠 Educational & beginner-friendly architecture

---

## 📂 Project Structure

```text
project/
├── views/
│   ├── index.html
│   ├── 404.html
│   └── newPage.html
├── images/
│   └── reds.png
├── eventLogs.js
├── server.js
├── README.md
├── package.json
└── package-lock.json
