import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/explication");
  }

  return (
    <>
      <h1>Teste</h1>
      <div className="page">
        <div className="Icon"></div>
        <h1>React useRef</h1>
        <button className="btn1" onClick={handleClick}>
          Next
        </button>
      </div>
    </>
  );
}
