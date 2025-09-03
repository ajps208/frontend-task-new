# Frontend Authentication Flow 🚀

A frontend project built with **React + Vite** implementing a complete **Login & Signup flow** using **JWT authentication**. The project follows the provided Figma design, integrates with backend APIs, and is deployed on **Vercel**.

---

## 🔗 Links

- **Deployed App**: [Live Demo](https://frontend-task-new-topaz.vercel.app)  
- **GitHub Repository**: [Source Code](https://github.com/ajps208/frontend-task-new)

---

## 📌 Features

- **Responsive UI** based on provided Figma design.
- **Signup Page**
  - Fields: Name, Email, Password, Confirm Password
  - Validations: required fields, valid email, strong password, confirm password match
  - On success → Redirects to Login
- **Login Page**
  - Fields: Email, Password
  - Validations: required fields, email format
  - On success → Fetches JWT token & stores securely
  - Redirects user to Dashboard
- **Authentication Handling**
  - JWT stored in `localStorage`
  - Protected routes → Redirects to Login if not authenticated
  - Logout clears token & redirects to Login
- **Dashboard**
  - Displays a welcome message with the logged-in user’s name

---

## 🛠️ Tech Stack

- **React** – UI library  
- **Vite** – Build tool  
- **Tailwind CSS** – Styling  
- **CSS** – Custom styles  
- **Axios** – API requests  
- **React Router** – Routing & Protected Routes  
- **Vercel** – Deployment  

