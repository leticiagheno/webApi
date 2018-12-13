package softle.raiz;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import softle.*;
import softle.raiz.models.Despesas;
import softle.raiz.repository.IDespesasRepository;

@RestController
@RequestMapping("/despesas")
public class DespesasController 
{
    @Autowired 
    private IDespesasRepository repository;

    @RequestMapping("")
    List<Despesas> GetAll() throws SQLException, Exception{
        return repository.GetAll();
    }

    @RequestMapping("/{id}")
    Despesas GetDespesa(@PathVariable int id) throws Exception {
        return repository.GetById(id);
    }

    @RequestMapping(value = "", method= RequestMethod.POST)
    Despesas AdicionarDespesa(@RequestBody Despesas despesa) throws Exception {
        return repository.Insert(despesa);
    }

    @RequestMapping(value = "", method= RequestMethod.PUT)
    Despesas AtualizarDespesa(@RequestBody Despesas despesa) throws Exception {
        return repository.Update(despesa);
    }

}
