import "bulma/css/bulma.css";
import FolioObjects from "../../objects/folioObjects";
var cards = FolioObjects();

function Folio() {
  return (
    <div>
      <h1 className="title is-white has-text-primary pt-5 has-text-centered">
        PORTAFOLIO
      </h1>
      <div className="mx-5 col-folio is-flex is-flex-direction-row is-justify-content-space-between is-gapless">
        {cards.map((card, index) => (
                <div className="folio-cont py-5" id="folio">
                    <div className="imgCont">
                        <img className="img-folio" src={card.ruta}/>
                    </div>
                    <p className="has-text-primary py-3"><b>{card.titulo}</b></p>
                    <p className="pb-3">{card.desc}</p>
                    <div className="is-flex is-flex-direction-row is-justify-content-space-between is-variable tagColumns">
                        {card.tech.map((tec, i) => (
                            <span className="tag bg-secondary has-text-white mt-3">{tec}</span>
                        ))}
                    </div>
                </div>
        ))}
      </div>
    </div>
  );
}

export default Folio;
