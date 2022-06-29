import './styles.css';
import {useNavigate} from 'react-router-dom'

export default function Example() {
    
    let navigate = useNavigate();
    function handleClick() {
      navigate('/example')
    }


    return(
        <div className='page'>
        <div className="Icon"></div>
        <h1>Example</h1>
        <button className='btn2' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}