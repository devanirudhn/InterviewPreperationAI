#Interview Preparation AI

An AI-powered interview preparation platform that helps users practice technical interviews by generating role-based interview questions using Google's Gemini AI.

Built using the MERN stack with AI integration.

 Features

User Authentication (Signup/Login with JWT)

AI-generated interview questions

Role-based interview preparation

Interview session tracking

Secure backend APIs

MongoDB database storage

RESTful API architecture

Tech Stack

Frontend

React.js

Backend

Node.js

Express.js

Database

MongoDB

AI Integration

Google Gemini API

Tools & Libraries

Mongoose

JWT Authentication

dotenv

Axios

CORS

 Project Structure
ai-interview-prep
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── middleware
│   │   └── verifyToken.js
│   ├── models
│   │   ├── User.js
│   │   └── Session.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── sessionRoutes.js
│   │   └── aiRoutes.js
│   ├── .env
│   └── server.js
│
└── frontend
    └── src
        ├── pages
        │   ├── Login.jsx
        │   ├── Dashboard.jsx
        │   └── Interview.jsx
        ├── api
        │   └── axios.js
        └── App.jsx
