$(document).ready(function () {

    $('#gastos').click(function () {
        var urlLancamentos = "./gastos";
        $.ajax(
        {
                type: 'GET',
                url: urlLancamentos, 
                dataType: 'json', 

                success: function (data)
                {
                    var somaTotal = 0;
                    $("#tableContent").empty();
                    $("#tableContent").show();
                    $("#gastos").hide();
                    $("#despesas").hide();
                    $("#voltar").show();
                    $("#devidoPara").hide();
                    $("#adicionarGasto").show();
                    $("#tabelaValores").show();
                    $("#valorTotal").show();
                    $("#valorTotalGastos").show();
                    $("#valorTotalDespesas").hide();
                    data.forEach(item => {
                        var linha = "<tr><td colspan=\"3\"><input disabled='true' class='"+ item.id + "' value='" + item.nome + "'</td><td colspan=\"4\"> <input disabled='true' class='"+ item.id + "' value='"  + item.descricao + "'</td><td><input disabled='true' class='"+ item.id + "' value='" + item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "'</td><td><a class='alterarGasto' href='#' idValor ='" + item.id + "'>  Alterar</a> | <a class='excluirGasto' href='#' idValor ='" + item.id + "'>Excluir</a></td></tr>";
                        somaTotal += item.valor;
                        $("#tableContent").append(linha);
                    });
                    $("#valorTotal").append("<p id=\"total\">" + somaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</p>")
                    setarEventosGasto();
                }
        });
    })

    $('#despesas').click(function () {
        var urlLancamentos = "./despesas";
        $.ajax(
        {
                type: 'GET',
                url: urlLancamentos, 
                dataType: 'json', 

                success: function (data)
                {
                    var somaTotal = 0;
                    $("#tableContent").empty();
                    $("#tableContent").show();
                    $("#gastos").hide();
                    $("#despesas").hide();
                    $("#voltar").show();
                    $("#devidoPara").show();
                    $("#adicionarDespesa").show();
                    $("#tabelaValores").show();
                    $("#valorTotal").show();
                    $("#valorTotalGastos").hide();
                    $("#valorTotalDespesas").show();
                    data.forEach(item => {
                        var linha = "<tr><td colspan=\"3\"><input disabled='true' idDespesa='"+ item.id + "' value='"  + item.nome + "'</td><td colspan=\"2\"><input disabled='true' idDespesa='"+ item.id + "' value='"  +  item.devidoPara + "'</td><td colspan=\"4\"><input disabled='true' idDespesa='"+ item.id + "' value='"  + item.descricao + "'</td><td><input disabled='true' idDespesa='"+ item.id + "' value='"  +  item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "'</td><td><a class='alterarDespesa' href='#' idValor ='" + item.id + "'>  Alterar</a> | <a class='excluirDespesa' href='#' idValor ='" + item.id + "'>Excluir</a></td></tr>";
                        $("#tableContent").append(linha);
                        somaTotal += item.valor;
                    });
                    $("#valorTotal").append("<p id=\"total\">" + somaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</p>")
                    setarEventosDespesa();
                }
        });
    })
    
    $('#adicionarGasto').click(function () {
        location.href = "adicionarGasto.html";
    })

    $('#adicionarDespesa').click(function () {
        location.href = "adicionarDespesa.html";
    })

    function alterarGastoEvent(id){
        localStorage.setItem("id", id);
        location.href = "alterarGasto.html";
    }

    function alterarDespesaEvent(id){
        localStorage.setItem("id", id);
        location.href = "alterarDespesa.html";
    }

    function deletarGastoEvent(id){
        var urlLancamenos = "./gastos"; 

        $.ajax(
            {
                type: 'DELETE',
                url: urlLancamenos,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: id, 
                success: function (data)  
                {
                    window.location.href = "index.html";
                },
                error: function(){
                    location.href = "index.html";
                }            
            });
    }

    function deletarDespesaEvent(id){
        var urlLancamenos = "./despesas"; 

        $.ajax(
            {
                type: 'DELETE',
                url: urlLancamenos,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: id, 
                success: function (data)  
                {
                    window.location.href = "index.html";
                },
                error: function(){
                    location.href = "index.html";
                }            
            });
    }

    function setarEventosGasto(){
        $('.alterarGasto').click(function () {
            let id = $(this).attr("idvalor");
            alterarGastoEvent(id);
        });
        $('.excluirGasto').click(function () {
            let id = $(this).attr("idvalor");
            deletarGastoEvent(id);
        });
    };

    function setarEventosDespesa(){
        $('.alterarDespesa').click(function () {
            let id = $(this).attr("idvalor");
            alterarDespesaEvent(id);
        });
        $('.excluirDespesa').click(function () {
            let id = $(this).attr("idvalor");
            deletarDespesaEvent(id);
        });
    };


    $('.excluirDespesa').click(function () {
        var despesa = {
            'nome':  $('input[name=nome]').val(),
            'devidoPara': $('input[name=devidoPara]').val(),
            'descricao': $('input[name=descricao]').val(),
            'data': $('input[name=data]').val(),
            'valor': $('input[name=valor]').val(),
        };
        
        var jsonString = JSON.stringify(id);

        var urlLancamenos = "./despesas"; 

        $.ajax(
            {
                type: 'DELETE',
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
    })

    $('#voltar').click(function () {
        
        $("#tableContent").hide();
        $("#gastos").show();
        $("#despesas").show();
        $("#voltar").hide();
        $("#adicionarDespesa").hide();
        $("#adicionarGasto").hide();
        $("#tabelaValores").hide();
        $("#valorTotal").hide();
    })

    $('#SubmitAdicionarGasto').click(function () {
        location.href = "index.html";
        var urlLancamentos = "./gastos";

        $.ajax(
        {
                type: 'GET',
                url: urlLancamentos, 
                dataType: 'json', 

                success: function (data)
                {
                    var somaTotal = 0;
                    $("#tableContent").empty();
                    $("#gastos").hide();
                    $("#despesas").hide();
                    $("#voltar").show();
                    $("#dataPagamento").hide();
                    $("#devidoPara").hide();
                    $("#adicionarGasto").show();
                    $("#tabelaValores").show();
                    $("#valorTotal").show();
                    $("#valorTotalGastos").show();
                    $("#valorTotalDespesas").hide();
                    data.forEach(item => {
                        var linha = "<tr><td colspan=\"3\">" + item.nome + "</td><td colspan=\"4\">" + item.descricao + "</td><td>" + item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); + "</td></tr>";
                        somaTotal += item.valor;
                        $("#tableContent").append(linha);
                    });
                    $("#valorTotal").append("<p id=\"total\">" + somaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</p>")
                }
        });
    })
}); 