import "./Home.css";
import { homeSection } from "./DataHome";
import parse from 'html-react-parser';

function Home() {
  return (
    <section id="home">
      <img src={homeSection.image} />

      <div className="kolom">{parse(homeSection.content)}</div>
    </section>
  );
}

export default Home;
