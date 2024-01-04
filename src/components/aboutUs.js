import "bulma/css/bulma.css";

function AboutUs() {
    return(
        <section className="hero is-small is-white px-5">
            <div className="hero-body">
                <div className="hero px-5 is-medium columns is-white about-us is-align-items-center">
                    <div className="column about-col">
                        <p className="title has-text-primary">SOBRE MÍ</p>
                        <p className="has-text-gray">¡Hola!, soy Daniel Medina, <b>Técnico Superior Universitario</b> en informática, soy <b>programador</b> FrontEnd y BackEnd especializado en maquetación, diseño de páginas web y con experiencia en desarrollo de aplicaciones web y sistemas de escritorio. También cuento con experiencia como <b>Diseñador gráfico</b> diseñando logos, flyers, banners y vinilos a pequeñas y medianas empresas así como a marcas personales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;