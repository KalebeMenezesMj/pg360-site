// src/components/Sidebar.jsx
import React from "react";

function Sidebar({ onSelect }) {
  const itens = [
    { chave: "home", label: "Página Inicial" },

    { chave: "eventos-create", label: "Cadastrar Evento" },
    { chave: "eventos-list", label: "Listar Eventos" },
    { chave: "eventos-edit", label: "Editar Evento" },
    { chave: "eventos-delete", label: "Excluir Evento" },

    { chave: "locais-create", label: "Cadastrar Local" },
    { chave: "locais-list", label: "Listar Locais" },
    { chave: "locais-edit", label: "Editar Local" },
    { chave: "locais-delete", label: "Excluir Local" },

    { chave: "categorias-create", label: "Cadastrar Categoria" },
    { chave: "categorias-list", label: "Listar Categorias" },
    { chave: "categorias-edit", label: "Editar Categoria" },
    { chave: "categorias-delete", label: "Excluir Categoria" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {itens.map(item => (
          <li key={item.chave}>
            <button
              onClick={() => onSelect(item.chave)}
              className="w-full text-left px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
