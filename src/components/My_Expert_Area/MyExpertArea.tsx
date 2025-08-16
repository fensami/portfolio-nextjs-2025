import HtmlImg from "../../assets/img/logo/html-logosvg.svg";
// import ReactImg from "../assets/img/logo/react-logo.svg";
import ReactImg from "../../assets/img/logo/react-logo.svg";
import JsImg from "../../assets/img/logo/javascript-logo.svg";
import GithubImg from "../../assets/img/logo/github-logo.svg";
import CssImg from "../../assets/img/logo/cssImg.svg";
import SassImg from "../../assets/img/logo/sassImg.svg";
import NextjsImg from "../../assets/img/logo/nextjsImg.svg";
import FigmaImg from "../../assets/img/logo/figma-logo.png";
import BootstrapImg from "../../assets/img/logo/bootstrapImg.jpg";
import TailwindImg from "../../assets/img/logo/tailwindImg.png";
import Typescript from "../../assets/img/logo/typescript.svg";
import GoogleSheet from "../../assets/img/logo/sheet.png";
import GoogleForm from "../../assets/img/logo/Google-Forms.png";
import MongooseLogo from "../../assets/img/logo/mongoose-Logo.png";
import MongoDB from "../../assets/img/logo/mongodb.png";
import Image from "next/image";

const allSkills = [
  {
    name: "Html",
    logo: HtmlImg,
  },
  {
    name: "Css",
    logo: CssImg,
  },
  {
    name: "Javascript",
    logo: JsImg,
  },
  {
    name: "React Js",
    logo: ReactImg,
  },
  {
    name: "Github",
    logo: GithubImg,
  },
  {
    name: "Sass",
    logo: SassImg,
  },
  {
    name: "Next Js",
    logo: NextjsImg,
  },
  {
    name: "Figma",
    logo: FigmaImg,
  },
  {
    name: "Bootstrap",
    logo: BootstrapImg,
  },
  {
    name: "Tailwind Css",
    logo: TailwindImg,
  },
  {
    name: "Typescript",
    logo: Typescript,
  },
  {
    name: "Sheet",
    logo: GoogleSheet,
  },
  {
    name: "Google Form",
    logo: GoogleForm,
  },
  {
    name: "Mongoose",
    logo: MongooseLogo,
  },
  {
    name: "MongoDB",
    logo: MongoDB,
  },
];

const MyExpertArea = () => {
  return (
    <div className="portfolio-global-box">
      <h4 className="portfolio-global-title mb-6">My Expert Area</h4>
      {/* <div className="expert-logo"> */}
      <ul className="grid  grid-cols-3 gap-5">
        {allSkills.map((allSkill, index) => (
          <li key={index}>
            <div className="custom-logo-box">
              <div className="custom-logo-img">
                {/* <img src={allSkill.logo} alt="prifile-img" /> */}
                <Image src={allSkill.logo} alt="" width={32} height={32} />
              </div>
              <p className="logo-title mt-2 font-semibold">{allSkill.name}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
};

export default MyExpertArea;
