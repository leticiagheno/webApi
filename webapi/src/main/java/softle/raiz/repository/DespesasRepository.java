package softle.raiz.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import softle.raiz.Conexao.*;
import softle.raiz.models.Despesas;

@Service
public class DespesasRepository implements IDespesasRepository
{
    @Override
    public Despesas Insert(Despesas despesa) throws Exception 
    {
        Connection conn = Conexao.abrir();

        String sqlString  = "SELECT (max(id)+1) as next_id FROM dbmoney.Despesas;";
        PreparedStatement comandoNextId = conn.prepareStatement(sqlString);
        ResultSet nextIdResult = comandoNextId.executeQuery();
        int nextId = 1;
        while (nextIdResult.next()) 
        {
            nextId = nextIdResult.getInt("next_id");
        }
        comandoNextId.close();
        nextIdResult.close();

        StringBuilder sql = new StringBuilder();
        sql.append("INSERT INTO Despesas (id, nome, devidoPara, descricao, valor) VALUES (?,?,?,?,?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, nextId);
        comando.setString(2, despesa.getNome());
        comando.setString(3, despesa.getDevidoPara());
        comando.setString(4, despesa.getDescricao());
        comando.setDouble(5, despesa.getValor());

        int linhasAfetadas  = comando.executeUpdate();

        comando.close();
        conn.close();

        return GetById(nextId);
    }

    public Despesas Update(Despesas despesa) throws Exception
    {   
        Connection conn = Conexao.abrir();
        
        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE Despesas SET ");
        sql.append("nome = ?, ");
        sql.append("devidoPara = ?, ");
        sql.append("descricao = ?, ");
        sql.append("valor = ? ");
        sql.append("WHERE (id = ?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setString(1, despesa.getNome());
        comando.setString(2, despesa.getDevidoPara());
        comando.setString(3, despesa.getDescricao());
        comando.setDouble(4, despesa.getValor());
        comando.setInt(5, despesa.getId());

        int linhasAfetadas  = comando.executeUpdate();

        comando.close();
        conn.close();

        return GetById(despesa.getId());
    }

    public int Remove(int id) throws Exception
    {
        Connection conn = Conexao.abrir();
        
        StringBuilder sql = new StringBuilder();
        sql.append("DELETE FROM Despesas ");
        sql.append("WHERE (id = ?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, id);

        int linhasAfetadas = comando.executeUpdate();

        comando.close();
        conn.close();

        return id;
    }

    public List<Despesas> GetAll() throws Exception 
    {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT id, nome, devidoPara, descricao, valor ");
        sql.append("FROM Despesas ");

        Connection conn = Conexao.abrir();

        PreparedStatement comando = conn.prepareStatement(sql.toString());

        ResultSet resultado = comando.executeQuery();

        List<Despesas> lista = ConverterResultado(resultado);

        resultado.close();
        comando.close();
        conn.close();

        return lista;
    }

    public Despesas GetById(int id) throws Exception 
    {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT id, nome, devidoPara, descricao, valor ");
        sql.append("FROM Despesas ");
        sql.append("WHERE id = ?;");

        Connection conn = Conexao.abrir();

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, id);

        ResultSet resultado = comando.executeQuery();

        List<Despesas> lista = ConverterResultado(resultado);

        resultado.close();
        comando.close();
        conn.close();

        return lista.get(0);
    }

    private List<Despesas> ConverterResultado(ResultSet resultado) throws SQLException 
    {
        List<Despesas> lista = new ArrayList<Despesas>();

        while (resultado.next()) 
        {
            Despesas despesa = new Despesas();
            despesa.setId(resultado.getInt("id"));
            despesa.setNome(resultado.getString("nome"));
            despesa.setDevidoPara(resultado.getString("devidoPara"));
            despesa.setDescricao(resultado.getString("descricao"));
            despesa.setValor(resultado.getFloat("valor"));

            lista.add(despesa);
        }

        return lista;
    }
}