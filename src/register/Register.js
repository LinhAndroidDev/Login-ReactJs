import { useState } from "react";
import { LoginOtherView } from "../login/LoginOtherView";
import { ViewOr } from "../login/ViewOr";
import { useNavigate } from "react-router-dom";
import { registerDoctor } from "./RegisterController";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Hàm xử lý sự thay đổi của input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (
      formData.name.length < 1 ||
      formData.email.length < 1 ||
      formData.password.length < 1
    ) {
      alert("Bạn cần nhập đầy đủ thông tin");
      return;
    }

    try {
      setIsLoading(true);

      let result = await registerDoctor(
        formData.name,
        formData.email,
        formData.password
      );
      if (result.success) {
        navigate("/");
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert(err.message || "Register failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "1", justifyItems: "center", alignItems: "center" }}>
        <div style={{ justifyItems: "start" }}>
          <p style={{ fontSize: "32px", color: "black", fontWeight: "500" }}>
            Get Started Now
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginTop: "60px",
            }}
          >
            Name
          </p>
          <input
            className="custom-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <p
            style={{
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginTop: "20px",
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
          <p
            style={{
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            Password
          </p>
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
              I Agree to the temps & policy
            </p>
          </div>
          <p
            className="button-login"
            onClick={handleRegister}
            style={{ marginTop: "20px" }}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
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
            Have an account?{" "}
            <span
              style={{
                marginLeft: "5px", // ➕ thêm khoảng cách với đoạn trước
                color: "#0F3DDE",
                fontWeight: "normal",
                cursor: "pointer",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#8a2be2";
                e.target.style.textDecoration = "underline";
              }} // tím đậm hơn khi hover
              onMouseLeave={(e) => {
                e.target.style.color = "#0F3DDE";
                e.target.style.textDecoration = "none";
              }}
              onClick={handleBack}
            >
              Sign In
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
