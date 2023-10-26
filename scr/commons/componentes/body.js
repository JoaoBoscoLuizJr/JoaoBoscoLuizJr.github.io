function body(){
    bodyElement.innerHTML=`  <div id="inicio" class="content-vls">
    <section id="sobre" class="container content center padding-64">
        <h2 class="wide">SOBRE</h2>
        <p class="opacit"><i>Gosto de futebol, games e tecnologia</i></p>
        <p class="justify center">
            Sou aluno no SENAI e criei este site portfólio para contar um pouco sobre mim e mostrar meus projetos .
        </p>
        <div class="card-container">
            <div class="cardBox">
                <h2>Especificações do meu Celular</h2>
                <p>Este e meu Celular atualmente</p>
                <a class="btn-card" type="button" href="./scr/pages/portifolio/MeuCell.html" target="_blank">Go
                    to</a>
            </div>
        </div>
    </section>
    <section id="projetos" class="container content center padding-64 black-ground">
        <h2 class="wide">PROJETOS</h2>
        <div class="card-container">
            <div class="cardBox">
                <h2>App Inventor</h2>
                <p>Meus projetos para celular</p>
                <a class="btn-card" type="button" href="https://github.com/JoaoBoscoLuizJr/Projetos_APP_Inventor"
                    target="_blank">Go to</a>
            </div>
            <div class="cardBox">
                <h2>Meu GitHub</h2>
                <p>Meu repositório no GitHub.</p>
                <a class="btn-card" type="button" href="https://github.com/JoaoBoscoLuizJr" target="_blank">Go
                    to</a>
            </div>

        </div>
    </section>
    <section id="artigos" class="container content center padding-64">
        <h2 class="wide">ARTIGOS</h2>
        <div class="card-container">
            <div class="cardBox">
                <h2>Top 5 músicas</h2>
                <p>As melhores músicas, na minha opnião.</p>
                <a class="btn-card" type="button" href="./scr/pages/portifolio/Top-5-musicas.html" target="_blank">Leia
                    Mais</a>
            </div>
            <div class="cardBox">
                <h2>Artigos</h2>
                <p>Meus Artigos.</p>
                <a class="btn-card center" type="button" href="./scr/pages/portifolio/Artigos.html" target="_blank">Leia
                    Mais</a>
            </div>
            <div class="cardBox">
                <h2>Realizações acadêmicas</h2>
                <p>Passeios, visitas téncnicas e outros.</p>
                <a class="btn-card" type="button" href="./scr/pages/portifolio/realizaçoes-academicas.html" target="_blank">Leia
                    Mais</a>
            </div>
        </div>

</div>
</div>

<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner carousel-vls">
        <div class="carousel-item active ">
            <img src="./scr/images/1ª guerra.webp" class="carousel-vls" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>
                    <p>1º Guerra Mundial</p>O que foi ?
                </h5>
                <p>A Primeira Guerra Mundial foi um marco na história da humanidade. Foi a primeira guerra do século
                    XX e o
                    primeiro conflito em estado de guerra total – aquele em que uma nação mobiliza todos os seus
                    recursos
                    para
                    viabilizar o combate...</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="./scr/images/Piratas_do_vale_do_sil_cio__Front_.jpg" class="carousel-vls" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h5>
                    <p>Resenha do Filme:</p>Piratas do Vale do Silício
                </h5>
                <p>Um pouco sobre a historia do filme Piratas do Vale do Silício</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="./scr/images/alma.jpg" class="carousel-vls" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h5>
                    Top 5 musicas
                </h5>
                <p>que na minha opinião são as melhores</p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</section>
<div class= "">
<section id="contato" class="container content center  wide padding-32 black-ground">
    <h2 class="wide">CONTATOS</h2>
    <p>
    <h1>E-mail</h1> <a class="btn-card" type="button"
        href="mailto:joaoboscoluizjunior404@gmail.com">joaoboscoluizjunior404@gmail.com</a></p>
    <p>
    <h1>instagram</h1><a class="btn-card" type="button" href="https://www.instagram.com/joaoboscojr_"
        target="_blank">joaoboscojr_</a></p>
</section>
</div> `
}
body();
export {body}