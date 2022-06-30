import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/explication");
  }

    return(
        <>  
            <div className='page'>
            <div className="Icon"></div>
            <h1>React useRef</h1>
            <p className='nome'>-Diogo Matias</p>
            <p className='nome'>-Douglas Drobut</p>
            <p className='nome'>-Rafael Correa</p>
            <p className='nome'>-Richard</p>
            <button className='btn1' onClick={handleClick}>Next</button>
            </div>
        </>
    )
    
}
