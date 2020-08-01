const App = {
    init: function () {
        console.log("Start");
        this.components.createComponents();

        console.log("After start", this);
    },

    events: {},

    components: {
        app: null,


        createComponents: function () {
            //Componente Principal
            this.app = document.createElement("div");
            //Setar estilo da div
            this.app.style.textAlign = "right";
            this.app.style.height = "30px";
            document.body.appendChild(this.app);

            //Cabeçalho
            //Criando link Gmail
            this.gmail = document.createElement("a");
            this.gmail.setAttribute("href", "");
            this.gmail.textContent = "Gmail";
            //Estilo do textContent
            this.gmail.style.textDecoration = "none";
            this.gmail.style.lineHeight = "40px";
            this.gmail.style.marginRight = "15px";
            this.gmail.style.fontFamily = "arial";
            this.gmail.style.fontSize = "small";
            //Função mouseOver e mouseOut
            this.gmail.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.gmail.onmouseout = function () {
                this.style.textDecoration = "none";
            };
            this.app.appendChild(this.gmail);

            //Criando link Imagens
            this.imagens = document.createElement("a");
            this.imagens.setAttribute("href", "");
            this.imagens.textContent = "Imagens";
            this.imagens.style.marginRight = "15px";
            this.imagens.style.fontFamily = "arial";
            this.imagens.style.fontSize = "small";
            this.app.appendChild(this.imagens);
            //Função mouseOver e mouseOut
            this.imagens.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.imagens.onmouseout = function () {
                this.style.textDecoration = "none";
            };
            this.app.appendChild(this.imagens);

            //Criando icone quadrado
            this.quadrado = document.createElement("img");
            this.quadrado.style.height = "50%";
            this.quadrado.style.opacity = "0.6";
            this.quadrado.style.position = "relative";
            this.quadrado.style.top = "20%";
            this.quadrado.style.transform = "translateY(-20%)";
            this.quadrado.style.marginRight = "15px";
            this.quadrado.src = 'imagens/Google_apps.png';
            this.app.appendChild(this.quadrado);
            //Função mouseOver e mouseOut
            this.quadrado.onmouseover = function () {
                console.log(this);//Remover
                this.style.opacity = "1.0";
                this.style.cursor="hand";
            };

            this.quadrado.onmouseout = function () {
                this.style.opacity = "0.7";
                this.style.cursor="pointer";
            };
            this.app.appendChild(this.quadrado);

            //Criando icone do Perfil
            this.perfil = document.createElement("img");
            this.perfil.style.height = "85%";
            this.perfil.style.position = "relative";
            this.perfil.style.top = "50%";
            this.perfil.style.transform = "translateY(-30%)";
            this.perfil.style.marginRight = "15px";
            this.perfil.style.borderRadius = "100%";
            this.perfil.src = 'imagens/Google_account.png';
            this.app.appendChild(this.perfil);
            //Função mouseOver e mouseOut
            this.perfil.onmouseover = function () {
                console.log(this);//Remover
                this.style.cursor="hand";
            };

            this.perfil.onmouseout = function () {
                this.style.cursor="pointer";
            };
            this.app.appendChild(this.perfil);


            //Container1 
            this.container1 = document.createElement("div");
            //Setar estilo da div
            this.container1.style.textAlign = "center";
            this.container1.style.height = "200px";
            this.container1.style.lineHeight = "360px";
            document.body.appendChild(this.container1);
       

            //Imagem FakeGoogle adicionado ao Container1
            this.googleImg = document.createElement("img");
            this.googleImg.src = 'imagens/google.jpg';
            this.container1.appendChild(this.googleImg);

            //DIV da barraPesquisa
            this.barraPesquisaDiv = document.createElement("div");
            //Setar estilo da div
            this.barraPesquisaDiv.style.textAlign="center";
            this.barraPesquisaDiv.style.justifyContent="center";
            this.barraPesquisaDiv.style.height="50px";
            this.barraPesquisaDiv.style.display="flex";
            this.barraPesquisaDiv.style.flexDirection="colum";
            this.barraPesquisaDiv.style.alignItems="center";
            document.body.appendChild(this.barraPesquisaDiv);
            //barraPesquisa
            this.barraPesquisa = document.createElement("input");
            //console.log(this.barraPesquisa.style) Remover
            this.barraPesquisa.style.backgroundImage="url('imagens/lupa.png')";
            this.barraPesquisa.style.backgroundRepeat="no-repeat"; 
            this.barraPesquisa.style.backgroundSize="25px 25px";
            this.barraPesquisa.style.paddingLeft="30px";
           
            this.barraPesquisa.style.height="30px";
            this.barraPesquisa.style.width="40%";
            this.barraPesquisa.style.border="1px solid #d0d0d0";
            this.barraPesquisa.style.borderRadius="100px";
            this.barraPesquisa.style.outline="0";
            this.barraPesquisa.style.boxShadow="0 0 0 0 rgba(136, 136, 136, 0)";
            this.barraPesquisa.style.fontSize="small";
            this.barraPesquisa.style.transition= "box-shadow .3s";
            this.barraPesquisaDiv.appendChild(this.barraPesquisa);
    
            //aposBarraPesquisa1 - Google Search and I'm Feeling Lucky
            this.aposBarraPesquisa1 = document.createElement("div");
            //Setar estilo da div
            this.aposBarraPesquisa1.style.textAlign="center";
            this.aposBarraPesquisa1.style.height="50px";
            this.aposBarraPesquisa1.style.lineHeight="50px";
            this.aposBarraPesquisa1.style.fontFamily= "arial";
            //Adicionando conteudo Google Search
            this.googleSearch = document.createElement("button");
            this.googleSearch.style.height="36px";
            this.googleSearch.style.border= "1px solid #f2f2f2";
            this.googleSearch.style.borderRadius= "4px";
            this.conteudoNovo3 = document.createTextNode("Google Search");
            this.aposBarraPesquisa1.appendChild(this.googleSearch);
            this.googleSearch.appendChild(this.conteudoNovo3);
            document.body.appendChild(this.aposBarraPesquisa1);
            //Função mouseOver e mouseOut
            this.googleSearch.onmouseover = function () {
                console.log(this);//Remover
                this.style.borderColor = "gray";
            };

            this.googleSearch.onmouseout = function () {
                console.log(this);//Remover
                this.style.borderColor = "white";
            };
            this.app.appendChild(this.perfil);

            //Adicionando conteudo I'm Feeling Lucky
            this.feelingLucky = document.createElement("button");
            this.feelingLucky.style.height="36px";
            this.feelingLucky.style.border= "1px solid #f2f2f2";
            this.feelingLucky.style.borderRadius= "4px";
            this.feelingLucky.style.marginLeft="10px";
            this.conteudoNovo4 = document.createTextNode("I'm Feeling Lucky");
            this.aposBarraPesquisa1.appendChild(this.feelingLucky);
            this.feelingLucky.appendChild(this.conteudoNovo4);
            document.body.appendChild(this.aposBarraPesquisa1);
            //Função mouseOver e mouseOut
            this.feelingLucky.onmouseover = function () {
                console.log(this);//Remover
                this.style.borderColor = "gray";
            };

            this.feelingLucky.onmouseout = function () {
                console.log(this);//Remover
                this.style.borderColor = "white";
            };
            this.app.appendChild(this.perfil);

            
            //aposBarraPesquisa2
            this.aposBarraPesquisa2 = document.createElement("div");
            //Setar estilo da div
            this.aposBarraPesquisa2.style.lineHeight = "50px";
            this.aposBarraPesquisa2.style.textAlign = "center";
            this.aposBarraPesquisa2.style.height = "50px";
            this.aposBarraPesquisa2.style.fontFamily = "arial";
            this.aposBarraPesquisa2.style.fontSize = "small";
            document.body.appendChild(this.aposBarraPesquisa2);
            //Adicionando conteudo a aposBarraPesquisa2
            this.conteudoNovo4 = document.createTextNode("Google offered in:");
            this.aposBarraPesquisa2.appendChild(this.conteudoNovo4);
            //Criando link Portugues (Brasil)
            this.portuguesLink = document.createElement("a");
            this.portuguesLink.setAttribute("href", "");
            this.portuguesLink.style.color = "#1a0dab";
            this.portuguesLink.style.marginLeft = "5px";
            this.portuguesLink.textContent = "Português (Brasil)";
            //Função mouseOver e mouseOut
            this.portuguesLink.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.portuguesLink.onmouseout = function () {
                this.style.textDecoration = "none";
            };
            this.aposBarraPesquisa2.appendChild(this.portuguesLink);


            //Roda Pé Brazil
            this.Brazil = document.createElement("div");
            //Setar estilo da div
            this.Brazil.style.fontFamily = "arial";
            this.Brazil.style.fontSize = "small";
            this.Brazil.style.color = "rgba(0,0,0,.54)";
            this.Brazil.style.textAlign = "left";
            this.Brazil.style.height = "150px";
            this.Brazil.style.lineHeight = "325px";
            this.Brazil.style.marginLeft = "30px";
            document.body.appendChild(this.Brazil);
            //Adicionando conteudo a Roda Pé Brazil
            this.conteudoNovo5 = document.createTextNode("Brazil");
            this.Brazil.appendChild(this.conteudoNovo5);

            //Roda Pé Final Esquerda
            this.rodaPeFinal = document.createElement("div");
            //Setar estilo da div
            this.rodaPeFinal.style.fontFamily = "arial";
            this.rodaPeFinal.style.fontSize = "small";
            this.rodaPeFinal.style.textAlign = "left";//
            this.rodaPeFinal.style.height = "60px";
            this.rodaPeFinal.style.lineHeight = "90px";
            this.rodaPeFinal.style.float = "left";
            this.rodaPeFinal.style.width = "70%";
            //Adicionando conteudo a rodaPeFinal
            document.body.appendChild(this.rodaPeFinal);

            //Criando link Advertising  
            this.Advertising = document.createElement("a");
            this.Advertising.setAttribute("href", "");
            this.Advertising.textDecoration = "none";
            this.Advertising.style.color = "rgba(0,0,0,.54)";
            this.Advertising.textContent = "Advertising";
            this.Advertising.style.marginLeft = "30px";
            //Função mouseOver e mouseOut
            this.Advertising.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.Advertising.onmouseout = function () {
                this.style.textDecoration = "none";
            };
            this.rodaPeFinal.appendChild(this.Advertising);

            //Criando link Business
            this.Business = document.createElement("a");
            this.Business.setAttribute("href", "");
            this.Business.textDecoration = "none";
            this.Business.style.color = "rgba(0,0,0,.54)";
            this.Business.textContent = "Business";
            this.Business.style.marginLeft = "30px";
            //Função mouseOver e mouseOut
            this.Business.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.Business.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinal.appendChild(this.Business);
            //Criando link About
            this.About = document.createElement("a");
            this.About.setAttribute("href", "");
            this.About.textDecoration = "none";
            this.About.style.color = "rgba(0,0,0,.54)";
            this.About.textContent = "About";
            this.About.style.marginLeft = "30px";
            //Função mouseOver e mouseOut
            this.About.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.About.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinal.appendChild(this.About);

            //Criando link How Search works
            this.HSW = document.createElement("a");
            this.HSW.setAttribute("href", "");
            this.HSW.textDecoration = "none";
            this.HSW.style.color = "rgba(0,0,0,.54)";
            this.HSW.textContent = "How Search works";
            this.HSW.style.marginLeft = "30px";
            //Função mouseOver e mouseOut
            this.HSW.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.HSW.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinal.appendChild(this.HSW);

            //Roda Pé Final Direita
            this.rodaPeFinalDireita = document.createElement("div");
            //Setar estilo da div
            this.rodaPeFinalDireita.style.fontFamily = "arial";
            this.rodaPeFinalDireita.style.fontSize = "small";
            this.rodaPeFinalDireita.style.textAlign = "right";//
            this.rodaPeFinalDireita.style.height = "60px";
            this.rodaPeFinalDireita.style.lineHeight = "90px";
            document.body.appendChild(this.rodaPeFinalDireita);
            this.rodaPeFinalDireita.style.float = "right";
            this.rodaPeFinalDireita.style.width = "30%";

            //Criando link Privacy
            this.privacy = document.createElement("a");
            this.privacy.setAttribute("href", "");
            this.privacy.textDecoration = "none";
            this.privacy.style.color = "rgba(0,0,0,.54)";
            this.privacy.textContent = "Privacy";
            this.privacy.style.marginRight = "30px";
            //Função mouseOver e mouseOut
            this.privacy.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.privacy.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinalDireita.appendChild(this.privacy);

            //Criando link Terms
            this.terms = document.createElement("a");
            this.terms.setAttribute("href", "");
            this.terms.textDecoration = "none";
            this.terms.style.color = "rgba(0,0,0,.54)";
            this.terms.textContent = "Terms";
            this.terms.style.marginRight = "30px";
            //Função mouseOver e mouseOut
            this.terms.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.terms.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinalDireita.appendChild(this.terms);

            //Criando link Settings
            this.settings = document.createElement("a");
            this.settings.setAttribute("href", "");
            this.settings.textDecoration = "none";
            this.settings.style.color = "rgba(0,0,0,.54)";
            this.settings.textContent = "Settings";
            this.settings.style.marginRight = "30px";
            //Função mouseOver e mouseOut
            this.settings.onmouseover = function () {
                console.log(this);//Remover
                this.style.textDecoration = "underline";
            };

            this.settings.onmouseout = function () {
                console.log(this);//Remover
                this.style.textDecoration = "none";
            };
            this.rodaPeFinalDireita.appendChild(this.settings);

        },
    },
};

App.init();

