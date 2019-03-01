$(document).ready(function () {

    $('#SubmitAlterarDespesa').click(function () {
        var id = localStorage.getItem("id");
        var despesa = {
            'id': id,
            'nome':  $('input[name=nome]').val(),
            'devidoPara': $('input[name=devidoPara]').val(),
            'descricao': $('input[name=descricao]').val(),
            'valor': $('input[name=valor]').val(),
        };
        
        var jsonString = JSON.stringify(despesa);

        var urlLancamenos = "./despesas"; 

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