function Contact() {
    return (
        <main className="contact-page">

            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you.</p>
            </div>

            <div className="contact-content">

                <div className="contact-info">
                    

                    <h2>Email</h2>
                    <p>hello@oakandember.com</p>

                    <h2>Follow Us</h2>
                    <p>@oakandember</p>
                </div>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your name"
                    />

                    <input
                        type="email"
                        placeholder="Your email"
                    />

                    <textarea
                        placeholder="Your message"
                        rows="6"
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </main>
    );
}

export default Contact;