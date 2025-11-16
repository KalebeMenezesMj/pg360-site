package br.com.pg360.api.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "evento")
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cdEvento;

    @Column(nullable = false)
    private String nmEvento;

    private String dsEvento;
    private LocalDate dtInicioEvento;
    private LocalDate dtFimEvento;

    @ManyToOne
    @JoinColumn(name = "cd_local")
    private Local local;

    @ManyToOne
    @JoinColumn(name = "cd_categoria")
    private Categoria categoria;

    public Evento() {
    }

    public Evento(Long cdEvento, String nmEvento, String dsEvento, LocalDate dtInicioEvento, LocalDate dtFimEvento, Local local, Categoria categoria) {
        this.cdEvento = cdEvento;
        this.nmEvento = nmEvento;
        this.dsEvento = dsEvento;
        this.dtInicioEvento = dtInicioEvento;
        this.dtFimEvento = dtFimEvento;
        this.local = local;
        this.categoria = categoria;
    }

    public Long getCdEvento() {
        return cdEvento;
    }

    public void setCdEvento(Long cdEvento) {
        this.cdEvento = cdEvento;
    }

    public String getNmEvento() {
        return nmEvento;
    }

    public void setNmEvento(String nmEvento) {
        this.nmEvento = nmEvento;
    }

    public String getDsEvento() {
        return dsEvento;
    }

    public void setDsEvento(String dsEvento) {
        this.dsEvento = dsEvento;
    }

    public LocalDate getDtInicioEvento() {
        return dtInicioEvento;
    }

    public void setDtInicioEvento(LocalDate dtInicioEvento) {
        this.dtInicioEvento = dtInicioEvento;
    }

    public LocalDate getDtFimEvento() {
        return dtFimEvento;
    }

    public void setDtFimEvento(LocalDate dtFimEvento) {
        this.dtFimEvento = dtFimEvento;
    }

    public Local getLocal() {
        return local;
    }

    public void setLocal(Local local) {
        this.local = local;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return "Evento{" +
                "cdEvento=" + cdEvento +
                ", nmEvento='" + nmEvento + '\'' +
                ", dsEvento='" + dsEvento + '\'' +
                ", dtInicioEvento=" + dtInicioEvento +
                ", dtFimEvento=" + dtFimEvento +
                ", local=" + local +
                ", categoria=" + categoria +
                '}';
    }
}
