package br.com.pg360.api.controller;

import br.com.pg360.api.model.Usuario;
import br.com.pg360.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public ResponseEntity<Usuario> criar(@RequestBody Usuario usuario){
        return ResponseEntity.status(201).body(repository.save(usuario));
    }

    @GetMapping
    public List<Usuario> listarTodos(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable long id){
        Optional<Usuario> usuario = repository.findById(id);
        return usuario.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario novo){
        return repository.findById(id)
                .map(u ->{
                    u.setNmUsuario(novo.getNmUsuario());
                    u.setEmailUsuario(novo.getEmailUsuario());
                    u.setSenhaUsuario(novo.getSenhaUsuario());
                    u.setDsUsuario((novo.getDsUsuario()));
                    return ResponseEntity.ok(repository.save(u));
                })
                .orElseGet(()-> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        if (repository.existsById(id)){
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
