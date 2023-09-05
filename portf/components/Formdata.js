import React, { useState } from 'react';
import { send } from 'emailjs-com';

const FormData = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setErrors({});
    if (!toSend.reply_to || !/\S+@\S+\.\S+/.test(toSend.reply_to)) {
      setErrors((prev) => ({ ...prev, reply_to: 'Please enter a valid email address' }));
      return;
    }

    if (!toSend.message || toSend.message.length <= 10) {
      setErrors((prev) => ({ ...prev, message: 'Message should be longer than 10 characters' }));
      return;
    }

    send('service_v3id5r8', 'template_gy7z2dm', toSend, 'zBq2IPNkF4VkgxVPG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-0">
      <div className="row justify-content-center">
        <div className="col-md-5">
        <div className="card p-4" style={{ backgroundColor: '#333', borderRadius: '15px', boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}>
            <h2 className="mb-4" style={{ color: 'white' }}>Contact Me</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  placeholder="Your Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  style={{ backgroundColor: '#444', color: 'white' }}
                />
              </div>
              {errors.reply_to && <div className="text-danger">{errors.reply_to}</div>}
              <div className="form-group">
                <input
                  type="email"
                  name="reply_to"
                  className="form-control"
                  placeholder="Your Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  style={{ backgroundColor: '#444', color: 'white' }}
                />
              </div>
              {errors.message && <div className="text-danger">{errors.message}</div>}
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder="Your Message"
                  value={toSend.message}
                  onChange={handleChange}
                  style={{ backgroundColor: '#444', color: 'white' }}
                />
              </div>
              <button  type="submit" className="btn btn-primary">Submit</button>
              {success && <div className="text-success mt-3">Email sent successfully!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
