
# 📝 To-Do List Application

A full-stack To-Do List application built using **React (Vite)**, **Spring Boot**, and **MySQL**. Users can create, update, delete, and manage their daily tasks through a simple and responsive user interface.

## 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed
- 📱 Responsive UI
- 🔄 Real-time communication between frontend and backend
- 💾 MySQL database integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven

### Database
- MySQL

## 📂 Project Structure

```
TO-DO LIST/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── todoapp/
    ├── src/
    ├── pom.xml
    └── target/
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
```

### Backend Setup

```bash
cd todoapp
```

Configure your MySQL database in:

```
src/main/resources/application.properties
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```
## 🔮 Future Improvements

- User Authentication
- Task Categories
- Due Dates
- Search & Filter
- Dark Mode
- Notifications
