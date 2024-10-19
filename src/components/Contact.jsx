import { useState } from "react";


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
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

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

        <div className=" grid grid-cols-2 items-center" id="contact">


            <div className="col-span-2 md:col-span-1 p-12">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident odio praesentium id distinctio consequuntur sunt!</p>
            </div>
            <form onSubmit={sendEmail} className="col-span-2 md:col-span-1 p-12 bg-gray-500 " id="contact" >
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-center">
                        <label className="w-1/3" htmlFor="name">Name:</label>
                        <input
                            className="bg-white w-2/3 h-9"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="w-1/3" htmlFor="email">Email:</label>
                        <input
                            className="bg-white w-2/3 h-9"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="w-1/3" htmlFor="message">Message:</label>
                        <textarea
                            className="bg-white w-2/3 h-32"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <button className="btn btn-block mt-10" type="submit">Send Message</button>
            </form>

        </div>

    );
};





export default Contact;