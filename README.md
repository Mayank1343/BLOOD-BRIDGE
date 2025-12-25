# 🩸 Community Blood Donation – Full Stack Application

A **full-stack web application** that connects voluntary **blood donors** with people who need blood.  
The system is built with a **Spring Boot REST API** backend and a **React single-page application** frontend.

The backend is deployed on **Render**, and the frontend is deployed on **Netlify**, making the app fully cloud-ready and production-usable.

---

## 🚀 Live Demo

- **Frontend (Netlify):**  
  👉 https://superlative-marshmallow-9c48ab.netlify.app

- **Backend (Render):**  
  👉 https://community-blood-donation-api.onrender.com


---

## ✨ Features

### 🧑‍⚕️ Donor Management
- Add new donors with:
  - Name  
  - Blood group  
  - City  
  - Contact details
- View a **paginated donor list**
- Basic filtering support

### 🩸 Blood Request Management
- Create blood requests with: 
  - City 
  - Required blood units
- View open blood requests so donors can respond quickly

### 🎨 Clean React UI
- Single-page application (SPA)
- Simple navigation between:
  - **Donor List**
  - **Register Donor**
- Centralized **Axios service layer**
- Environment-based API configuration

### ☁️ Cloud-Ready Architecture
- Spring Boot backend deployed on **Render**
- React frontend deployed on **Netlify**
- Environment variables used for API base URLs

---

## 🛠 Tech Stack

### Backend
- Java  
- Spring Boot  
- Spring Web  
- Spring Data JPA  

### Frontend
- React (Create React App)  
- React Router  
- Axios  

### Infrastructure & Tools
- Maven (backend builds)
- npm / yarn (frontend)
- Render (API hosting)
- Netlify (frontend hosting)

---

## 📁 Project Structure
<img width="597" height="325" alt="image" src="https://github.com/user-attachments/assets/d50cbec1-8748-4091-9ac1-dd4753475333" />



---

## 🧩 Running the Project Locally

### 1️⃣ Prerequisites
Make sure you have the following installed:

- Java **17+**
- Maven **3+**
- Node.js **18+**
- npm or yarn
- Git

---

### 2️⃣ Clone the Repository
git clone https://github.com/Mayank1343/Community-Blood-Donation-API.git

cd Community-Blood-Donation-API

### 3️⃣ Start the Backend (Spring Boot)
cd blood-donation-api
mvn clean spring-boot:run

### 4️⃣ Start the Frontend (React)
npm install

npm start

## ☁️ Deployment Guide

This project is designed for **cloud deployment** using:

- **Render** → Spring Boot backend  
- **Netlify** → React frontend  

---

### A️⃣ Deploying the Backend on Render

1. Push your code to GitHub
2. Go to **Render** and create a new **Web Service**
3. Connect your GitHub repository
4. Set the backend root directory to `blood-donation-api`

**Render Configuration:**

Build Command: mvn clean package
Start Command: java -jar target/*.jar
Runtime: Java 17


## 📌 How to Use the App

1. Open the app (local or Netlify URL)
2. Use the navigation bar to:
   - View the **Donor List**
   - Register a new donor
3. Submit forms to:
   - Add donors
   - Create blood requests
4. Data updates automatically via the Spring Boot API

---

## 🔮 Future Enhancements

- User authentication and role-based access
- Advanced search and filtering
- Email or SMS notifications
- Admin dashboard with analytics
- Donor availability tracking

---

## 🖼️ Screenshots

![Donor List](<img width="767" height="459" alt="image" src="https://github.com/user-attachments/assets/37cc30e8-86fc-4798-b0cd-a3ac080fe8b6" />)
![Register Donor](<img width="473" height="428" alt="image" src="https://github.com/user-attachments/assets/338547dc-2a09-4f34-8d35-5a429bf4f0f5" />)

---

## 📄 License

This project is intended for **learning, academic, and portfolio use**.




