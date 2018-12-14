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
                    $("#dataPagamento").show();
                    $("#devidoPara").show();
                    $("#adicionarDespesa").show();
                    $("#tabelaValores").show();
                    $("#valorTotal").show();
                    $("#valorTotalGastos").hide();
                    $("#valorTotalDespesas").show();
                    data.forEach(item => {
                        var linha = "<tr><td colspan=\"3\">" + item.nome + "</td><td colspan=\"2\">" + item.devidoPara + "</td><td colspan=\"4\">" + item.descricao + "</td><td>" + item.dataPagamento + "</td><td>" + item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); + "</td></tr>";
                        $("#tableContent").append(linha);
                        somaTotal += item.valor;
                    });
                    $("#valorTotal").append("<p id=\"total\">" + somaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</p>")
                }
        });
    })
    
    $('#adicionarGasto').click(function () {
        location.href = "adicionarGasto.html";
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