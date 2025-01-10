# EthnicOkay - Modern Chat App

EthnicOkay is a modern, cross-platform chat application designed to facilitate private messaging, group chats, and offline support. The app allows users to connect, communicate, and share in a secure environment. With features like contacts management, notifications, reading receipts, and more, EthnicOkay aims to provide a seamless user experience.

This project is built with **React Native** for the mobile app and **Node.js** for the backend, utilizing **MongoDB** for data storage.

---

## Features

- **Private Messaging**: Secure one-on-one messaging between users.
- **Group Chats**: Create and manage group chats with multiple participants.
- **Offline Support**: Continue chatting even when there is no internet connection.
- **Contacts Management**: Add, remove, and manage contacts in your network.
- **Notifications**: Real-time push notifications for new messages, mentions, etc.
- **Reading Receipts**: Know when your message has been read by the recipient.
- **Authentication**: User authentication via email and password.
- **Message History**: View chat history for all conversations.

---

## Tech Stack

- **Frontend**: React Native (for cross-platform mobile development)
- **Backend**: Node.js (Express)
- **Database**: MongoDB (NoSQL database)
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: Socket.io (for real-time messaging)
- **Push Notifications**: Firebase Cloud Messaging (FCM)

---

## Installation

### Prerequisites

Before running the app, ensure you have the following installed:

- Node.js and npm (or yarn)
- MongoDB (local or cloud service like MongoDB Atlas)
- React Native CLI (for building the mobile app)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ethnicokay.git
   cd ethnicokay/backend
2. Install backend dependencies:
   ```bash
   npm install
3. Create a .env file in the backend folder and set the following environment variables:
    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/ethnicokay
    JWT_SECRET=your_jwt_secret_key
    FCM_SERVER_KEY=your_fcm_server_key
4. Start the backend server:
    ```bash
    npm start

### Frontend Setup
1. Navigate to the frontend directory:

   ```bash
   cd ethnicokay/frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Update API endpoint URLs in your frontend code to match the backend API.
4. Run the React Native app on an emulator or real device:
   For iOS:
      ```bash
      npx react-native run-ios
   For Android:
      ```bash
      npx react-native run-android
