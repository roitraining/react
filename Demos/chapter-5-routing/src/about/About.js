import { Link, Route , Routes} from "react-router-dom";
import Faq from "../faq/Faq";

function About() {
  return (
  <>
    <div className="row">
      <h1>Book Reactions</h1>
    </div>
    <div className="row">
      <h2>Where you react to books</h2>
    </div>
    <Link to="faq">FAQ</Link>
    <Routes>
      <Route path="faq" element={<Faq />} />
    </Routes>
  </>
  );
}

export default About;
