export default class Portamodelo{
    #numero
    #presente
    #selecionada
    #aberta
  constructor(numero,presente=false,selecionada=false,aberta){
 this.#presente=presente
   this.#aberta=aberta
   this.#selecionada=selecionada
   this.#numero=numero
    }
    get numero(){
     return this.#numero   
    }
    get presente(){
     return this.#presente   
    }
    get selecionada(){
    return this.#selecionada
    }
    get aberta(){
    return this.#aberta
    }
    desmarcar(){
      const selecionada=false
      return new Portamodelo(this.numero,this.presente,selecionada,this.aberta)
    }
  
    alterar(){
        const selecionada=!this.selecionada
        return new Portamodelo(this.numero,this.presente,selecionada,this.aberta)
    }
    abrir(){
      const abrir=true
      return new Portamodelo(this.numero,this.presente,this.selecionada,abrir)

    }
    }