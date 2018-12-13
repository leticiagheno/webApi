$(document).ready(function () {

    $('#btnBuscar').click(function () {
        var urlLancamentos = "./gastos"; //pode ser o endereço relativo

        $.ajax(
        {
                type: 'GET', // metodo usado
                url: urlLancamentos, // url 
                dataType: 'json', // tipo do retorno

                success: function (data)  // função executada ao receber o conteúdo da API, sendo que 'data' é o conteúdo de retorno
                {
                    //limpa tabela
                    $("#tableContent").empty();

                    //cria linhas na tabela
                    data.forEach(item => {
                        var linha = "<tr><td>" + item.descricao + "</td><td>" + item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); + "</td></tr>";
                        $("#tableContent").append(linha);
                    });
                }
        });
    })

    $dialog.dialog({
        autoOpen: false,
        modal: true
    });

    $('#popUpButton').click(function () {
        $dialog.dialog('open');
    });
});