import "bulma/css/bulma.css";

function NavBar() {
    return(
        <nav id="nav" class="navbar py-3  px-2 bg-primary is-fixed-top is-dark pb-4" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <p><strong className="has-text-danger subtitle">DANIEL MEDINA</strong></p>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;