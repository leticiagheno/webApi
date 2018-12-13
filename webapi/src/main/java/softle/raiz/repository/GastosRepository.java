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
import softle.raiz.models.Gastos;

@Service
public class GastosRepository implements IGastosRepository
{
    public Gastos Insert(Gastos gasto) throws Exception 
    {
        Connection conn = Conexao.abrir();

        String sqlString  = "SELECT (max(id)+1) as next_id FROM dbmoney.Gastos;";
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
        sql.append("INSERT INTO Gastos (id, nome, descricao, valor) VALUES (?,?,?,?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, nextId);
        comando.setString(2, gasto.getNome());
        comando.setString(3, gasto.getDescricao());
        comando.setDouble(4, gasto.getValor());

        int linhasAfetadas  = comando.executeUpdate();

        comando.close();
        conn.close();

        return GetById(nextId);
    }

    public Gastos Update(Gastos gasto) throws Exception
    {   
        Connection conn = Conexao.abrir();
        
        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE Gastos SET ");
        sql.append("nome = ?, ");
        sql.append("descricao = ?, ");
        sql.append("valor = ? ");
        sql.append("WHERE (id = ?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setString(1, gasto.getNome());
        comando.setString(2, gasto.getDescricao());
        comando.setDouble(3, gasto.getValor());
        comando.setInt(4, gasto.getId());

        int linhasAfetadas  = comando.executeUpdate();

        comando.close();
        conn.close();

        return GetById(gasto.getId());
    }

    public Gastos Remove(Gastos gasto) throws Exception
    {
        Connection conn = Conexao.abrir();
        
        StringBuilder sql = new StringBuilder();
        sql.append("DELETE FROM Gastos ");
        sql.append("WHERE (id = ?);");

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, gasto.getId());

        int linhasAfetadas  = comando.executeUpdate();

        comando.close();
        conn.close();

        return gasto;
    }

    public List<Gastos> GetAll() throws Exception 
    {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT id, nome, descricao, valor ");
        sql.append("FROM Gastos ");

        Connection conn = Conexao.abrir();

        PreparedStatement comando = conn.prepareStatement(sql.toString());

        ResultSet resultado = comando.executeQuery();

        List<Gastos> lista = ConverterResultado(resultado);

        resultado.close();
        comando.close();
        conn.close();

        return lista;
    }

    public Gastos GetById(int id) throws Exception 
    {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT id, nome, descricao, valor ");
        sql.append("FROM Gastos ");
        sql.append("WHERE id = ?;");

        Connection conn = Conexao.abrir();

        PreparedStatement comando = conn.prepareStatement(sql.toString());
        comando.setInt(1, id);

        ResultSet resultado = comando.executeQuery();

        List<Gastos> lista = ConverterResultado(resultado);

        resultado.close();
        comando.close();
        conn.close();

        return lista.get(0);
    }

    private List<Gastos> ConverterResultado(ResultSet resultado) throws SQLException 
    {
        List<Gastos> lista = new ArrayList<Gastos>();

        while (resultado.next()) 
        {
            Gastos gasto = new Gastos();
            gasto.setId(resultado.getInt("id"));
            gasto.setNome(resultado.getString("nome"));
            gasto.setDescricao(resultado.getString("descricao"));
            gasto.setValor(resultado.getFloat("valor"));

            lista.add(gasto);
        }

        return lista;
    }
}