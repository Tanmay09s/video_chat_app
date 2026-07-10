<div align="center">

# 🎥 Streamify

### Real-Time Chat & Video Calling Platform Built with the MERN Stack

Connect. Chat. Call. In real time — powered by Stream's industry-grade Chat & Video APIs.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stream](https://img.shields.io/badge/Stream_API-005FFF?style=for-the-badge&logo=stream&logoColor=white)](https://getstream.io/)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](#-license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](#-contributing)
[![Made with MERN](https://img.shields.io/badge/Made%20with-MERN-61DAFB?style=flat-square)](#-tech-stack)
[![Maintained](https://img.shields.io/badge/Maintained-yes-success.svg?style=flat-square)](#)

[🚀 Live Demo](#-live-demo) • [✨ Features](#-features) • [🛠 Installation](#-installation-guide) • [📸 Screenshots](#-screenshots) • [🤝 Contributing](#-contributing)

</div>

<br/>

<div align="center">
  <img src="https://via.placeholder.com/1200x600.png?text=Streamify+Banner" alt="Streamify Banner" width="100%"/>
</div>

<br/>

---

## 📖 Project Description

**Streamify** is a modern, production-style **real-time chat and video calling platform** built on the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to register, build a social graph through friend requests, chat instantly with typing indicators and live presence, and jump into **high-quality one-to-one audio/video calls** — all wrapped in a sleek, responsive, dark-themed UI.

Rather than reinventing real-time infrastructure from scratch, Streamify integrates **Stream's Chat and Video APIs**, giving it enterprise-grade reliability for messaging and calling out of the box. This project demonstrates practical skills in authentication, state management, REST API design, and third-party SDK integration — the kind of full-stack engineering work recruiters love to see.

> 💡 **Why this project stands out:** It's not a to-do list clone. Streamify tackles real engineering challenges — WebSocket-based real-time sync, secure JWT auth, scalable video infrastructure, and clean architecture — mirroring what's built at real SaaS companies.

---

## 🚀 Live Demo

<div align="center">

🔗 **Live URL:** [https://streamify-demo.example.com](#) *(placeholder — replace with your deployed link)*

🎬 **Demo Video:** [Watch on YouTube](#) *(placeholder)*

</div>

---

## ✨ Features

### 🔐 Authentication
| Feature | Description |
|---|---|
| User Registration | Secure sign-up with hashed passwords |
| Secure Login | Credential-based login with validation |
| JWT Authentication | Stateless, token-based session handling |
| Protected Routes | Route guards on both client & server |
| Logout | Clears session cookies/tokens securely |

### 👤 Profile
| Feature | Description |
|---|---|
| User Onboarding | Guided setup flow for new users |
| Update User Info | Edit bio, profile picture, languages, etc. |
| Profile Completion | Enforces complete profiles before full access |

### 🤝 Friend System
| Feature | Description |
|---|---|
| Send Friend Requests | Connect with other users |
| Accept Requests | Build your friend network |
| Reject Requests | Decline unwanted connections |
| Friend List | View and manage all connections |

### 💬 Real-Time Chat
| Feature | Description |
|---|---|
| One-to-One Messaging | Direct private conversations |
| Instant Delivery | Sub-second message delivery via Stream Chat |
| Online Presence | See who's online in real time |
| Typing Indicators | Live "user is typing…" feedback |
| Real-Time Sync | Messages sync instantly across devices |
| Persistent History | Full chat history stored & retrievable |

### 📹 Video Calling
| Feature | Description |
|---|---|
| HD Video Calls | One-to-one high-definition calls |
| Audio Calls | Voice-only calling option |
| Call Controls | Mute, camera toggle, end call, etc. |
| Call Notifications | Real-time incoming call alerts |
| Join / Leave Calls | Seamless call lifecycle management |
| Stream Video SDK | Powered by Stream's Video infrastructure |

### 🎨 UI/UX
| Feature | Description |
|---|---|
| Responsive Design | Works across mobile, tablet, and desktop |
| Modern Dashboard | Clean, intuitive layout |
| Dark Theme | Eye-friendly default theme |
| Beautiful Chat UI | Polished, WhatsApp-style chat experience |
| Theme Selector | Multiple theme options via DaisyUI/Tailwind |
| Loading Skeletons | Smooth perceived-performance loading states |

---

## 🛠 Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat-square&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-338AF3?style=flat-square&logo=letsencrypt&logoColor=white)

### Third-Party Services
![Stream Chat](https://img.shields.io/badge/Stream_Chat_API-005FFF?style=flat-square&logo=stream&logoColor=white)
![Stream Video](https://img.shields.io/badge/Stream_Video_API-005FFF?style=flat-square&logo=stream&logoColor=white)

</div>

---

## 🏗 Project Architecture

Streamify follows a **clean, modular separation** between frontend and backend, making the codebase scalable and easy to navigate.

```
┌─────────────────────┐         REST API / JWT         ┌─────────────────────┐
│                      │  ─────────────────────────▶    │                     │
│   React Frontend     │                                 │   Express Backend   │
│   (Vite + Tailwind)  │  ◀─────────────────────────    │   (Node.js)         │
│                      │         JSON Responses          │                     │
└──────────┬───────────┘                                 └──────────┬──────────┘
           │                                                         │
           │  Stream SDKs (Chat/Video)                   Mongoose ODM│
           ▼                                                         ▼
   ┌───────────────┐                                       ┌─────────────────┐
   │  Stream Cloud  │                                       │    MongoDB      │
   │ (Chat & Video) │                                       │   (Database)    │
   └───────────────┘                                       └─────────────────┘
```

**Backend layers:** Controllers → Routes → Models → Middleware → Stream API Integration → MongoDB
**Frontend layers:** Components → Hooks → Pages → Zustand Store → API Layer → Utility Functions

---

## 📁 Folder Structure

```
streamify/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Business logic (auth, users, chat, etc.)
│   │   ├── routes/            # Express route definitions
│   │   ├── models/            # Mongoose schemas (User, FriendRequest, etc.)
│   │   ├── middleware/        # Auth guards, error handlers
│   │   ├── lib/                # Stream API config, DB connection
│   │   ├── config/             # Environment & app configuration
│   │   └── server.js           # App entry point
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/              # Route-level pages (Login, Chat, Call, etc.)
│   │   ├── hooks/               # Custom React hooks
│   │   ├── store/                # Zustand global state
│   │   ├── lib/                  # Axios instance, API helpers
│   │   ├── constants/            # App-wide constants
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation Guide

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v18+)
- **npm** or **yarn**
- **MongoDB** (local or Atlas cluster)
- A **Stream** account ([getstream.io](https://getstream.io)) for API keys

### Clone the Repository

```bash
git clone https://github.com/your-username/streamify.git
cd streamify
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **`backend/`** directory:

```env
# Server
PORT=5001
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongodb_connection_string

# JWT
JWT_SECRET_KEY=your_jwt_secret_key

# Stream API
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Client
CLIENT_URL=http://localhost:5173
```

Create a `.env` file inside the **`frontend/`** directory:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

> ⚠️ **Never commit your `.env` files.** Ensure they're listed in `.gitignore`.

---

## ▶️ How to Run the Project

### Run Backend (Development)

```bash
cd backend
npm run dev
```

### Run Frontend (Development)

```bash
cd frontend
npm run dev
```

The app will be available at:
- 🌐 Frontend → `http://localhost:5173`
- 🔧 Backend API → `http://localhost:5001`

<details>
<summary>🏭 Production Build</summary>

```bash
# Build frontend
cd frontend
npm run build

# Start backend in production mode
cd ../backend
npm start
```

</details>

---

## 📡 API Overview

| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/api/auth/signup` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login existing user | ❌ |
| `POST` | `/api/auth/logout` | Logout current user | ✅ |
| `POST` | `/api/auth/onboarding` | Complete user profile | ✅ |
| `GET` | `/api/users` | Get recommended users | ✅ |
| `GET` | `/api/users/friends` | Get friend list | ✅ |
| `POST` | `/api/users/friend-request/:id` | Send a friend request | ✅ |
| `PUT` | `/api/users/friend-request/:id/accept` | Accept a friend request | ✅ |
| `GET` | `/api/users/friend-requests` | Get incoming/outgoing requests | ✅ |
| `GET` | `/api/chat/token` | Generate Stream Chat token | ✅ |

<details>
<summary>📄 Sample Response — <code>GET /api/users/friends</code></summary>

```json
{
  "friends": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "fullName": "Jane Doe",
      "profilePic": "https://api.dicebear.com/avatars/jane.png",
      "nativeLanguage": "English",
      "learningLanguage": "Spanish"
    }
  ]
}
```

</details>

---

## 🔒 Authentication Flow

1. **Signup/Login** → User credentials are validated on the backend.
2. **Password Hashing** → Passwords are hashed using **bcrypt** before storage.
3. **JWT Issuance** → On success, a signed **JWT** is generated and set as an **HTTP-only cookie**.
4. **Protected Routes** → Middleware verifies the JWT on every protected request.
5. **Auto Session Persistence** → Cookie-based sessions keep users logged in across refreshes.
6. **Logout** → Clears the JWT cookie, invalidating the session.

```
Client                     Server                     Database
  │                           │                            │
  ├── POST /login ───────────▶│                            │
  │                           ├── Verify credentials ─────▶│
  │                           │◀── User found + hash match ┤
  │                           ├── Generate JWT              │
  │◀── Set-Cookie: token ─────┤                            │
  │                           │                            │
  ├── GET /protected ────────▶│                            │
  │   (cookie auto-attached)  ├── Verify JWT (middleware)   │
  │◀── Authorized Response ───┤                            │
```

---

## 🎬 Stream API Integration

Streamify leverages **[Stream](https://getstream.io)'s Chat and Video APIs** to deliver production-grade real-time communication — **without building complex real-time infrastructure from scratch**.

### Why Stream?

- 💬 **Scalable Messaging Components** — Battle-tested chat infrastructure handling millions of messages reliably, with built-in support for typing indicators, read receipts, and online presence.
- 🔐 **Authentication Support** — Token-based auth that integrates cleanly with our own JWT system for secure, per-user Stream sessions.
- ⚛️ **Customizable React SDKs** — Stream's React Chat & Video SDKs provide ready-to-style components that we've themed to match Streamify's custom UI.
- 📹 **Video Communication Capabilities** — High-quality, low-latency one-to-one video and audio calls with call controls, notifications, and join/leave handling — powered by Stream's global video infrastructure.

### Integration Highlights

- Each authenticated user is issued a **Stream token** generated server-side using the Stream API secret.
- The frontend initializes a **Stream Chat client** and **Stream Video client** using this token, enabling secure, per-user real-time channels.
- Chat channels are created dynamically between friends, with **persistent history** synced through Stream's backend.
- Video calls are launched via **unique call IDs**, giving each conversation the option to instantly escalate from chat to a live video/audio call.

> This integration allowed the project to focus on core product features — friend systems, onboarding, UI/UX — instead of reinventing WebSocket infrastructure, message queuing, and media servers.

---

## 🌟 Project Highlights

- ✅ Full **MERN stack** implementation with clean separation of concerns
- ✅ **Production-grade real-time chat** using Stream Chat API
- ✅ **HD video/audio calling** using Stream Video API
- ✅ Secure **JWT + bcrypt** authentication system
- ✅ Global state management with **Zustand**
- ✅ Efficient server-state caching using **TanStack Query**
- ✅ Fully **responsive**, modern **dark-themed UI**
- ✅ RESTful, well-structured API design

---

## 🔮 Future Improvements

- [ ] Group chat & group video calling
- [ ] Message reactions and file/media sharing
- [ ] Push notifications (Web Push / FCM)
- [ ] End-to-end encrypted messaging
- [ ] User blocking & reporting system
- [ ] Admin dashboard & analytics
- [ ] Mobile app using React Native
- [ ] Docker + CI/CD deployment pipeline

---

## 🎓 Learning Outcomes

Building Streamify strengthened skills in:

- Designing and consuming **RESTful APIs** with Express.js
- Implementing **secure authentication** using JWT & bcrypt
- Managing complex **client-side state** with Zustand & TanStack Query
- Integrating **third-party real-time SDKs** (Stream Chat & Video)
- Structuring a **scalable MERN codebase** with clean architecture
- Building **responsive, accessible UI** with Tailwind CSS
- Handling **real-time events** (presence, typing indicators, live sync)

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

<details>
<summary>📋 Contribution Guidelines</summary>
<br/>

- Follow the existing code style and folder structure
- Write clear, descriptive commit messages
- Test your changes before submitting a PR
- Update documentation where relevant

</details>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

<div align="center">

**Your Name**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

</div>

---

<div align="center">

### ⭐️ If you found this project interesting, consider giving it a star!

Made with ❤️ and lots of ☕ by **[Your Name](#)**

<sub>Built with the MERN Stack • Powered by Stream</sub>

</div>
