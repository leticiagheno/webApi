package softle.raiz.repository;

import java.sql.SQLException;
import java.util.List;

import softle.raiz.models.Gastos;

public interface IGastosRepository
{
    public Gastos Insert(Gastos gasto) throws Exception;

    public Gastos Update(Gastos gasto) throws Exception;

    public Gastos Remove(Gastos gasto) throws Exception;

    public List<Gastos> GetAll() throws SQLException, Exception;

	public Gastos GetById(int id) throws Exception;
}