# Bookstore API 📚

> **Status:** 🚧 Work in Progress (WIP)

A robust REST API built with **Node.js**, **Express**, and **MongoDB** designed to manage a library system with a strong focus on security, clean architecture, and centralized error handling.

## 🚀 Key Features
* **MVC Architecture:** Clear separation of concerns for better maintainability.
* **Centralized Error Handling:** Custom error classes and global middlewares to ensure secure and consistent API responses.
* **Data Integrity:** Schema-based modeling with Mongoose.
* **Security-First:** Use of environment variables for sensitive credentials and safe error reporting.
* **Standardization:** Code linting with ESLint to maintain high-quality standards.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose)
* **Testing:** Postman
* **Linter:** ESLint

## 📂 Project Structure
Based on professional standards, the project is organized as follows:
* `src/config/`: Database connection setup.
* `src/controllers/`: Business logic and request handling.
* `src/models/`: Data schemas and persistence logic.
* `src/routes/`: API endpoint definitions.
* `src/middlewares/`: Error controllers and global processing.
* `src/error/`: Custom error classes (`BaseError`, `ValidationError`, `NotFound`, etc.).

## 🔒 Security Implementation
One of the core focuses of this project is **Application Security (AppSec)**:
* **Error Masking:** The API is designed to prevent leaking system details (stack traces) to the end user.
* **Validation:** Implementation of robust input validation to prevent common injection attacks.
* **Environment Management:** Sensitive data is kept out of the source code using `.env` files.

## 🚧 Current Development Status
I am currently working on:
- [x] Initial MVC structure and database connection.
- [x] Custom error handling system.
- [ ] Authentication and Authorization (JWT).
- [ ] Advanced query filters (pagination, sorting).
- [ ] Comprehensive documentation with Postman Collections.

## ⚙️ How to Run (Development)
1. **Clone the repository:** 

    ```bash
    git clone git@github.com:VitorTFraga/Bookstore-API.git
    ```
2.  **Navigate to the Folder:**
    ```bash
    cd Bookstore-API
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up your environment variables:**
    `Create a .env file in the root directory and add your connection string:
    MONGODB_CONNECTION_STRING=your_mongodb_uri_here`

5.  **Run the server:**
    ```bash
    npm run dev
    ```

## 📧 Contact

If you have any questions, suggestions, or feedback about the project, you can find me here:

* **GitHub:** [VitorTFraga](https://github.com/VitorTFraga) 
* **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/vitor-táboas-fraga-002651212/)
