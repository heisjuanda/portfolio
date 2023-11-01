const sendEmail = async (name, email, message) => {
    if (!name || !email || !message) return;
    const emailData = {
      sender: {
        name: name,
        email: email,
      },
      to: [
        {
          email: "heisjuanda@gmail.com",
        },
      ],
      subject: "Portfolio message",
      textContent: message,
    };
    try {
      const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_SEND_IN_BLUE_API_KEY,
        },
        body: JSON.stringify(emailData),
      });
      if (response.ok) return true;
      return false;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  
  export default sendEmail;
  