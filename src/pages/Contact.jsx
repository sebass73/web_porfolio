import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact me</h1>
      <button className="btn btn-primary">Social Media</button>
      <button className="btn btn-primary">Social Media</button>
      <button className="btn btn-primary">Social Media</button>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
