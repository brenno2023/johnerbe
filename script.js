/* =========================================================
   JOHNERBE PRODUTOS NATURAIS
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

        document.body.classList.toggle("menu-open");

        const menuIsOpen =
            nav.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });


    const navigationLinks =
        nav.querySelectorAll("a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   HEADER AO ROLAR A PÁGINA
========================================================= */

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   FILTRO DOS PRODUTOS ANTIGOS
   Mantido para não quebrar outras partes do projeto.
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const filterItems =
    document.querySelectorAll(
        ".filter-item"
    );


if (
    filterButtons.length > 0 &&
    filterItems.length > 0
) {

    filterButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const selectedFilter =
                    button.dataset.filter;


                filterItems.forEach(
                    (product) => {

                        const category =
                            product.dataset.category;


                        if (
                            selectedFilter ===
                            "todos"
                        ) {

                            product.classList.remove(
                                "hide"
                            );

                        }

                        else if (
                            category ===
                            selectedFilter
                        ) {

                            product.classList.remove(
                                "hide"
                            );

                        }

                        else {

                            product.classList.add(
                                "hide"
                            );

                        }

                    }
                );

            }
        );

    });

}


/* =========================================================
   ANIMAÇÃO AO ROLAR
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".category-card, " +
        ".product-card, " +
        ".testimonial-card, " +
        ".feedback-card, " +
        ".value-card, " +
        ".contact-card"
    );


revealElements.forEach((element) => {

    element.classList.add(
        "reveal"
    );

});


if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}

else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   FECHAR MENU COM ESC
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav
        ) {

            nav.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );


            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   RISQUINHO DO MENU CONFORME A ROLAGEM
========================================================= */

/* =========================================================
   RISQUINHO DO MENU CONFORME A ROLAGEM
========================================================= */

const linksDoMenu = document.querySelectorAll(".nav-link");

const secoesDoMenu = [
    "home",
    "produtos",
    "quem-somos",
    "feedbacks",
    "contato"
];


