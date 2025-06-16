import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
        
        try {
            const response = await axios.post('/api/contacts/submit', formData);
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: response.data.message }
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: error.response?.data?.message || 'Something went wrong. Please try again later.' }
            });
        }
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            {status.info.error && (
                <div className="error-message">
                    <p>{status.info.msg}</p>
                </div>
            )}
            {status.submitted ? (
                <div className="success-message">
                    <p>{status.info.msg}</p>
                    <button onClick={() => setStatus({
                        submitted: false,
                        submitting: false,
                        info: { error: false, msg: null }
                    })}>
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" disabled={status.submitting}>
                        {status.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;