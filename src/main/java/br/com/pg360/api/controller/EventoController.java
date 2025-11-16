package br.com.pg360.api.controller;

import br.com.pg360.api.model.Evento;
import br.com.pg360.api.repository.EventoRepository;
import br.com.pg360.api.repository.LocalRepository;
import br.com.pg360.api.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private LocalRepository localRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    // criar
    @PostMapping
    public ResponseEntity<Evento> criar(@RequestBody Evento evento) {
        // Garante que as FKs existam
        if (evento.getLocal() != null && evento.getLocal().getCdLocal() != null) {
            localRepository.findById(evento.getLocal().getCdLocal())
                    .ifPresent(evento::setLocal);
        }

        if (evento.getCategoria() != null && evento.getCategoria().getCdCategoria() != null) {
            categoriaRepository.findById(evento.getCategoria().getCdCategoria())
                    .ifPresent(evento::setCategoria);
        }

        return ResponseEntity.status(201).body(eventoRepository.save(evento));
    }

    // lista tudo
    @GetMapping
    public List<Evento> listarTodos() {
        return eventoRepository.findAll();
    }

    // lista id
    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarPorId(@PathVariable Long id) {
        Optional<Evento> evento = eventoRepository.findById(id);
        return evento.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // atualizar
    @PutMapping("/{id}")
    public ResponseEntity<Evento> atualizar(@PathVariable Long id, @RequestBody Evento novo) {
        return eventoRepository.findById(id)
                .map(e -> {
                    e.setNmEvento(novo.getNmEvento());
                    e.setDsEvento(novo.getDsEvento());
                    e.setDtInicioEvento(novo.getDtInicioEvento());
                    e.setDtFimEvento(novo.getDtFimEvento());
                    e.setLocal(novo.getLocal());
                    e.setCategoria(novo.getCategoria());
                    return ResponseEntity.ok(eventoRepository.save(e));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (eventoRepository.existsById(id)) {
            eventoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
