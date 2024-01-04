import "bulma/css/bulma.css";
import KnowLedgeObjects from "../objects/kknomLedgeObjects";
const c = KnowLedgeObjects();

function KnowLedge() {
    return(
        <section className="section">
            <div className="hero is-large is-white has-text-centered">
                <p className="title has-text-primary">CONOCIMIENTOS</p>
                <p className="has-text-centered text-conoc">
                    Tengo conocimientos en el desarrollo de aplicaciónes con distintas inteligencias y librerías, trabajo las vistas de un sistema web con <b>html</b>, <b>css</b> y <b>JavaScript</b>. Mientras que para sistemas de escritorio en caso de <b>python</b> trabajo con varias librerias cómo Tkinter, Ttkbootstrap, Toga y Flet.
                </p>
            </div>
            <div className="mx-5 mt-5 is-flex is-flex-direction-row is-justify-content-space-between is-gapless knoIcons">
                        {c.map((card, i) =>(
                            <div className="column">
                                <i className={card.icon}></i>
                            </div>
                        ))}
            </div>
        </section>
    );
}

export default KnowLedge;