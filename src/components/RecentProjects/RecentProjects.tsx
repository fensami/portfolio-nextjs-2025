import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FincatchImg from "../../assets/img/project-img/fincatch.png";
import EduplsImg from "../../assets/img/project-img/edupls.png";
import ReeniImg from "../../assets/img/project-img/reeni.png";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="portfolio-global-box">
      <div className="portfolio-title">
        <h4 className="portfolio-global-title">Recent Projects</h4>
        <Link href="/allProject" className="recent-post-btn">
          Recent Projects{" "}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="global-card-wrapper">
        <div className="global-card-wrap">
          <Link href="/allProject">
            <div className="global-img">
              <Image
                height={143}
                width={334}
                src={FincatchImg}
                alt="prifile-img"
              />
            </div>
          </Link>
        </div>
        <div className="global-card-wrap">
          <Link href="/allProject">
            <div className="global-img">
              <Image
                height={143}
                width={334}
                src={ReeniImg}
                alt="prifile-img"
              />
            </div>
          </Link>
        </div>
        <div className="global-card-wrap">
          <Link href="/allProject">
            <div className="global-img">
              <Image
                height={143}
                width={334}
                src={EduplsImg}
                alt="prifile-img"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
