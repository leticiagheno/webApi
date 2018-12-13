package softle.raiz.models;

public class Gastos 
{
    private int id;
    private String nome;
    private String descricao;
    private double valor;
  
    public void setId(int id) {
        this.id = id;
    }

    public int getId(){
        return id;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    public void setValor(double valor){
        this.valor = valor;
    }

    public double getValor(){
        return valor;
    }
    
}