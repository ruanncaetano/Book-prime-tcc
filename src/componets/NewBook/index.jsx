import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import um from "../../assets/1.png";
import dois from "../../assets/2.png";
import tres from "../../assets/3.png";

export default function NewBook() {
  return (
    <div className="cadernos">
      <ul className="ul">
        <li>
          <a href="/paper">
            <img src={um} alt="" />
          </a>
        </li>
        <li>
          <a href="/paper">
            <img src={dois} alt="" />
          </a>
        </li>
        <li>
          <Link to="/paper">
            <img src={tres} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
