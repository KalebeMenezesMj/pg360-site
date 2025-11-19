import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
import { Await } from 'react-router-dom';


const apiEventos = "http://localhost:8080/eventos"


function CardEvento({evento}){
    
    const { 
        nm_evento, 
        ds_evento, 
        dt_inicio_evento, 
        dt_fim_evento 
    } = evento;

    const dataInicio = new Date(dt_inicio_evento).toLocaleDateString('pt-BR');
    const dataFim = new Date(dt_fim_evento).toLocaleDateString('pt-BR');
    
    return (
        <div className="card-evento bg-white shadow-lg p-6 rounded-lg">
            
            <h3 className="text-xl font-bold text-blue-800">{nm_evento}</h3>
            
           
            <p className="text-gray-600 mt-2">{ds_evento}</p>
            
           
            <div className="mt-4 border-t pt-3">
                <p className="text-sm font-semibold">Início: {dataInicio}</p>
                <p className="text-sm font-semibold">Fim: {dataFim}</p>
            </div>
            
        </div>
    )
}

function ListarEvento(){

    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
        const fetchEventos = async () => {
            try {
                
                const response = await fetch(apiEventos);
                
                if (!response.ok) {
                    throw new Error(`Erro HTTP: Status ${response.status}`);
                }

                
                const data = await response.json(); 
                
                
                setEventos(data); 
                
            } catch (err) {
                console.error("Erro ao buscar eventos:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []); 

    if (loading) return <div>Carregando eventos...</div>;
    if (error) return <div>Erro ao carregar: {error}</div>;
        
    return (
        <div className="lista-de-cards">
            {eventos.map(evento => (
                <CardEvento key={evento.cd_evento} evento={evento} />
            ))}
        </div>
    );
}
export default ListarEvento