import React from "react";

function DashboardHome({ onSelect }) {
  const grupos = [
    {
      titulo: "Eventos",
      botoes: [
        { chave: "eventos-create", label: "Cadastrar Evento" },
        { chave: "eventos-list", label: "Listar Eventos" },
        { chave: "eventos-edit", label: "Editar Evento" },
        { chave: "eventos-delete", label: "Excluir Evento" },
      ],
    },
    {
      titulo: "Locais",
      botoes: [
        { chave: "locais-create", label: "Cadastrar Local" },
        { chave: "locais-list", label: "Listar Locais" },
        { chave: "locais-edit", label: "Editar Local" },
        { chave: "locais-delete", label: "Excluir Local" },
      ],
    },
    {
      titulo: "Categorias",
      botoes: [
        { chave: "categorias-create", label: "Cadastrar Categoria" },
        { chave: "categorias-list", label: "Listar Categorias" },
        { chave: "categorias-edit", label: "Editar Categoria" },
        { chave: "categorias-delete", label: "Excluir Categoria" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {grupos.map(grupo => (
        <div key={grupo.titulo}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{grupo.titulo}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {grupo.botoes.map(botao => (
              <button
                key={botao.chave}
                onClick={() => onSelect(botao.chave)}
                className="bg-blue-600 text-white font-semibold py-4 px-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                {botao.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardHome;
