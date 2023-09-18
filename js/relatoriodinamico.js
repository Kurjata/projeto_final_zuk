const result = document.querySelector('.result')

$(function(){

    $(".botao-cadastrar").on("click", function(){
        fetch("load.php").then(data => data.json())
        .then(data => {
            data.forEach(element => {
                console.log(element.nome)
                const bancoDinamico = `
                <ul>
                    <li>Nome: ${element.nome}</li>
                    <li>Descricao: ${element.descricao}</li>
                    <li>Tipo: ${element.tipo}</li>
                </ul>
                ` 
                result.innerHTML += bancoDinamico
            });
                                       
        });
    });
});
