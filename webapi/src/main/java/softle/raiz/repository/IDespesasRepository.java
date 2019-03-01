package softle.raiz.repository;

import java.sql.SQLException;
import java.util.List;

import softle.raiz.models.Despesas;

public interface IDespesasRepository
{
    public Despesas Insert(Despesas despesa) throws Exception;

    public Despesas Update(Despesas despesa) throws Exception;

    public int Remove(int id) throws Exception;

    public List<Despesas> GetAll() throws SQLException, Exception;

	public Despesas GetById(int id) throws Exception;
}