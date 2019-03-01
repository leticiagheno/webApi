package softle.raiz.models;

import java.util.Date;

public class Despesas 
{
    private int id;
    private String nome;
    private String devidoPara;
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

    public void setDevidoPara(String devidoPara){
        this.devidoPara = devidoPara;
    }

    public String getDevidoPara(){
        return devidoPara;
    }

    public void setValor(double valor){
        this.valor = valor;
    }

    public double getValor(){
        return valor;
    }
}