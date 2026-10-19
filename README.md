# FOOD DELIVERY

A full-stack food ordering application with separate user and admin panels.

## Overview

This project includes:

- `frontend/` — user-facing React storefront built with Vite
- `admin/` — admin panel for managing food items
- `backend/` — Express API server with MongoDB data storage

The application supports product browsing, cart management, orders, authentication, and admin item management.

## Demo

- User panel: https://food-delivery-frontend-s2l9.onrender.com/
- Admin panel: https://food-delivery-admin-wrme.onrender.com/

## Features

- Browse food items by category
- Add products to cart and place orders
- JWT-based authentication
- Admin-only food item creation and removal
- Image upload for food items
- Cart and order management APIs
- Stripe-ready checkout integration

## Tech Stack

- React + Vite
- React Router
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Bcrypt password hashing
- Multer for file uploads
- Axios for HTTP requests

## Folder Structure

- `admin/` — admin dashboard source code
- `frontend/` — user storefront source code
- `backend/` — API server and data model code
- `.gitignore` — ignored files and folders
- `README.md` — project documentation

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sneha12jyoti/FOOD-DELIVERY.git
cd FOOD-DELIVERY
```

### 2. Install dependencies

```bash
cd frontend
npm install
cd ../admin
npm install
cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend/` folder:

```env
JWT_SECRET=your_jwt_secret
SALT=your_salt_value
MONGO_URL=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Update API URLs

Set the backend API URL in:

- `frontend/src/context/StoreContext.jsx`
- `admin/src/App.jsx`

If needed, set the frontend URL in `backend/controllers/orderController.js`.

### 5. Run the backend

```bash
cd backend
npm run server
```

### 6. Run the frontend and admin apps

```bash
cd ../frontend
npm run dev
```

```bash
cd ../admin
npm run dev
```

## Notes

- Do not commit uploaded files from `backend/uploads/`.
- Use a persistent file storage solution for production uploads.
- If the backend uses a hosted MongoDB database, keep credentials secure.

## Contributing

Contributions and improvements are welcome! Open an issue or submit a pull request.

## License

This project is available under the terms of the license you choose.
