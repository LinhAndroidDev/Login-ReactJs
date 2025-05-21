export const loginDoctor = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/login-doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return {
      success: true,
      data: data.doctor,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "An error occurred during login",
    };
  }
};
