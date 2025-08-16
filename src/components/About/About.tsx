import MainProfile from "../MainProfile/MainProfile";

const About = () => {
  return (
    <div className="container mx-auto custom-mt">
      <div className="about-wrapper">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <MainProfile></MainProfile>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-8">
            <div className="about-right-content  portfolio-global-box">
              <h2 className="about-title">
                Hi I am <span>Asadur Jaman Nur</span> 👋
              </h2>
              {/* <p className='about-para'>I live in Feni, <strong>Bangladesh</strong> . I have achieved Higher Secondary Certificate in 2020.Currently I am studying in Mathematics department . I have experienced at Web Development .I have experience working at <strong>ThemeForest</strong>. now I am practice <strong>React Js</strong> .</p> */}
              <p className="about-para">
                I live in Feni, <strong>Bangladesh</strong> . I completed my
                Higher Secondary Certificate (HSC) in 2020 and am currently
                studying <strong>Mathematics</strong> at the university level. I
                have experience in web development and have contributed to
                projects on <strong>ThemeForest</strong> . Right now, I’m
                focused on improving my skills in{" "}
                <strong>
                  React.js and building modern, responsive web applications
                </strong>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
