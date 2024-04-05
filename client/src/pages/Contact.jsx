import { useState } from "react";

 const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };

//  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
     <section className="section-contact" >
      {/* Contact page main */}
      <div className="container grid grid-two-cols">
        {/* Contact image */}
        <div className="contact-img">
          <img src="/images/support.png" alt="we are always ready to help" />
        </div>

        {/* Contact form content actual */}
        <section className="section-form">
          <div className="contact-content container">
            <h1 className="main-heading">Contact Us</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                placeholder="message"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div>
            <button type="submit" style={{ color: 'white' }}>Submit</button>

            </div>
          </form>
        </section>
      </div>
    </section>
    </>
  );
};
export default Contact;