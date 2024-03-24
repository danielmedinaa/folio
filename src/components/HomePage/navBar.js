import "bulma/css/bulma.css";

function NavBar() {
    return(
        <nav id="nav" class="navbar py-3  px-2 is-light is-fixed-top pb-4" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <p><strong className="has-text-primary subtitle"><b>DANIEL MEDINA</b></strong></p>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;