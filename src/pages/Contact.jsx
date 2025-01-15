import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';

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
        setIsSending(true);

        // API Endpoint
        const url = "https://api.emailjs.com/api/v1.0/email/send";

        // EmailJS API request body
        const emailData = {
            service_id: "service_3lyro9g", // Replace with your EmailJS service ID
            template_id: "template_p7ez0rg", // Replace with your EmailJS template ID
            user_id: "dnAiRTLiJaiRaL4Ugpjsx", // Replace with your EmailJS user ID
            template_params: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 px-4">
            <h1 className="text-center font-bold text-3xl text-white mb-8">Get In Touch</h1>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg space-y-6 bg-white p-6 rounded-md shadow-lg"
                autoComplete="off"
            >
                {/* Name Input */}
                <div>
                    <label className="font-bold block w-full text-left mb-2 text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="font-bold block w-full text-left mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Message Text Area */}
                <div>
                    <label className="font-bold block w-full text-left mb-2 text-gray-700">Message</label>
                    <textarea
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
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </div>

                {/* Status Message */}
                {status && <p className="text-center text-green-400 mt-4">{status}</p>}
            </form>
            <div className="text-white mt-7 mx-auto">
                <h3>Or connect on: </h3>
                <div className="flex justify-center mt-2 mx-auto">
                    <div>
                        <a href="https://www.linkedin.com/in/daniel-kinuthia-274ba629b/" className="mr-2" rel='noreferrer' target="_blank">   <Avatar
                            src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                            alt="LinkedIn Profile"
                            sx={{ width: 40, height: 40 }} /> LinkedIn</a>
                    </div>
                    <div>
                        <a href="https://github.com/Kinuthiadaniel" className="mr-2" rel='noreferrer' target="_blank">   <Avatar
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="Github Profile"
                            sx={{ width: 40, height: 40 }}

                        /> Github</a>
                    </div>
                    <div>
                        <a
                            href="mailto:dankinuthia17@gmail.com"
                            className="mr-2"
                            rel="noreferrer"
                        >
                            <Avatar
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Email_icon.png"
                                alt="Email"
                                sx={{ width: 40, height: 40 }}
                            />
                            Email
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;