function marcarMenuAtual() {

    const alturaHeader = 100;

    let secaoAtual = "home";


    secoesDoMenu.forEach((id) => {

        const secao = document.getElementById(id);

        if (!secao) {
            return;
        }

        const posicao =
            secao.getBoundingClientRect();

        if (posicao.top <= alturaHeader + 80) {
            secaoAtual = id;
        }

    });


    /* SE CHEGOU NO FINAL DA PÁGINA,
       GARANTE QUE CONTATO FIQUE ATIVO */

    const chegouNoFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

    if (chegouNoFinal) {
        secaoAtual = "contato";
    }


    linksDoMenu.forEach((link) => {

        link.classList.remove("active");

        const destino =
            link.getAttribute("href");

        if (destino === "#" + secaoAtual) {
            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    marcarMenuAtual,
    { passive: true }
);

window.addEventListener(
    "load",
    marcarMenuAtual
);

window.addEventListener(
    "resize",
    marcarMenuAtual
);

marcarMenuAtual();


/* =========================================================
   DADOS DAS 12 CATEGORIAS
========================================================= */

const categoriasProdutos = {

    chas: {

        titulo:
            "Chás",

        descricao:
            "Conheça nossa variedade de chás.",

        subtitulo:
            "Variedade para diferentes gostos.",

        texto:
            "Na John Erbe você encontra diferentes opções de chás selecionados para diversos gostos e preferências.",

        pasta:
            "chas"

    },


    especiarias: {

        titulo:
            "Temperos e Especiarias",

        descricao:
            "Sabores e aromas para suas receitas.",

        subtitulo:
            "Mais sabor para suas preparações.",

       texto:
    "Conheça nossa seleção de temperos, especiarias, alho, pimentas e outras opções para diferentes tipos de receitas.",

        pasta:
            "especiarias"

    },


    farinhas: {

        titulo:
            "Farinhas",

        descricao:
            "Diferentes opções para suas preparações.",

        subtitulo:
            "Variedade para suas receitas.",

        texto:
            "Encontre diferentes tipos de farinhas para receitas e preparações variadas.",

        pasta:
            "farinhas"

    },


    castanhas: {

        titulo:
            "Castanhas e Oleaginosas",

        descricao:
            "Uma seleção especial de castanhas e oleaginosas.",

        subtitulo:
            "Qualidade e variedade.",

        texto:
            "Castanhas, nozes e diferentes opções selecionadas disponíveis em nossa loja.",

        pasta:
            "castanhas"

    },


    cafes: {

        titulo:
            "Cafés",

        descricao:
            "Aromas e sabores selecionados.",

        subtitulo:
            "Para quem aprecia um bom café.",

        texto:
            "Conheça algumas das opções de cafés disponíveis na John Erbe.",

        pasta:
            "cafes"

    },


    pos: {

        titulo:
            "Pós Naturais",

        descricao:
            "Conheça nossa variedade de produtos naturais em pó.",

        subtitulo:
            "Diversas opções disponíveis.",

        texto:
            "Uma seleção de pós naturais para diferentes preparações e rotinas.",

        pasta:
            "pos"

    },


    "mel-propolis": {

    titulo:
        "Mel, Própolis e Derivados",

    descricao:
        "Produtos selecionados e diferentes opções disponíveis.",

    subtitulo:
        "Conheça nossa variedade.",

    texto:
        "Encontre mel, própolis, extratos de própolis, opções sem álcool, pólen e outros derivados disponíveis na John Erbe.",

    pasta:
        "mel-propolis"

},


    oleos: {

    titulo:
        "Óleos, Azeites e Derivados",

    descricao:
        "Diversas opções para diferentes usos e preferências.",

    subtitulo:
        "Variedade em óleos e produtos selecionados.",

    texto:
    "Conheça nossa seleção de óleos, azeites, vinagres tradicionais e orgânicos e outros produtos disponíveis na John Erbe.",

    pasta:
        "oleos"

},


    granolas: {

        titulo:
            "Granolas",

        descricao:
            "Sabores e combinações para sua rotina.",

        subtitulo:
            "Variedade em cada escolha.",

        texto:
            "Conheça diferentes opções e combinações de granolas disponíveis.",

        pasta:
            "granolas"

    },


    suplementos: {

    titulo:
        "Suplementos e Cápsulas",

    descricao:
        "Diversas opções de suplementação disponíveis.",

    subtitulo:
        "Variedade para diferentes necessidades.",

    texto:
        "Conheça nossa seleção de creatinas, suplementos, cápsulas e outras opções disponíveis na loja.",

    pasta:
        "suplementos"

},


    cuidados: {

    titulo:
        "Sabonetes e Cuidados",

    descricao:
        "Produtos selecionados para cuidado pessoal.",

    subtitulo:
        "Sabonetes e opções para diferentes cuidados.",

    texto:
        "Encontre sabonetes em diferentes opções, além de pomadas, géis de massagem e outros produtos de cuidado pessoal.",

    pasta:
        "cuidados"

},


    bebidas: {

    titulo:
        "Xaropes e Bebidas Naturais",

    descricao:
        "Conheça diferentes opções disponíveis na loja.",

    subtitulo:
        "Variedade de sabores e produtos.",

   texto:
    "Encontre xaropes, bebidas naturais, tererés em diversos sabores, cuias e outras opções especiais disponíveis na John Erbe.",

    pasta:
        "bebidas"

},


pimentas: {
    titulo: "Pimentas e Molhos",
    descricao: "Molhos picantes, cremes e conservas para diferentes receitas.",
    subtitulo: "Sabores intensos e marcantes.",
    texto: "Conheça nossa variedade de pimentas e molhos.",
        pasta: "pimentas"
},

terere: {

    titulo: "Cuias, Copos, Guampas e Bombas para Tereré",

    descricao: "Conheça nossa variedade de acessórios para tereré.",

    subtitulo: "Diversos modelos disponíveis.",

    texto: "Encontre cuias, copos, guampas e bombas para tereré em diferentes modelos e estilos.",

    pasta: "terere"

}

};





/* =========================================================
   ELEMENTOS DA ÁREA DE PRODUTOS
========================================================= */

const gradeCategorias =
    document.querySelector(
        "#produtos .products-page-grid"
    );


const cabecalhoProdutos =
    document.querySelector(
        "#produtos .section-heading"
    );


const caixaProdutosWhats =
    document.querySelector(
        "#produtos .products-info"
    );


const telaDetalhes =
    document.getElementById(
        "detalhe-produto"
    );


/* =========================================================
   ABRIR UMA DAS 12 CATEGORIAS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const card =
            event.target.closest(
                ".category-open"
            );


        if (!card) {
            return;
        }


        event.preventDefault();


        const categoria =
            card.dataset.category;

            /* MOSTRAR SUPLEMENTOS APENAS NA CATEGORIA SUPLEMENTOS */
const galeriaSuplementos = document.getElementById("galeria-suplementos");

if (galeriaSuplementos) {
    galeriaSuplementos.hidden = categoria !== "suplementos";
}
            
/* MOSTRAR GALERIA DE PIMENTAS */
const galeriaPimentas = document.getElementById("galeria-pimentas");

if (galeriaPimentas) {
    galeriaPimentas.hidden = categoria !== "pimentas";
}

/* ESCONDER TARJAS SOMENTE EM PIMENTAS */
const detalheProduto = document.getElementById("detalhe-produto");

if (detalheProduto) {
    detalheProduto.classList.toggle("categoria-pimentas", categoria === "pimentas");
    detalheProduto.classList.toggle("categoria-suplementos", categoria === "suplementos");
    detalheProduto.classList.toggle("categoria-bebidas", categoria === "bebidas");
    detalheProduto.classList.toggle("categoria-mel", categoria === "mel-propolis");
    detalheProduto.classList.toggle("categoria-terere", categoria === "terere");
    detalheProduto.classList.toggle("categoria-granolas", categoria === "granolas");
    detalheProduto.classList.toggle("categoria-especiarias", categoria === "especiarias");
    detalheProduto.classList.toggle("categoria-cuidados", categoria === "cuidados");
    detalheProduto.classList.toggle("categoria-chas", categoria === "chas");
    detalheProduto.classList.toggle("categoria-farinhas", categoria === "farinhas");
    detalheProduto.classList.toggle("categoria-castanhas", categoria === "castanhas");  
    detalheProduto.classList.toggle("categoria-pos", categoria === "pos");
    detalheProduto.classList.toggle("categoria-cafes", categoria === "cafes");
}

            
/* MOSTRAR ÓLEOS DE COCO APENAS NA CATEGORIA ÓLEOS */
const galeriaCoco = document.getElementById("galeria-oleo-coco");

if (galeriaCoco) {
    galeriaCoco.hidden = categoria !== "oleos";
}



        const dados =
            categoriasProdutos[
                categoria
            ];


        if (!dados) {
            return;
        }


        /*
         * Se a tela interna ainda não existir
         * no HTML, não deixa o site quebrar.
         */

        if (!telaDetalhes) {

            console.warn(
                "A tela #detalhe-produto não foi encontrada no HTML."
            );

            return;
        }


        /* TÍTULO */

        const detailTitle =
            document.getElementById(
                "detail-title"
            );

        if (detailTitle) {

            detailTitle.textContent =
                dados.titulo;

        }


        /* DESCRIÇÃO */

        const detailDescription =
            document.getElementById(
                "detail-description"
            );

        if (detailDescription) {

            detailDescription.textContent =
                dados.descricao;

        }


        /* SUBTÍTULO */

        const detailSubtitle =
            document.getElementById(
                "detail-subtitle"
            );

        if (detailSubtitle) {

            detailSubtitle.textContent =
                dados.subtitulo;

        }


        /* TEXTO */

        const detailText =
            document.getElementById(
                "detail-text"
            );

        if (detailText) {

            detailText.textContent =
                dados.texto;

        }

        
/* ÓLEOS NATURAIS - SOMENTE NA CATEGORIA ÓLEOS */
const galeriaOleosNaturais = document.getElementById("galeria-oleos-naturais");

if (galeriaOleosNaturais) {
    galeriaOleosNaturais.hidden = categoria !== "oleos";
}


        
/* MOSTRAR AZEITES APENAS NA CATEGORIA ÓLEOS */
const galeriaAzeites = document.getElementById("galeria-azeites");

if (galeriaAzeites) {
    galeriaAzeites.hidden = categoria !== "oleos";
}



        /* =====================================================
   FOTOS DA CATEGORIA - DEFINIDAS NO HTML
===================================================== */

const templateImagens =
    card.querySelector(
        ".category-detail-images"
    );

const imagensCategoria =
    templateImagens
        ? templateImagens.content.querySelectorAll("img")
        : [];

const galeriaDinamica =
    document.getElementById(
        "dynamic-product-gallery"
    );

    /* SABONETES - DUAS COLUNAS INDEPENDENTES */

if (galeriaDinamica && categoria === "cuidados") {
    galeriaDinamica.innerHTML = "";

    const esquerda = document.createElement("div");
    const direita = document.createElement("div");

    esquerda.className = "sabonetes-coluna";
    direita.className = "sabonetes-coluna";

    imagensCategoria.forEach((foto, index) => {
        const img = document.createElement("img");

        img.src = foto.getAttribute("src");
        img.alt = foto.getAttribute("alt") || "Sabonete";
        img.className = "sabonetes-foto";

        // Rosa Mosqueta e Sete Ervas à esquerda
        if (index === 0 || index === 3) {
            esquerda.appendChild(img);
        } else {
            // Camomila e Enxofre à direita
            direita.appendChild(img);
        }
    });

    galeriaDinamica.append(esquerda, direita);
}

   /* =====================================================
   GALERIAS DAS CATEGORIAS
===================================================== */

if (galeriaDinamica && categoria !== "cuidados") {

    galeriaDinamica.innerHTML = "";

    galeriaDinamica.style.display =
        categoria === "suplementos" ? "none" : "";

    // Granolas: duas colunas independentes
    if (categoria === "granolas") {

        const colunaEsquerda = document.createElement("div");
        const colunaDireita = document.createElement("div");

        colunaEsquerda.className = "granolas-coluna";
        colunaDireita.className = "granolas-coluna";

        imagensCategoria.forEach((foto, index) => {

            const imagem = document.createElement("img");

            imagem.src = foto.getAttribute("src");
            imagem.alt = foto.getAttribute("alt") || "Granola";
            imagem.className = "granolas-foto";

            if (index < 2) {
                colunaEsquerda.appendChild(imagem);
            } else {
                colunaDireita.appendChild(imagem);
            }

        });

        galeriaDinamica.appendChild(colunaEsquerda);
        galeriaDinamica.appendChild(colunaDireita);

    } else {

        // Todas as demais categorias, incluindo Sabonetes
        imagensCategoria.forEach((foto, index) => {

            const blocoImagem = document.createElement("div");
            blocoImagem.className = "product-detail-image";

            if (categoria === "bebidas") {
                blocoImagem.classList.add("xaropes-item");

                if (index === 6) {
                    blocoImagem.classList.add("xaropes-banner");
                }
            }

            const imagem = document.createElement("img");

            imagem.src = foto.getAttribute("src");
            imagem.alt = foto.getAttribute("alt") ||
                `${dados.titulo} - foto ${index + 1}`;

            blocoImagem.appendChild(imagem);
            galeriaDinamica.appendChild(blocoImagem);

        });

    }
}


        /* =====================================================
           WHATSAPP DA CATEGORIA
        ===================================================== */

        const mensagem =
            `Olá! Vi a categoria ${dados.titulo} no site da John Erbe e gostaria de conhecer as opções disponíveis.`;


        const whatsapp =
            document.getElementById(
                "detail-whatsapp"
            );


        if (whatsapp) {

            whatsapp.href =
                "https://wa.me/5517988150538?text=" +
                encodeURIComponent(
                    mensagem
                );

        }


        /* =====================================================
           ESCONDE A PRÉ-VISUALIZAÇÃO
        ===================================================== */

        if (gradeCategorias) {

            gradeCategorias.style.display =
                "none";

        }


        if (cabecalhoProdutos) {

            cabecalhoProdutos.style.display =
                "none";

        }


        if (caixaProdutosWhats) {

            caixaProdutosWhats.style.display =
                "none";

        }


        /* =====================================================
           MOSTRA SOMENTE A CATEGORIA CLICADA
        ===================================================== */

        telaDetalhes.classList.add(
            "active"
        );


        /* =====================================================
           SOBE PARA O COMEÇO DA SEÇÃO PRODUTOS
        ===================================================== */

        const secaoProdutos =
            document.getElementById(
                "produtos"
            );


        if (secaoProdutos) {

            window.scrollTo({

                top:
                    secaoProdutos.offsetTop -
                    80,

                behavior:
                    "smooth"

            });

        }

    }
);


/* =========================================================
   VOLTAR PARA AS 12 CATEGORIAS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const voltar =
            event.target.closest(
                ".product-back-button"
            );


        if (!voltar) {
            return;
        }


        event.preventDefault();


        /* ESCONDE DETALHES */

        if (telaDetalhes) {

            telaDetalhes.classList.remove(
                "active"
            );

        }


        /* MOSTRA OS 12 CARDS */

        if (gradeCategorias) {

            gradeCategorias.style.display =
                "grid";

        }


        /* MOSTRA O CABEÇALHO */

        if (cabecalhoProdutos) {

            cabecalhoProdutos.style.display =
                "";

        }


        /* MOSTRA O WHATSAPP */

        if (caixaProdutosWhats) {

            caixaProdutosWhats.style.display =
                "";

        }


        /* VOLTA PARA O COMEÇO */

        const secaoProdutos =
            document.getElementById(
                "produtos"
            );


        if (secaoProdutos) {

            window.scrollTo({

                top:
                    secaoProdutos.offsetTop -
                    80,

                behavior:
                    "smooth"

            });

        }

    }
);