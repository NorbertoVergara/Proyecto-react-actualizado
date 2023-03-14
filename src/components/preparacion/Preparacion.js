import image from './images-preparacion/preparacion.jpg';
import './preparacion.css';

function Preparacion() {
  return (
    <section className="preparacion">
      <img src={image} alt="" className="imagen" />
      <div className="contenido-texto">
        <h1>INICIA HOY TU PREPARACIÓN CAMPAMENTO INTERACTIVO <b>/</b> INMERSIVO</h1>
        <ul>
          <li>Desarrolla una solución completa de software realizado 100% por ti mismo</li>
          <li>Aprende de forma 100% práctica</li>
          <li>Especialízate en la parte que más te guste</li>
          <li>No serás únicamente un Full Stack Developer, Científico de Datos o experto en IA</li>
          <li>Tendrás el conocimiento para ser y hacer lo que quieras y encajar donde sea. Tú decides.</li>
        </ul>
      </div>
    </section>
  );
}

export default Preparacion;
