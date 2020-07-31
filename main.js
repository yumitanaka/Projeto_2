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
            this.app.setAttribute("style", "text-align:right; height:40px; background: red");
            document.body.appendChild(this.app);

            //Cabeçalho
            this.conteudoNovo = document.createTextNode("Cabeçalho");
            this.app.appendChild(this.conteudoNovo);

            //Container1
            this.container1 = document.createElement("div");
            //Setar estilo da div
            this.container1.setAttribute("style", "text-align:center; height:200px; line-height: 360px;background: blue"); //Set div attributes
            document.body.appendChild(this.container1);

            //Imagem FakeGoogle adicionado ao Container1
            this.googleImg = document.createElement("img");
            this.googleImg.src = 'imagens/google.jpg';
            this.container1.appendChild(this.googleImg);

            //barraPesquisa
            this.barraPesquisa = document.createElement("div");
            //Setar estilo da div
            this.barraPesquisa.setAttribute("style", "text-align:center; height:50px; background: green");
            document.body.appendChild(this.barraPesquisa);
            //Adicionando conteudo a barraPesquisa
            this.conteudoNovo2 = document.createTextNode("barraPesquisa");
            this.barraPesquisa.appendChild(this.conteudoNovo2);

            //aposBarraPesquisa1
            this.aposBarraPesquisa1 = document.createElement("div");
            //Setar estilo da div
            this.aposBarraPesquisa1.setAttribute("style", "text-align:center; height:50px; background: pink");
            document.body.appendChild(this.aposBarraPesquisa1);
            //Adicionando conteudo a aposBarraPesquisa1
            this.conteudoNovo3 = document.createTextNode("aposBarraPesquisa1");
            this.aposBarraPesquisa1.appendChild(this.conteudoNovo3);

            //aposBarraPesquisa2
            this.aposBarraPesquisa2 = document.createElement("div");
            //Setar estilo da div
            this.aposBarraPesquisa2.setAttribute("style", "text-align:center; height:50px; background: gray");
            document.body.appendChild(this.aposBarraPesquisa2);
            //Adicionando conteudo a aposBarraPesquisa2
            this.conteudoNovo4 = document.createTextNode("aposBarraPesquisa2");
            this.aposBarraPesquisa2.appendChild(this.conteudoNovo4);

            //rodaPe1
            this.rodaPe1 = document.createElement("div");
            //Setar estilo da div
            this.rodaPe1.setAttribute("style", "text-align:left; height:150px; line-height: 240px;background: silver");
            document.body.appendChild(this.rodaPe1);
            //Adicionando conteudo a rodaPe1
            this.conteudoNovo5 = document.createTextNode("rodaPe1");
            this.rodaPe1.appendChild(this.conteudoNovo5);

            //rodaPe2
            this.rodaPe2 = document.createElement("div");
            //Setar estilo da div
            this.rodaPe2.setAttribute("style", "text-align:left; height:60px; line-height: 60px;background: purple");
            document.body.appendChild(this.rodaPe2);
            //Adicionando conteudo a rodaPe2
            this.conteudoNovo6 = document.createTextNode("rodaPe2");
            this.rodaPe2.appendChild(this.conteudoNovo6);
        },
    },
};

App.init();

