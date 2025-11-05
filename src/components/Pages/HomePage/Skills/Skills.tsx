import { getSkills } from "@/services/skillService";
import Image from "next/image";

type TallSkill = {
  name: string;
  logoImage: string;
};
const Skills = async () => {
  const allSkills = await getSkills();
  console.log(allSkills);

  return (
    // <div>kakku</div>
    <div className="portfolio-global-box">
      <h4 className="portfolio-global-title mb-6">My Expert Area</h4>
      {/* <div className="expert-logo"> */}
      <ul className="grid  grid-cols-3 gap-5">
        {allSkills.data.map((allSkill: TallSkill, index: number) => (
          <li key={index}>
            <div className="custom-logo-box">
              <div className="custom-logo-img">
                {/* <img src={allSkill.logo} alt="prifile-img" /> */}
                <Image src={allSkill.logoImage} alt="" width={32} height={32} />
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

export default Skills;
