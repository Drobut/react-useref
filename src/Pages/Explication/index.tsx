import './styles.css';
import {useNavigate} from 'react-router-dom'
import { Grid, Typography } from '@mui/material';
import { color } from '@mui/system';

export default function Explication() {
    
    let navigate = useNavigate();
    function handleClick() {
      navigate('/example')
    }


    return(
      <>
        <div className='page'>
        <h1 className='ex' >Explication</h1>
        <div>
            <Typography variant="body1" sx={{
              color: '#fff',
              marginLeft: '100px',
              paddingTop: '20px',
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textAlign:'center',
              width: '90vw',
              fontSize: '20px'
            }}>
              A partir da versão 16.8 do React é possível usar os Hooks como uma nova maneira de escrever componentes e reutilizar o código entre eles. Um desses hooks é o useRef. O useRef atua como uma função que retorna um objeto ref e recebe um argumento que inicializa a propriedade .current desse objeto.<br/>

              Estrutura: <br/>

              const refContainer = useRef(initialValue);<br/>


              O useRef é uma alternativa para o useState e ter um front-end com mais performace e também para fazer referência a elementos na arvóre de elementos<br/>

              useRef utilizar um valor de referência, ele pode ser usado para armazenar um valor mutável que não causa uma nova renderização quando atualizado. Ele pode ser usado para acessar diretamente um elemento DOM.<br/>

              Ele dar mais performace a aplicação evitando renderizações desnecessárias.<br/>


              Segundo a documentação do React, existem algumas boas finalidades para o uso de refs:<br/>

              - Gerenciamento de foco, seleção de texto, ou reprodução de mídia.<br/>
              - Engatilhar animações imperativas.<br/>
              - Integração com bibliotecas DOM de terceiros.<br/>

              Podemos usar o useRef para essas finalidades. Uma outra aplicação é poder acessar as props ou o estado anterior de um componente funcional.<br/>
            </Typography>
        </div>
        <button className='btn1' onClick={handleClick}>Next</button>
        <button className='btn2' onClick={() => navigate(-1)}>Back</button>
        </div>
      </>
    )
}