export const registerDoctor = async (name, email, password) => {
  try {
    const response = await fetch("http://localhost:3000/add-doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Register failed");
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
