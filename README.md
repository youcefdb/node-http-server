# 🧠 Node.js HTTP Server (Vanilla Node)

A simple yet powerful HTTP server built with **pure Node.js**, without using Express or any framework.  
This project demonstrates how web servers actually work under the hood.


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
```

```text
## ▶️ Getting Started

1️⃣ Clone the repository
  git clone https://github.com/your-username/your-repo-name.git
  cd your-repo-name

2️⃣ Install dependencies

3️⃣ Run the server
  npm start

4️⃣ Open in browser
  http://localhost:3500
```

```text
## 📚 What You Learn From This Project

How HTTP really works
Difference between URL and filesystem paths
How browsers request assets (images, favicon…)
Why Content-Type matters
How Express/NestJS work internally
How to safely serve static files
Why binary files must not be read as UTF-8
```
