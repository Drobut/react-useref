import './styles.css';
import {useNavigate} from 'react-router-dom'

export default function Explication() {
    
    let navigate = useNavigate();
    function handleClick() {
      navigate('/example')
    }


    return(
        <div className='page'>
        <div className="Icon"></div>
        <h1>Explication</h1>
        <button className='btn1' onClick={handleClick}>Next</button>
        <button className='btn2' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}