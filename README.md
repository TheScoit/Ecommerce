#  MERN E-Commerce Project

An advanced and fully functional **E-Commerce Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to browse products, add to cart, place orders, and manage their profiles, while admins can manage inventory, orders, and users.

---

##  Tech Stack

**Frontend:**
- React.js
- Redux Toolkit (for state management)
- Axios
- React Router DOM
- Tailwind CSS / Bootstrap (your choice)

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- bcrypt for password hashing
- Cloudinary / Multer for image uploads

---

##  Features

###  User
- Register, Login, Logout (JWT Authentication)
- View and Edit Profile
- Browse Products by Category
- Search and Filter Products
- Add to Cart / Remove from Cart
- Checkout and Place Orders
- View Order History

###  Admin
- Dashboard Overview
- Manage Products (Add, Edit, Delete)
- Manage Users
- Manage Orders (Update Order Status)
- View Sales Analytics

###  Additional
- Responsive Design
- Secure Password Hashing
- Role-based Authentication
- Error Handling & Validation
- Payment Integration (Stripe / Razorpay)
- Product Image Upload

---

##  Installation & Setup

### 1 Clone the repository

```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce

---
## Backend
cd backend
npm install
npm run dev

---
## Frontend
cd ../frontend
npm install
npm run dev
