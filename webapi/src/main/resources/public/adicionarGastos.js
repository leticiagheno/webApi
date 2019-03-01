$(document).ready(function () {

    $('#SubmitAdicionarGasto').click(function () {
        var gasto = {
            'nome':  $('input[name=nome]').val(),
            'descricao': $('input[name=descricao]').val(),
            'valor': $('input[name=valor]').val(),
        };
        
        var jsonString = JSON.stringify(gasto);

        var urlLancamenos = "./gastos"; 

        $.ajax(
            {
                type: 'POST',
                url: urlLancamenos,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: jsonString, 
                success: function (data)  
                {
                    window.location.href = "index.html";
                },
                error: function(){
                    location.href = "index.html";
                }            
            });
    });
});