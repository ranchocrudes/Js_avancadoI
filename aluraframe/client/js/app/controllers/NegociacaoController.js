class NegociacaoController{

    constructor(){

            let $ = document.querySelector.bind(document);

         this._inputQuantidade = $('#quantidade');
         this._inputData = $('#data');
         this._inputValor = $('#valor');
         this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){
        let form = document.querySelector(".form");

        form.reset();
        this._inputData.focus();

    }

}