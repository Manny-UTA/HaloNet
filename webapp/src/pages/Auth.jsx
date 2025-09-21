import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (username === "User" && password === "User") {
        setIsAuthenticated(true); // ✅ Mark logged in

        navigate("/walkthrough");   // ✅ go to dashboard after login

      } else {
        alert("❌ Invalid credentials. Use username: User, password: User");
      }
    } else {
      alert(
        `✅ Account created for ${name || "User"} (demo only). You can now log in!`
      );
      setIsLogin(true);
      setUsername("");
      setPassword("");
      setName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4FA] p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-[#5A3972] rounded-full flex items-center justify-center relative">
            <div className="absolute -top-3 w-10 h-2 border-4 border-[#5A3972] rounded-full bg-white"></div>
          </div>
          <h1 className="text-2xl font-bold text-[#5A3972] mt-3">HaloNet</h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#5A3972] mb-6 text-center">
          {isLogin ? "Welcome back!" : "Create Account"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F4FA] border border-[#E5DAF5] text-gray-700 focus:ring-2 focus:ring-[#7A57D1] outline-none"
            />
          )}

          <input
            type="text"
            placeholder="Email or phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F8F4FA] border border-[#E5DAF5] text-gray-700 focus:ring-2 focus:ring-[#7A57D1] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#F8F4FA] border border-[#E5DAF5] text-gray-700 focus:ring-2 focus:ring-[#7A57D1] outline-none"
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold text-white transition shadow-md ${
              isLogin
                ? "bg-[#E96A7D] hover:bg-[#d95f72]"
                : "bg-[#4BBF9E] hover:bg-[#3aa487]"
            }`}
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Extra options */}
        {isLogin ? (
          <>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="mt-4 text-sm text-gray-600 text-center">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#5A3972] font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <div className="mt-4 space-y-4">
            <button className="w-full border border-[#E96A7D] text-[#E96A7D] font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#fdebed] transition">
              <span className="text-xl">📇</span> Upload ID
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#5A3972] font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
