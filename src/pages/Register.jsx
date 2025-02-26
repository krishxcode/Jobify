import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../store/slices/authSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    company: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8f4f4] p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Create Your Account 🎉
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Sign In
            </a>
          </p>

          <div className="my-6 border-b text-center">
            <span className="bg-white px-3 text-gray-600">OR</span>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                placeholder="Create a password"
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Role</label>
              <select
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="student">Student</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            {formData.role === "employer" && (
              <div>
                <label className="block font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter company name"
                  className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition transform hover:scale-105 font-semibold flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
