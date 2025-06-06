import { useState } from "react";
import { ViewOr } from "./ViewOr";
import { LoginOtherView } from "./LoginOtherView";
import { useNavigate } from "react-router-dom";
import { loginDoctor } from "./LoginController";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Hàm xử lý sự thay đổi của input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToForgetPassword = () => {
    navigate("/forget_password");
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const result = await loginDoctor(formData.email, formData.password);

      if (result.success) {
        // Lưu thông tin user vào localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        // Chuyển hướng đến trang home sau khi đăng nhập thành công
        navigate("/home");
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "1", justifyItems: "center", alignItems: "center" }}>
        <div style={{ justifyItems: "start" }}>
          <p style={{ fontSize: "32px", color: "black", fontWeight: "500" }}>
            Welcome back!
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "black",
              fontWeight: "500",
              marginTop: "10px",
            }}
          >
            Enter your Credentials to access your account
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginTop: "60px",
            }}
          >
            Email address
          </p>
          <input
            className="custom-input"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div
            style={{
              display: "flex",
              width: "409px",
              marginTop: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "14px", color: "black", fontWeight: "500" }}>
              Password
            </p>
            <p
              style={{
                fontSize: "10px",
                color: isHover ? "#FF5733" : "#0C2A92",
                fontWeight: "500",
                textDecoration: isHover ? "underline" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={navigateToForgetPassword}
            >
              forgot password
            </p>
          </div>
          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              className="custom-input"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "👁️‍🗨️" : "🙈"}
            </button>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <input type="checkbox" />
            <p
              style={{
                fontSize: "9px",
                color: "black",
                fontWeight: "500",
                marginLeft: "6px",
              }}
            >
              Remember for 30 days
            </p>
          </div>
          <p
            className="button-login"
            onClick={handleLogin}
            style={{
              marginTop: "20px",
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </p>
          <ViewOr />
          <div style={{ display: "flex", width: "404px" }}>
            <LoginOtherView
              icon="assets/ic_google.svg"
              title="Sign in with Google"
            />
            <div style={{ width: "23px" }} />
            <LoginOtherView
              icon="assets/ic_apple.svg"
              title="Sign in with Apple"
            />
          </div>
          <p
            style={{
              width: "404px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "500",
              color: "black",
              marginTop: "20px",
            }}
          >
            Don't have an account?{" "}
            <span
              style={{
                marginLeft: "5px",
                color: "#0F3DDE",
                fontWeight: "normal",
                cursor: "pointer",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#8a2be2";
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#0F3DDE";
                e.target.style.textDecoration = "none";
              }}
              onClick={navigateToRegister}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <img
        src="assets/image_background_cover.png"
        style={{ height: "100vh" }}
      />
    </div>
  );
};
