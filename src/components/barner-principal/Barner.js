import image1 from './image1.jpeg';
import './barner.css';

function Barner (){
    return(
        <div className='barner'>
            <header>
                <h1>UNETE A NUESTROS BOOTCAMPS <b className='gra'>GRATUITOS</b></h1>
                <p>RECIBE CAPACITACIÓN PARA DESARROLLAR UNA SOLUCIÓN COMPLETA DE SOFTWARE.</p>
                <button>Registrarse</button>
            </header>

            <div>
                <img src={image1} alt='Imagen del equipo trabajando en un proyecto' className='imagen1'/>
            </div>

            <div className='titulo-tarjetas'>
                <h2>COMIENZA A PREPARATE DESDE YA</h2>
                <h1>NUESTRO MODELO DE ENSEÑANZA</h1>
            </div>
        </div>
    )
}

export default Barner;