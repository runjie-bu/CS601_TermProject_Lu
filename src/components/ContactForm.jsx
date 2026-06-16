function ContactForm({ contactForm, formErrors, formStatus, updateContactForm, submitContactForm }) {
  return (
    <form className="contact-form" onSubmit={submitContactForm} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={contactForm.name}
          onChange={updateContactForm}
          aria-describedby={formErrors.name ? 'name-error' : undefined}
          aria-invalid={formErrors.name ? 'true' : 'false'}
        />
        {formErrors.name ? <p id="name-error" className="error-text">{formErrors.name}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={contactForm.email}
          onChange={updateContactForm}
          aria-describedby={formErrors.email ? 'email-error' : undefined}
          aria-invalid={formErrors.email ? 'true' : 'false'}
        />
        {formErrors.email ? <p id="email-error" className="error-text">{formErrors.email}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic" value={contactForm.topic} onChange={updateContactForm}>
          <option>General question</option>
          <option>Project feedback</option>
          <option>Course discussion</option>
          <option>Collaboration idea</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="7"
          value={contactForm.message}
          onChange={updateContactForm}
          aria-describedby={formErrors.message ? 'message-error' : undefined}
          aria-invalid={formErrors.message ? 'true' : 'false'}
        />
        {formErrors.message ? (
          <p id="message-error" className="error-text">{formErrors.message}</p>
        ) : null}
      </div>

      <button className="primary-button" type="submit">
        Submit Message
      </button>
      {formStatus ? (
        <p className="form-status" role="status" aria-live="polite">
          {formStatus}
        </p>
      ) : null}
    </form>
  );
}

export default ContactForm;
