// In your contactform.js file

const ContactForm = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can add your form submission logic here, such as sending data to a backend server
      alert('Form submitted!');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  ReactDOM.render(<ContactForm />, document.getElementById('root'));
  