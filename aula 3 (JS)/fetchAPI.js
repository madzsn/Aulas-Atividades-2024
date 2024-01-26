fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(Response => responce.json())
.then(data => console.log(data))
.catch(error => console.error('Erro: ', error));