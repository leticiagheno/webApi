$(document).ready(function () {

    $('#SubmitAlterarGastos').click(function () {
        var id = localStorage.getItem("id");
        var gasto = {
            'id': id,
            'nome':  $('input[name=nome]').val(),
            'descricao': $('input[name=descricao]').val(),
            'valor': $('input[name=valor]').val(),
        };
        
        var jsonString = JSON.stringify(gasto);

        var urlLancamenos = "./gastos"; 

        $.ajax(
            {
                type: 'PUT',
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