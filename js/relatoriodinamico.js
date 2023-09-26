const result = document.querySelector('.result');

$(function() {

    $(".botao-cadastrar").on("click", function() {
        
        // Inicialize a tabela com os cabeçalhos quando o botão é clicado
        result.innerHTML = `
            <table class="dynamic-table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;

        const tbody = result.querySelector('.dynamic-table tbody');

        // Faça a requisição para buscar os dados
        fetch("load.php")
            .then(data => data.json())
            .then(data => {
                
                // Adicione cada linha à tabela
                data.forEach(element => {
                    const row = `
                        <tr>
                            <td>${element.nome}</td>
                            <td>${element.tipo}</td>
                            <td>${element.descricao}</td>
                        </tr>
                    `;
                    tbody.innerHTML += row;
                });
            });
    });
});

