import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import PersonalLinks from '../components/PersonalLinks';

function ContactPage({ contactForm, formErrors, formStatus, updateContactForm, submitContactForm }) {
  return (
    <div className="page-layout narrow-layout">
      <PageHeader eyebrow="Contact" title="Contact & Links">
        Here is my contact information; you can reach out to me via email or check my GitHub profile to learn more about me.
      </PageHeader>

      <section className="contact-grid">
        <ContactForm
          contactForm={contactForm}
          formErrors={formErrors}
          formStatus={formStatus}
          updateContactForm={updateContactForm}
          submitContactForm={submitContactForm}
        />
        <PersonalLinks />
      </section>
    </div>
  );
}

export default ContactPage;
