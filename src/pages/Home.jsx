import "./Home.css";
import {
  homeSection,
  coursesSection,
  tutorsSection,
  partnerSection,
} from "./DataHome";
import parse from "html-react-parser";
import Tutors from "../Components/Tutors/Tutors";
import { tutorsList } from "../Components/Tutors/DataTutors.jsx";
import Partners from "../Components/Partners/Partners.jsx";
import { partnersList } from "../Components/Partners/DataPartner.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import { contactSection } from "../Components/Contact/DataContact.jsx";
function Home() {
  return (
    <>
      <Navbar />
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

      {/* partners */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{parse(partnerSection.content)}</div>
          <Partners partnersList={partnersList} />
        </div>
      </section>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
