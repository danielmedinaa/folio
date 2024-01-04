import "bulma/css/bulma.css";
import "../resources/custom.css"
import { TypeAnimation } from 'react-type-animation';

function HeaderComponent(){
    return(
<header className="hero is-fullheight is-primary">
  <div className="hero-body has-text-centered">
    <div className="container is-fullhd">
      <h1 className="is-size-1"><b>DANIEL <span>MEDINA</span></b></h1>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer',
        1500,
        'Python',
        1500,
        'Php',
        1500,
        'JavaScript',
        1500,
        'React',
        1500,
        'Wordpress',
        1500,
        'MySql',
        1500,
        'Postgres',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      <p className="has-text-light my-3">¡Hola!, Soy Daniel Medina desarrollador web especializado en diseño FrontEnd UX/UI con interfacez modernas, dinámicas y minimalistas.</p>
      <a href="#folio" id="btn-header" className="mt-3 button is-danger is-outlined">PORTAFOLIO</a>
    </div>
  </div>
</header>
        );
}
export default HeaderComponent;