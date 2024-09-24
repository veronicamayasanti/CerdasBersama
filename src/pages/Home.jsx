import "./Home.css";
import { homeSection, coursesSection, tutorsSection } from "./DataHome";
import parse from "html-react-parser";
import Tutors from "../Components/Tutors/Tutors";
import {tutorsList} from "../Components/Tutors/DataTutors.jsx";

function Home() {
  return (
    <>
      {/* home */}
      <section id="home">
        <img src={homeSection.image} />
        <div className="kolom">{parse(homeSection.content)}</div>
      </section>
      {/* online course */}
      <section id="courses">
        <div className="kolom">{parse(coursesSection.content)}</div>
        <img src={coursesSection.image} />
      </section>

      {/* tutors */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">{parse(tutorsSection.content)}</div>

          <Tutors tutorsList={tutorsList} />
        </div>
      </section>
    </>
  );
}

export default Home;
