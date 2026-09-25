 🏡 Airbnb Clone

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
1) Listing Page
   <img width="1920" height="1080" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/7de82344-6731-4872-9175-a2e58ca7e8f9" />

2) Specific Listing information
    <img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/c8877ed4-ae8d-405d-8bd7-4aa040dcfb36" />

3) Rating And Review
    <img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/a9a764ec-9d7e-46ea-a714-a9722bb27779" />

4) Create New Listing Page
    <img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/8ebd49d6-d5fa-42b7-86cf-d104d4c8d537" />

5) Edit Listing Page
    <img width="1920" height="1080" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/e4c46c69-ecdd-429d-906c-7cfcb4e29530" />

6) Signup Page
    <img width="1920" height="1080" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/7247cdf0-ecee-4b0f-84cb-23f153d6a34a" />

7) Login Page
    <img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/dbf02093-147b-482b-90d0-4c7f680560b8" />
   
 
---

⭐ This project was developed as a practical full-stack web development project to gain hands-on experience with modern web technologies and real-world application development.

