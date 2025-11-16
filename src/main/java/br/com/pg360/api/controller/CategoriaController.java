package br.com.pg360.api.controller;

import br.com.pg360.api.model.Categoria;
import br.com.pg360.api.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    //create
    @PostMapping
    public ResponseEntity<Categoria> criar(@RequestBody Categoria categoria){
        return ResponseEntity.status(201).body(repository.save(categoria));
    }

    //lista tudo
    @GetMapping
    public List<Categoria> listarTodas(){
        return repository.findAll();
    }

    //lista id
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Long id){
        Optional<Categoria> categoria = repository.findById(id);
        return categoria.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //atualizar
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> atualizar(@PathVariable Long id, @RequestBody Categoria nova){
        return repository.findById(id)
                .map(c ->{
                    c.setNmCategoria(nova.getNmCategoria());
                    c.setDsCategoria(nova.getDsCategoria());
                    return ResponseEntity.ok(repository.save(c));
                })
                .orElseGet(()-> ResponseEntity.notFound().build());
    }

    //delete

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
