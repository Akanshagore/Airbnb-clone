[10:01 am, 17/08/2026] goreakansha3: 🏡 Airbnb Clone

A full-stack Airbnb-inspired web application where users can explore property listings, view detailed information, create listings, and add reviews.

This project focuses on implementing real-world web development concepts such as authentication, authorization, CRUD operations, database management, protected routes, and cloud-based image storage.

✨ Features

- 🏠 Browse Listings — View all available property listings without logging in.
- 🔐 Authentication — User Sign Up, Login, and Logout functionality.
- 🛡️ Authorization — Protected features are accessible only to authenticated users.
- ➕ Create Listings — Logged-in users can add new property listings.
- ⭐ Reviews — Logged-in users can add reviews to listings.
- 🖼️ Image Upload — Property images are uploaded and managed using Cloudinary.
- 🔒 Protected Routes — Listing and review operations require proper authentication and authorization.
- 📱 Responsive UI — Designed to provide a smooth experience across different screen sizes.

🛠️ Tech Stack

Frontend

- HTML
- CSS
- JavaScript
- EJS

Backend

- Node.js
- Express.js

Database

- MongoDB
- Mongoose

Authentication & Image Storage

- Authentication & Authorization
- Express Session
- Cloudinary

Tools

- Git
- GitHub
- VS Code

🔐 Authentication & Authorization

Users can browse all listings without signing in. However, features such as creating listings and adding reviews require the user to Sign Up/Login first.

Authorization is used to protect restricted routes and ensure that only authenticated users can perform protected operations.

User Flow

Browse Listings
      ↓
Sign Up / Login
      ↓
Authenticated User
      ↓
Create Listing / Add Review
      ↓
Logout

🖼️ Cloudinary Integration

Cloudinary is used to upload and store property images.

When a user uploads an image, it is sent to Cloudinary and the resulting image URL is used with the listing.

🏗️ Project Structure

Airbnb-Clone/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── middleware.js
├── cloudConfig.js
├── package.json
└── .gitignore

The project follows the MVC architecture, which helps separate application logic, database models, and user interface components.

⚙️ Installation

1. Clone the repository

git clone https://github.com/Akanshagore/Airbnb-clone.git

2. Navigate to the project

cd Airbnb-clone

3. Install dependencies

npm install

4. Configure environment variables

Create a ".env" file and add your MongoDB, Cloudinary, and session-related credentials.

«Note: Never upload ".env" or expose API keys, passwords, or secret credentials on GitHub.»

5. Start the application

npm start

📚 What I Learned

Through this project, I gained practical experience in:

- Full-stack web development
- Node.js and Express.js
- MongoDB and Mongoose
- MVC architecture
- Authentication and Authorization
- CRUD operations
- Protected routes and middleware
- Session management
- Cloudinary image uploading
- Git and GitHub

🚀 Future Improvements

- Advanced search and filtering
- Wishlist functionality
- Booking functionality
- Payment integration
- Improved UI/UX
- Deployment and live hosting

👩‍💻 Author

Akansha Gore
Computer Engineering Student | Aspiring Software Engineer

## 📸 Project Screenshots
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/f95ec6f5-4a00-4810-909b-0746043a7b6f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d44638ba-59b0-4210-8a49-a9f9c1742113" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9ea3e10a-e000-4ae4-8f3b-820e9363f84d" />



---

⭐ This project was developed as a practical full-stack web development project to gain hands-on experience with modern web technologies and real-world application development.

