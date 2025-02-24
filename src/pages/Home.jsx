import { motion } from 'framer-motion';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl py-0 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find Your <span className="text-primary-600">Dream Job</span> Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with top employers, discover exciting opportunities, and take the next step in your career journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="/jobs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-500 transition-all duration-300"
              >
                Find Jobs
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Features />
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}