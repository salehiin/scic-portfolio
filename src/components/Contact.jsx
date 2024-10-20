import { useState } from "react";
import emailjs from 'emailjs-com';
// import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace with your EmailJS service ID, template ID, and user ID
        const serviceID = 'service_8exnqcr';
        const templateID = 'template_youabb7';
        const userID = '7Cv9FEoA_40T9vznE';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message, please try again.');
            });
    };

    return (

        <div className=" grid grid-cols-2 items-center my-8 lg:my-11" id="contact">


            <div className="col-span-2 md:col-span-1 p-2 lg:p-12">
                <h2 className="text-4xl md:text-5xl text-[#52b788] font-bold">Contact Me</h2>
                <p className="py-6 lg:pr-24">I’d love to hear from you! Whether you have a project in mind, need assistance with something, or just want to connect, feel free to reach out. I'm always open to new opportunities, collaborations, or simply exchanging ideas. You can contact me through the form below or via the provided email address. Let’s start a conversation and explore how my skills and experience can contribute to your team's success!</p>
                <div className="flex gap-4">
                    <a target="_blank" className='text-[#52b788] text-lg rounded-sm bg-gray-800' href="https://facebook.com/salehiin"><FaSquareFacebook /></a>
                    <a target="_blank" className='text-[#52b788] text-lg rounded-sm bg-gray-800' href="https://www.linkedin.com/in/shoebsalehinkhan/"><FaLinkedin /></a>
                    <a target="_blank" className='text-[#52b788] text-lg rounded-sm bg-gray-800' href="https://github.com/salehiin"><FaSquareGithub /></a>
                </div>
            </div>
            <form onSubmit={sendEmail} className="col-span-2 md:col-span-1 p-2 md:p-6 lg:p-12 bg-gray-700 rounded-md " id="contact" >
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-center">
                        <label className="w-1/4 lg:w-1/3" htmlFor="name">Name:</label>
                        <input
                            className="bg-gray-400 w-3/4 lg:w-2/3 h-9 text-gray-800 rounded-md"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="w-1/4 lg:w-1/3" htmlFor="email">Email:</label>
                        <input
                            className="bg-gray-400 w-3/4 lg:w-2/3 h-9 text-gray-800 rounded-md"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="w-1/4 lg:w-1/3" htmlFor="message">Message:</label>
                        <textarea
                            className="bg-gray-400 w-3/4 lg:w-2/3 h-32 text-gray-800 rounded-md"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <button className="btn btn-block mt-5 lg:mt-10" type="submit">Send Message</button>
            </form>

        </div>

    );
};





export default Contact;