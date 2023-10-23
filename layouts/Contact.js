import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
          <iframe
          width="540"
          height="305"
          src="https://0aadf916.sibforms.com/serve/MUIFAHraIyOX-ZFLffyQavvPqIXCgSFDtIGcs8vb2TE2tuPb6jt809VmMVV1e2aJ2o7Hdgt7-T6bzAhkOjltaHo0iwFKjFNbFFhpSNOK5WVdW6nh8mH-iX6i7_7O7CpXMZ5gXRGYB4N_wIGYt0yTHWKGzdpC6w45fwlMJBMckNaAEBAbaWjqXlzT8OIHB_0O8A4-vAOJscmYUIEi"
          frameBorder={0}
          allowFullScreen
          style={{ display: 'block', height: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
          ></iframe>
      </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
