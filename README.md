# 🧺 Wash 'n Go - Laundry Service Web Application 🚗

**Wash 'n Go** is an intuitive and easy-to-use web application designed to help users book laundry appointments for various services such as wash & fold, wash & iron, dry clean, and full-service laundry. The app allows users to conveniently choose the service, specify their laundry details, and book appointments online. The system also calculates the price based on the weight of laundry, ensuring a transparent and efficient process.

---

## 🛠️ Technologies and Tools Used

### Frontend:
- **React**: For building the user interface  
- **React Router**: For navigation between pages  
- **Axios**: For making HTTP requests  
- **React Icons**: For adding icons to the interface  

### Backend:
- **Node.js**: The runtime for running the backend server  
- **Express**: For setting up the API routes  
- **Sequelize**: ORM for managing PostgreSQL database  
- **PostgreSQL**: Database for storing user data and appointments  
- **JWT (JSON Web Token)**: For secure user authentication  

### Development Tools:
- **Postman**: For testing API endpoints and verifying JWT token-based authentication  
- **TablePlus**: For managing and visualizing the PostgreSQL database  

---

## 📦 Project Setup Instructions

### Clone the Repository
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/wash-n-go.git
```

---

### Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install the necessary dependencies:

```bash
npm install
```

---

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the necessary dependencies:

```bash
npm install
```

Make sure to configure your `.env` file with appropriate values for database connection and JWT secret. (Refer to `.env.example`)

---

### Database Setup

Make sure you have **PostgreSQL** installed and running.

Create a database named `washngo` and ensure your `.env` file has correct database credentials.

Run migrations to create the necessary tables:

```bash
npx sequelize-cli db:migrate
```

---

### Database Config Sample (`config/config.json`)

Here's a sample `development` config for Sequelize:

```json
"development": {
  "username": "postgres",
  "password": "maeann",
  "database": "fixup_db",
  "host": "127.0.0.1",
  "dialect": "postgres"
}
```

---

### Run the Application

Start the backend server:

```bash
npm start
```

For the frontend, in a separate terminal, run:

```bash
npm start
```

Then open your browser and go to:

[http://localhost:3000](http://localhost:3000)

---

## 🔧 How The Application Works

### Booking an Appointment

Users can easily book an appointment by clicking the **"Book a Wash"** button on the homepage.  
They will fill out a form with:
- Name
- Phone Number
- Selected Service
- Kilos of Laundry
- Address (for full-service)
- Additional Notes

The system calculates the price based on selected service and laundry weight.

---

### Service Pricing

- **Wash & Fold** – ₱110 per kilo  
- **Wash & Iron** – ₱120 per kilo  
- **Dry Clean** – ₱150 per kilo  
- **Full Service (Pickup & Delivery)** – ₱250 per kilo  

**Note:** If user selects **Full Service**, they must provide a **Pickup & Delivery Address**.

---

## 🔐 Authentication & Authorization

Users must **register and log in** to access the booking feature.  
JWT (JSON Web Token) is used for authentication.

Once logged in:
- The JWT is stored in **localStorage**
- All authenticated API requests must include this token in the header:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

- `POST /api/users/register` – Register a new user  
- `POST /api/users/login` – Log in a user and return a JWT token  
- `POST /api/appointments` – Create a new appointment  

---

## 📝 Additional Notes

- You can extend the app with features like **payment integration** or **appointment history**.
- Always ensure **PostgreSQL is running** with proper credentials before launching.
- App is fully **responsive** – works on desktop & mobile screens!

---

**Happy washing! 😄🧺**
