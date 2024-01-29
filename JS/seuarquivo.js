document.addEventListener("DOMContentLoaded", function () {

    let meuBotao = document.getElementById("meuBotao");
    let meuParagrafo = document.getElementById("meuParagrafo");

    meuBotao.addEventListener("click", function() {
        meuParagrafo.textContent = "O botão foi criado!";

    });
});