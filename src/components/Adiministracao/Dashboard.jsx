import React, { useState } from "react";
import Sidebar from "../Sidebar";
import DashboardHome from "./DashboardPages/DashboardHome";

import EventoCreatePage from "./DashboardPages/EventoCreatePage";
import EventoListPage from "./DashboardPages/EventoListPage";
import EventoEditPage from "./DashboardPages/EventoEditPage";
import EventoDeletePage from "./DashboardPages/EventoDeletePage";


import LocalCreatePage from "./DashboardPages/LocalCreatePage";
import LocalListPage from "./DashboardPages/LocalListPage";
import LocalEditPage from "./DashboardPages/LocalEditPage";
import LocalDeletePage from "./DashboardPages/LocalDeletePage";

import CategoriaCreatePage from "./DashboardPages/CategoriaCreatePage";
import CategoriaListPage from "./DashboardPages/CategoriaListPage";
import CategoriaEditPage from "./DashboardPages/CategoriaEditPage";
import CategoriaDeletePage from "./DashboardPages/CategoriaDeletePage";

function Dashboard() {
  const [pagina, setPagina] = useState("home");

  const renderConteudo = () => {
    switch (pagina) {
      case "home": return <DashboardHome onSelect={setPagina} />;

      // Eventos
      case "eventos-create": return <EventoCreatePage />;
      case "eventos-list": return <EventoListPage />;
      case "eventos-edit": return <EventoEditPage />;
      case "eventos-delete": return <EventoDeletePage />;

      case "locais-create": return <LocalCreatePage />;
      case "locais-list": return <LocalListPage />;
      case "locais-edit": return <LocalEditPage />;
      case "locais-delete": return <LocalDeletePage />;

      case "categorias-create": return <CategoriaCreatePage />;
      case "categorias-list": return <CategoriaListPage />;
      case "categorias-edit": return <CategoriaEditPage />;
      case "categorias-delete": return <CategoriaDeletePage />;

      default: return <DashboardHome onSelect={setPagina} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setPagina} />
      <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        {renderConteudo()}
      </main>
    </div>
  );
}

export default Dashboard;
