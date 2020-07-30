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
        this.app = document.createElement("div");
        this.app.style.backgroundColor = "red"; //remover
        this.app.style.textAlign="right";
        document.body.appendChild(this.app);
        var conteudoNovo = document.createTextNode("Cabeçalho"); 
        this.app.appendChild(conteudoNovo); 

        this.app = document.createElement("div");
        this.app.style.backgroundColor = "blue";
        this.app.style.textAlign="center";
        document.body.appendChild(this.app);
        var google = document.createElement("img");
        google.src = 'imagens/google.jpg';
        this.app.appendChild(google);

        this.app = document.createElement("div"); 
        this.app.style.backgroundColor = "yellow";
        this.app.style.textAlign="center";
        document.body.appendChild(this.app);
        var barraPesquisa = document.createTextNode("barraPesquisa"); //Remover
        this.app.appendChild(barraPesquisa); 

        this.app = document.createElement("div"); 
        this.app.style.backgroundColor = "green";
        this.app.style.textAlign="center";
        document.body.appendChild(this.app);
        var conteudoNovo1 = document.createTextNode("Rodapé1"); 
        this.app.appendChild(conteudoNovo1); 

        this.app = document.createElement("div"); 
        this.app.style.backgroundColor = "light-green";
        this.app.style.textAlign="center";
        document.body.appendChild(this.app);
        var conteudoNovo2 = document.createTextNode("Rodapé2"); 
        this.app.appendChild(conteudoNovo2); 

        this.app = document.createElement("div"); 
        this.app.style.backgroundColor = "gray";
        this.app.style.textAlign="left";
        document.body.appendChild(this.app);
        var conteudoNovo3 = document.createTextNode("Rodapé2"); 
        this.app.appendChild(conteudoNovo3); 

        this.app = document.createElement("div"); 
        this.app.style.backgroundColor = "pink";
        this.app.style.textAlign="left";
        document.body.appendChild(this.app);
        var conteudoNovo4 = document.createTextNode("Rodapé2"); 
        this.app.appendChild(conteudoNovo4); 
    
      },
    },
  };
  
  App.init();

