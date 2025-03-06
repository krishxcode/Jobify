import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../store/slices/authSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "", role: "student" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess && user) {
      localStorage.setItem("authToken", user.token); // Save token
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8f4f4] p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-center text-gray-900">Welcome Back 👋</h2>
          <p className="mt-2 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>

          <button className="w-full flex items-center justify-center bg-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105 mt-6"
            onClick={() => toast.error("Google login not implemented yet")}>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
            Sign In with Google
          </button>

          <div className="my-6 border-b text-center">
            <span className="bg-white px-3 text-gray-600">OR</span>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {["email", "password"].map((field, idx) => (
              <div key={field}>
                <label htmlFor={field} className="block font-medium text-gray-700 capitalize">{field}</label>
                <div className="relative">
                  {idx === 0 ? <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> : <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
                  <input
                    id={field}
                    name={field}
                    type={field}
                    required
                    placeholder={`Enter your ${field}`}
                    className="w-full pl-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="block font-medium text-gray-700">Role</label>
              <select name="role" className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={formData.role} onChange={handleChange}>
                <option value="student">Student</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">Forgot Password?</Link>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition transform hover:scale-105 font-semibold flex items-center justify-center"
              disabled={isLoading}>
              {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and{" "}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
