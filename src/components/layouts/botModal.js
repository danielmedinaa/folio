import "bulma/css/bulma.css";
import "../../resources/custom.css";

function botModal() {
    return(
        <div class="modal">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Mi Ventana Modal</p>
                    <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                    <p>Este es el contenido de mi ventana modal.</p>
                    </section>
                    <footer class="modal-card-foot">
                    <button class="button is-success">Aceptar</button>
                    <button class="button">Cancelar</button>
                    </footer>
                </div>
            </div>
    )
}


export default botModal;