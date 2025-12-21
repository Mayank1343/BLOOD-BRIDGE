# 🩸 Blood Donor Management Web App

A simple full‑stack web application to register blood donors and search them by blood group and city.  
Built as a practice project to learn **React**, **Spring Boot**, **REST APIs**, **MySQL**, and **Docker**.

---

## ✨ Features

- Register new blood donors with name, blood group, city, and phone number.  
- Client‑side form validation for required fields and 10‑digit phone numbers.  
- Paginated donor list with:
  - Search by blood group.  
  - Search by city.  
  - Sorting by name or city.  
- Delete donors from the list (and database) from the UI.  
- Clean, minimal UI with basic custom CSS styling.  

---

## 🛠 Tech Stack

**Frontend**

- React (functional components, hooks)  
- Axios for HTTP calls  
- React Router for navigation  

**Backend**

- Java 17  
- Spring Boot (Web, Data JPA, Validation)  
- MySQL database  

**DevOps / Deployment**

- Docker & Docker Compose for backend + database containerization  
- Environment‑based configuration for DB and API URLs  
- (Optional) Render for backend hosting and Netlify for frontend hosting  

---

## 📁 Project Structure

<img width="533" height="385" alt="image" src="https://github.com/user-attachments/assets/8ca68868-f046-40f0-b4f7-1d8d5d92781b" />

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Prerequisites

- Java 17+  
- Maven  
- Node.js + npm  
- MySQL (if running without Docker)  
- Docker & Docker Compose (if running with containers)

---

### 2️⃣ Backend – run without Docker (simple mode)

1. Create a database in MySQL:

CREATE DATABASE blooddonors;


2. In `backend/src/main/resources/application.properties`:

spring.datasource.url=jdbc:mysql://localhost:3306/blooddonors?useSSL=false&serverTimezone=UTC
spring.datasource.username=your_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080


3. From the `backend` folder:

mvn spring-boot:run


4. API base URL:

http://localhost:8080


You can test with `http://localhost:8080/donors`.

---

### 3️⃣ Backend – run with Docker & Docker Compose

1. Ensure `Dockerfile` and `docker-compose.yml` are in the `backend` folder.  
2. From `backend`:

docker compose build
docker compose up


3. The Spring Boot app runs at:

http://localhost:8080
and connects to the MySQL container automatically.  


4. To stop:

docker compose down


---

### 4️⃣ Frontend – React

1. From the `frontend` folder:

npm install
npm start


2. The React app runs at:

http://localhost:3000


3. Make sure `src/config.js` points to the backend:

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
export default API_BASE_URL;


---

## 🌐 API Endpoints

All endpoints are prefixed with `/donors`.

- `GET /donors`  
  - Query parameters:
    - `bloodGroup` (optional)  
    - `city` (optional)  
    - `page` (default `0`)  
    - `size` (default `10`)  
    - `sort` (default `name`)  

- `POST /donors`  
  - Request body (JSON):

    ```
    {
      "name": "Alice Smith",
      "bloodGroup": "B+",
      "city": "Chicago",
      "phone": "9876543210"
    }
    ```

- `DELETE /donors/{id}`  

---

## ☁️ Deployment Overview

This is a simple deployment flow for this project:

### Backend (Docker image)

- Build a Docker image from `backend/Dockerfile`.  
- Deploy the container to a hosting platform (for example Render or any Docker‑compatible service).  
- Configure environment variables for DB connection:
  - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `PORT`, etc.  

### Frontend (Static hosting)

1. From `frontend`:

REACT_APP_API_BASE_URL = https://your-backend-domain.com


4. Redeploy the frontend so it calls the deployed backend.

---

## 🖼 Screenshots

_screenshots to be added after running or deploying the app._

For example:

- Registration page (validations visible).  
- Donor list with filters, pagination, and delete buttons.  

---

## 🔧 Possible Improvements

- User authentication and admin‑only access for donor management.  
- More donor attributes (age, last donation date, availability).  
- Better UI using a component library (Material UI, Bootstrap, etc.).  
- Export donors to CSV or PDF.  
- CI/CD pipeline to automatically build and deploy on every push.

---

## 🎓 Learning Outcomes

Through this project:

- Built a complete full‑stack web application using React, Spring Boot, and MySQL.  
- Practiced designing REST APIs with pagination, filtering, and sorting.  
- Implemented form validation and basic UI/UX improvements.  
- Gained hands‑on experience with Docker, Docker Compose, and environment‑based configuration.  

Feel free to open issues or suggestions if you see ways to improve this project. 🙂
