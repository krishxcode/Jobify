# MERN Job Portal

A full-stack job portal application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern tools. The platform connects job seekers with employers through an intuitive and responsive interface.

## Features

### For Students/Job Seekers
- User authentication and authorization with JWT
- Advanced job search with filters (location, job type, experience level)
- Easy job applications with resume/CV upload
- Comprehensive profile management
- Real-time application status tracking
- Save favorite job listings
- Mobile-responsive interface

### For Employers
- Secure company account management
- Post new job listings with detailed descriptions
- Edit and update existing job posts
- Manage and track all job applications
- Filter and sort applications
- Update application status (pending, reviewed, accepted, rejected)
- Company profile customization

## Tech Stack

### Frontend
- **React.js** - Modern UI library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Icon library for enhanced UI elements
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication and authorization
- **Bcrypt** - Password hashing
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/mern-job-portal.git
   cd mern-job-portal
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Environment Configuration:
   Create `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Run the application:
   ```bash
   # Run backend (from backend directory)
   npm run dev

   # Run frontend (from frontend directory)
   npm run dev
   ```

## Project Structure

```
mern-job-portal/
├── backend/              # Node.js & Express backend
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/            # React frontend
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── store/       # Redux store
│   │   ├── config/      # Configuration
│   │   └── App.jsx      # Root component
├── README.md            # Project documentation
└── .gitignore          # Git ignore file
```

## Key Features in Detail

### User Authentication
- Secure registration and login
- JWT-based authentication
- Password encryption
- Role-based access control

### Job Management
- Create, read, update, and delete job listings
- Advanced search and filtering
- Pagination for job listings
- Job categories and tags

### Profile System
- User profiles with customizable fields
- Company profiles with branding options
- Resume/CV upload and management
- Application history tracking

### User Interface
- Responsive design for all devices
- Modern and clean UI with Tailwind CSS
- Smooth animations with Framer Motion
- Intuitive navigation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped with the project
- Special thanks to the MERN stack community for excellent documentation and resources
