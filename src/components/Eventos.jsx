import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";  
function Eventos(){
    return(
        <div className="min-h-screen bg-white relative scroll-smooth flex flex-col">
            <Navbar/>
            <main className="flex-grow">
                <h1 className="text-3xl font-bold font-sans mb-4">Acompanhe os eventos que irão acontecer em breve na Praia Grande!</h1>
            </main>

            <Footer/>
        </div>
    )
}

export default Eventos;