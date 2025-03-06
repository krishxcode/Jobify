import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

// Components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import EmployerDashboard from "./pages/EmployerDashboard";
import JobApplications from "./pages/JobApplications";

// 🔐 Protected Route (Requires Auth)
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth) || {};
  return user ? children : <Navigate to="/login" replace />;
};

// 🏢 Employer-Only Route
const EmployerRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth) || {};
  return user?.role === "employer" ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar should be outside main for better structure */}
        <Navbar />

        <main>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/jobs/:id" element={<JobDetails />} /> {/* ✅ Fixed Route */}

              {/* Authenticated User Routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Employer-Only Routes */}
              <Route
                path="/employer-dashboard"
                element={
                  <EmployerRoute>
                    <EmployerDashboard />
                  </EmployerRoute>
                }
              />
              <Route
                path="/post-job"
                element={
                  <EmployerRoute>
                    <PostJob />
                  </EmployerRoute>
                }
              />
              <Route
                path="/job-applications"
                element={
                  <EmployerRoute>
                    <JobApplications />
                  </EmployerRoute>
                }
              />

              {/* Catch-all for unknown routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Notification Toaster */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
