import video from './Experienciabootcamp.mp4';
import './experiencia.css';

function Barner (){
    return(
        <div className='experiencia'>
            <div>
                <h2>ACOMPAÑANOS EN ESTA EXPERIENCIA</h2>
                <h1>NUESTRA EXPERIENCIA BOOTCAMP</h1>
                <p>VEN Y VIVE CON NOSOTROS EL APRENDIZAJE DE LAS NUEVAS TECNOLOGÍAS 4.0, EN MODALIDAD VIRTUAL Y PRECENCIAL, EN UN AMBIENTE INTERACTIVO E INMERSIVO, CON TALLERES PRÁCTICOS Y UN RETO FINAL</p>
            </div>
            <video className='video' src={video} controls/>
            <div className="titulo-vrt">
                <h1>NUESTROS BOOTCAMPS</h1>
                <h2>BOOTCAMPS <b>VIRTUALES</b> </h2>
            </div>
        </div>
    )
}

export default Barner;