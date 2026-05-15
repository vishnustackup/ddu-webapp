import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>

        <p className="text-gray-300 text-lg">Login to continue your journey</p>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-1/2 flex justify-center items-center bg-gray-100"
      >
        <motion.form
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 120,
          }}
          className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Signup;
