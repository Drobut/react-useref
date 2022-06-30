import './styles.css';
import {useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material';

export default function Explication() {
    
    let navigate = useNavigate();
    function handleClick() {
      navigate('/example')
    }


    return(
      <>
        <div className='page'>
        <div className="Icon"></div>
        <h1>Explication</h1>
        <Typography variant="h1" component="div" gutterBottom>
                useRef
            </Typography>
            <Typography variant="body1">
            A partir da versão 16.8 do React é possível usar os Hooks como uma nova maneira de escrever componentes e reutilizar o código entre eles. Um desses hooks é o useRef. O useRef atua como uma função que retorna um objeto ref e recebe um argumento que inicializa a propriedade .current desse objeto.

            Estrutura: 

            const refContainer = useRef(initialValue);


            O useRef é uma alternativa para o useState e ter um front-end com mais performace e também para fazer referência a elementos na arvóre de elementos

            useRef utilizar um valor de referência, ele pode ser usado para armazenar um valor mutável que não causa uma nova renderização quando atualizado. Ele pode ser usado para acessar diretamente um elemento DOM.

            Ele dar mais performace a aplicação evitando renderizações desnecessárias.


            Segundo a documentação do React, existem algumas boas finalidades para o uso de refs:

            - Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
            - Engatilhar animações imperativas.
            - Integração com bibliotecas DOM de terceiros.

            Podemos usar o useRef para essas finalidades. Uma outra aplicação é poder acessar as props ou o estado anterior de um componente funcional.
            </Typography>
        <button className='btn1' onClick={handleClick}>Next</button>
        <button className='btn2' onClick={() => navigate(-1)}>Back</button>
        </div>
      </>
    )
}