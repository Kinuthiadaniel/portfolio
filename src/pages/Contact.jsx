import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    setIsSending(true);
    setStatus(""); // Clear status message before sending

    try {
      const response = await fetch("https://formspree.io/f/meooyzya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(setStatus("Message sent successfully!"));
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4">
      <h1 className="text-center font-bold text-3xl text-white mb-8">Get In Touch</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 bg-white p-6 rounded-md shadow-lg"
        autoComplete="off"
      >
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="font-bold block mb-2 text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="font-bold block mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Text Area */}
        <div>
          <label htmlFor="message" className="font-bold block mb-2 text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        {/* Send Message Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 flex justify-center items-center"
          disabled={isSending}
        >
          {isSending ? (
            <span>Sending...</span>
          ) : (
            <>
              <FiSend className="mr-2" /> Send Message
            </>
          )}
        </button>
      </form>

      {/* Status Message */}
      {status && <p className="mt-4 text-center text-green-500">{status}</p>}
    </div>
  );
};

export default ContactForm;
