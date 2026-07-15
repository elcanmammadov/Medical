import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
  };

  return (
    <div className="bg-ag my-5 text-center" id="contact">
      <div className="container py-5 w-50">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary border-0 text-capitalize rounded-0 px-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
