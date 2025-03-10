# 🚀 MERN Role-Based Management Panel

**Yo, what's up?** 👋 This is the spot for the code that powers our super slick Role-Based Management Admin Panel. We're talking total control, clean UI, and all the features you need to manage your team like a boss.

## ⚡️ Quick Start

**Ready to dive in? Here's the lowdown:**

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/agentgrey/management-admin-panel
    cd management-admin-panel
    ```

2.  **Backend Setup (Node.js/Express.js):**
    ```bash
    cd backend
    npm install
    # Create your .env file
    # Edit .env with your MongoDB URI and JWT secret
    npm run start # Or node server.js
    ```

3.  **Frontend Setup (React.js):**
    ```bash
    cd ../frontend
    npm install
    # Create your .env file
    # Edit .env.local with your API URL
    npm run dev
    ```

4.  **Open in Browser:**
    * Head over to `http://localhost:3000` and get your admin on!

## ✨ Features That Slap

* **Team Management:**
    * Admins can add new team members in a few clicks.
    * Assign roles (Manager, Employee) like it's nobody's business.
* **Role-Based Access:**
    * Admins: Total control. Add, edit, delete. You name it.
    * Managers: Oversee your squad's orders.
    * Employees: Place orders and chill.
* **Authentication:**
    * Secure login/signup (we got you covered).
    * JWT tokens for that extra layer of security.
* **Product Management:**
    * Add, edit, and delete products easily.
* **Order Management:**
    * Place, view, and cancel orders.
* **Sleek UI:**
    * Material UI for a clean, modern look.
    * Toast notifications for that satisfying feedback.

## 🛠️ Tech Stack

* **Frontend:** React.js, Material UI, Axios, React Router, React Toastify
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcryptjs, Cors
