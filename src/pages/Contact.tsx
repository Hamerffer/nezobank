import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "How can I contact nezobank support?",
      answer:
        "You can reach our support team 24/7 via live chat on our website or by submitting a support ticket through the Help Center. We aim to respond within a few hours.",
    },
    {
      question: "Does nezobank offer phone support?",
      answer:
        "Currently, we do not offer phone support. For the fastest response, please use our live chat or support ticket system.",
    },
    {
      question: "How long does it take to get a response from support?",
      answer:
        "Most support tickets are responded to within 1–6 hours. Complex issues may take up to 24 hours to resolve.",
    },
    {
      question: "What information should I include when contacting support?",
      answer:
        "Please include your registered email address, a detailed description of the issue, and any relevant screenshots. This helps us resolve your issue faster.",
    },
    {
      question: "Can I contact nezobank on social media?",
      answer:
        "Yes, you can reach out to us on Twitter or Telegram for general inquiries. However, for account-specific issues, always use our official support channels for your security.",
    },
    {
      question: "Is nezobank support available on weekends and holidays?",
      answer:
        "Yes, our support team is available 24/7, including weekends and holidays.",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "Twitter",
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent paragraph-variable  ">
      <title>
        nezobank.com | Contact NezoBank Crypto Exchange Platform - Support,
        Services & Partnership Inquiries
      </title>

      {/* Hero Section */}
      <section
        className=" py-16 px-4 text-center  dark:bg-gradient-to-b from-[#162336] to-[#0d1a2d] "
        style={{
          backgroundImage: `url('/images/team-bg.png')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Get in Touch with Nezobank
          </h2>
          <p className="text-responsive paragraph-variable mb-10 max-w-2xl mx-auto">
            For faster service, include your registered email and a brief
            description of the issue when contacting us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:18001236396"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-blue-500/20 textwhite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:support@nezobank.com"
              className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-800 hover:to-green-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-purple-500/20 textwhite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 ">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-7xl">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 paragraph-variable shadow-2xl">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start dark:bg-[#162336] p-5 rounded-xl shadow-lg border border-gray-800">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-lg mr-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 textwhite"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-small font-semibold mb-2 paragraph-variable">
                    Head Office
                  </h4>
                  <p className="paragraph-variable text-small">
                    123 Financial District, Banking Avenue, NZ 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start dark:bg-[#162336]  p-5 rounded-xl shadow-lg border border-gray-800">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 textwhite"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-small font-semibold mb-2 paragraph-variable">
                    Phone Number
                  </h4>
                  <p className="paragraph-variable text-small">
                    +1 (800) 123-NEZO
                  </p>
                  <p className="paragraph-variable text-small">
                    +1 (800) 123-6396
                  </p>
                </div>
              </div>

              <div className="flex items-start dark:bg-[#162336]  p-5 rounded-xl shadow-lg border border-gray-800">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-lg mr-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 textwhite"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-small font-semibold mb-2 paragraph-variable">
                    Email Address
                  </h4>
                  <p className="paragraph-variable text-small">
                    support@nezobank.com
                  </p>
                  <p className="paragraph-variable text-small">
                    info@nezobank.com
                  </p>
                </div>
              </div>

              <div className="flex items-start dark:bg-[#162336]  p-5 rounded-xl shadow-lg border border-gray-800">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 textwhite"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-small font-semibold mb-2 paragraph-variable">
                    Working Hours
                  </h4>
                  <p className="paragraph-variable text-small">
                    Monday-Friday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="paragraph-variable text-small">
                    Saturday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4 paragraph-variable">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="dark:bg-[#162336]  p-3 rounded-lg border border-gray-800 hover:bg-blue-900 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-8 paragraph-variable ">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-blend-difference dark:bg-[#162336]  p-8 rounded-xl shadow-lg  "
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium paragraph-variable"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full dark:bg-[#1e3a5c] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 paragraph-variable placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium paragraph-variable"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full dark:bg-[#1e3a5c] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 paragraph-variable placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium paragraph-variable"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full dark:bg-[#1e3a5c] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 paragraph-variable placeholder-gray-400"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium paragraph-variable"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full darkbg-[#1e3a5c] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 paragraph-variable placeholder-gray-400"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full button-variable  py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 shadow-2xl ">
        <div className="container mx-auto max-w-7xl  ">
          <h3 className="text-3xl font-bold mb-12 text-center paragraph-variable">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className=" border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium paragraph-variable focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-responsive">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${activeFaq === index ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4  border-t p-4">
                    <p className="paragraph-variabl text-small">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-800"></div>
    </div>
  );
};

export default Contact;
