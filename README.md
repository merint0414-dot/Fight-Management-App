# ✈️ Flight Management System

A React-based Flight Management System developed using **Vite**, **React Router**, **Bootstrap**, and **Axios**. The application allows users to add new flights and view available flights by integrating with REST APIs.

---

## 🚀 Features

- Add new flight details
- View all available flights
- Responsive Bootstrap UI
- React Router navigation
- Axios API integration
- Success and error message handling
- Form validation
- Loading indicators while fetching data
- Git feature branch workflow

---

## 🛠️ Technologies Used

- React 19
- Vite
- JavaScript (ES6)
- Bootstrap 5
- Axios
- React Router DOM
- Git & GitHub

---

## 📁 Project Structure

```
flight-app
│
├── public
│
├── src
│   ├── components
│   │   └── Navbar.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── AddFlight.jsx
│   │   └── ViewFlights.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd flight-app
```

Install dependencies

```bash
npm install
```

Install required packages

```bash
npm install axios react-router-dom bootstrap
```

Start the development server

```bash
npm run dev
```

---

## 📌 API Endpoints

### Add Flight

**POST**

```
https://host-demo-app.onrender.com/api/add-flight
```

### View Flights

**GET**

```
https://host-demo-app.onrender.com/api/flights
```

---

## ✈️ Flight Details

The Add Flight module includes the following fields:

- Flight Number
- Airline
- Origin
- Destination
- Departure Date
- Departure Time
- Arrival Time
- Fare
- Total Seats
- Available Seats
- Status

Status values:

- Scheduled
- On Time
- Delayed
- Cancelled

---

## 🧭 Application Pages

### Home

Landing page of the application.

### Add Flight

Allows users to add a new flight by submitting flight details to the backend API.

### View Flights

Displays all available flights fetched from the backend API in a responsive Bootstrap table.

---

## 🌿 Git Workflow

Project follows Git Feature Branch Workflow.

```
main
│
development
├── feature/add-flight
└── feature/view-flights
```

---

## 📝 Git Commit History

### Initial Setup

```
Project setup with navbar and routing
```

### Feature: Add Flight

```
Create Add Flight component

Add flight registration form

Integrate Add Flight API using Axios

Complete add flight submission workflow
```

### Feature: View Flights

```
Create View Flights component

Fetch flight data using Axios

Display flight list in Bootstrap table

Improve flight list with loading and error handling
```

---

## 📷 Screens

- Home
- Add Flight
- View Flights

---

## 👨‍💻 Developed By

**Joshua J**

Master of Computer Applications (MCA)

FISAT (Federal Institute of Science and Technology)

---

## 📄 License

This project is developed for academic learning purposes.