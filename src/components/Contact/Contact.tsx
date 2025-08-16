// import { useRef } from "react";
// import ProfileMain from "../../components/ProfileMain";
// import My_Expert_Area from "../../components/My_Expert_Area";
// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";

import Link from "next/link";
import MainProfile from "../MainProfile/MainProfile";
import MyExpertArea from "../My_Expert_Area/MyExpertArea";

const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //         .sendForm('service_of47x7u', 'template_241ysbq', form.current, {
  //             publicKey: 'BhoG8GDuWENgPhyV8',
  //         })
  //         .then(
  //             () => {
  //                 console.log('SUCCESS!');
  //                 form.current.reset();
  //             },
  //             (error) => {
  //                 console.log('FAILED...', error.text);
  //             },
  //         );
  // };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5 mt-20">
        <div className="md:col-span-4 col-span-12">
          <MainProfile />
          <div className="mt-20">
            <MyExpertArea></MyExpertArea>
          </div>
        </div>
        <div className="md:col-span-8 col-span-12">
          <div className="portfolio-global-box">
            <h2 className="about-title">
              Let’s 👋 <span>Work</span> Together
            </h2>
            <p className="gb-text">
              I m here to help if you are searching for a Frontend Developer to
              bring your idea to life or a partner to help take your business to
              the next level.
            </p>
            <div className="small-contact-info">
              <Link
                className="portfolio-btn nav-resume"
                href="https://drive.google.com/file/d/1mA1L3Ur56FgZe_Z5w9MGDRL6I7DZ0sna/view?usp=drive_link"
              >
                Book A Call
              </Link>
              <p className="gmail-address">asadurjamannursabbir@gmail.com</p>
            </div>
            <div className="contact-form">
              {/* <form ref={form} onSubmit={sendEmail}> */}
              <form>
                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Type Your Name"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Type Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Subject</label>
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div>
                  <div className="form-box">
                    <label className="mb-2">Massage</label>
                    <textarea
                      name="message"
                      placeholder="Type details about your inquiry"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="portfolio-btn-submit"
                  />
                </div>
              </form>
            </div>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278772.28778778674!2d91.24733001473422!3d23.020730946066045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536821ff0c2e39%3A0xf094eed60ba43331!2sFeni%20District!5e1!3m2!1sen!2sbd!4v1723440331801!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
