import './Contact.css'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            surname: '',
            email: '',
            message: '',
        });
    };

    return (
        <section className="contact-box">
            <div className="contact-box-text">
                <h2>Let's Begin Creating Together</h2>
                <p>Feel free to contact me and share your ideas, projects, and questions. Send me a message and let's begin creating together</p>
                <p>(not functional, only for the visual page!!!)</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="text"
                        name="name"
                        required=""
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label className={formData.name ? 'open' : ''}>Name</label>
                </div>

                <div className="user-box">
                    <input
                        type="text"
                        name="surname"
                        required=""
                        value={formData.surname}
                        onChange={handleInputChange}
                    />
                    <label className={formData.surname ? 'open' : ''}>Surname</label>
                </div>

                <div className="user-box">
                    <input
                        type="text"
                        name="email"
                        required=""
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label className={formData.email ? 'open' : ''}>Email</label>
                </div>

                <div className="user-box">
                    <textarea
                        name="message"
                        required=""
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    <label className={formData.message ? 'open' : ''}>Your message</label>
                </div>

                <button onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SUBMIT
                </button>
            </form>
        </section>
    );
};

export default Contact;