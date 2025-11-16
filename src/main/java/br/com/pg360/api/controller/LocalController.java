package br.com.pg360.api.controller;

import br.com.pg360.api.model.Local;
import br.com.pg360.api.repository.LocalRepository;
import br.com.pg360.api.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/locais")
public class LocalController {

    @Autowired
    private LocalRepository localRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    // criar
    @PostMapping
    public ResponseEntity<Local> criar(@RequestBody Local local) {
        if (local.getCategoria() != null && local.getCategoria().getCdCategoria() != null) {
            categoriaRepository.findById(local.getCategoria().getCdCategoria())
                    .ifPresent(local::setCategoria);
        }
        return ResponseEntity.status(201).body(localRepository.save(local));
    }

    // listar tudo
    @GetMapping
    public List<Local> listarTodos() {
        return localRepository.findAll();
    }

    // listar id
    @GetMapping("/{id}")
    public ResponseEntity<Local> buscarPorId(@PathVariable Long id) {
        Optional<Local> local = localRepository.findById(id);
        return local.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // atualizar
    @PutMapping("/{id}")
    public ResponseEntity<Local> atualizar(@PathVariable Long id, @RequestBody Local novo) {
        return localRepository.findById(id)
                .map(l -> {
                    l.setNmLocal(novo.getNmLocal());
                    l.setDsLocal(novo.getDsLocal());
                    l.setEndereco(novo.getEndereco());
                    l.setLatitude(novo.getLatitude());
                    l.setLongitude(novo.getLongitude());
                    l.setHrFuncionamento(novo.getHrFuncionamento());
                    l.setCategoria(novo.getCategoria());
                    return ResponseEntity.ok(localRepository.save(l));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (localRepository.existsById(id)) {
            localRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
