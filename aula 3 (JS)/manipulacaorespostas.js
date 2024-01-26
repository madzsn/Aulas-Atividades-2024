fetch('https://api.exemplo.com/dados', {
    method: 'POST',


    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
        chave: 'valor', 
    }),
})

.then(response=> {
    if (response.ok) {
        throw new Error('erro na requisição');
    }
    return response.json(); //response.text para texto
})
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));