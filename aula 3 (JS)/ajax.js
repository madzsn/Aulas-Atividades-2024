function manipularRespostaAJAX(dados) {
    document.getElementById('dados-ajax').innerHTML = JSON.stringify(dados);
}

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let dados = JSON.parse(this.responseText);
        manipularRespostaAJAX(dados);
    }
};

ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
ajax.send();

fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(response => response.json())
.then(data => {
    document.getElementById('dados-fetch').innerHTML = JSON.stringify(data);
})

.catch(error => console.error('Erro:', error));