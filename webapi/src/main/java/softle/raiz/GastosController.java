package softle.raiz;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import softle.raiz.models.Gastos;
import softle.raiz.repository.IGastosRepository;

@RestController
@RequestMapping("/gastos")
public class GastosController 
{
    @Autowired 
    private IGastosRepository repository;

    @RequestMapping("")
    List<Gastos> GetAll() throws SQLException, Exception{
        return repository.GetAll();
    }

    @RequestMapping("/{id}")
    Gastos GetGastos(@PathVariable int id) throws Exception {
        return repository.GetById(id);
    }

    @RequestMapping(value = "", method= RequestMethod.POST)
    Gastos AdicionarGasto(@RequestBody Gastos gasto) throws Exception {
        return repository.Insert(gasto);
    }

    @RequestMapping(value = "", method= RequestMethod.PUT)
    Gastos AtualizarGasto(@RequestBody Gastos gasto) throws Exception {
        return repository.Update(gasto);
    }

}
