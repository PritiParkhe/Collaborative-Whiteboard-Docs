# 📄 Collaborative Whiteboard / Docs

A **Google Docs–style collaborative editor** built with MERN stack, WebSockets, and Redis.
Supports **real-time editing, authentication (JWT + Google OAuth), version history, and cloud deployment**.

---

## 🚀 Features

- 🔑 **Authentication**: Email/password + Google login (JWT protected routes)
- 📝 **Real-time collaboration**: Multiple users editing the same doc live
- 📊 **Version history**: Track and restore document changes
- 🎨 **Rich-text editing**: Bold, italic, underline, headings
- ☁️ **Deployment ready**: Docker, Kubernetes, AWS/Render setup

---

## 🛠 Tech Stack

**Frontend**: React, TailwindCSS, Redux, React Router
**Backend**: Node.js, Express.js, MongoDB, Socket.io
**Auth**: JWT, Google OAuth
**Realtime**: WebSockets + Redis pub/sub
**Deployment**: Docker, Kubernetes, AWS/GCP

---

## 📂 Project Structure

```
collab-whiteboard-docs/
├── client/      # React frontend
├── server/      # Express backend
├── deployment/  # Docker + Kubernetes setup
```

---

## ⚡ Getting Started

### 1️⃣ Clone Repo

```bash
git clone https://github.com/YOUR-USERNAME/collab-whiteboard-docs.git
cd collab-whiteboard-docs
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
cp .env.example .env   # Add MongoDB URI, JWT_SECRET, Google Client ID
npm start
```

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm start
```

---

## 🌍 Deployment

- **Docker**: `docker-compose up --build`
- **Kubernetes**: manifests available in `/deployment/kubernetes-manifests/`

---

## 📸 Screenshots

_(Add images here once UI is ready)_

- **Login Page with Google OAuth**
- **Dashboard with documents**
- **Collaborative editor in action**

---

## 🎯 Roadmap

- [ ] Add comments + chat sidebar
- [ ] Add collaborative drawing board
- [ ] Add export to PDF/Markdown

---

## 🤝 Contributing

Pull requests are welcome!

---

## 📜 License

MIT License
