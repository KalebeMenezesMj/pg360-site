import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ onSelect }) {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col justify-between">
      <div>
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
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Deslogar
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
