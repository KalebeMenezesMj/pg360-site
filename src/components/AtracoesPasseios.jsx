import Navbar from "./Navbar";
import React, { useState, useRef } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Footer from "./Footer";
import { MapPin } from "lucide-react"; 

import imagemNetuno from '../assets/Netuno_foto.jpg'
import imagemPda from '../assets/pda_pg.jpg'
import imagemFortalezaItaipu from '../assets/fortalezaItaipu.jpg'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

const touristSpots = [
  { 
    id: 1, 
    name: "Estátua de Netuno", 
    description: "Um dos marcos mais icônicos de Praia Grande, a estátua de bronze representa o rei dos mares e é um ponto popular para fotos e apreciação da orla.",
    image: imagemNetuno, 
    position: { lat: -24.029443621891435, lng: -46.47368105581896 } 
  },
  { 
    id: 2, 
    name: "Palácio das Artes", 
    description: "O complexo cultural abriga teatro, museu e galeria de arte. É o centro de grandes eventos culturais e exposições da cidade.",
    image: imagemPda,
    position: { lat: -23.999098642369432, lng: -46.41204696121311 } 
  },
  { 
    id: 3, 
    name: "Fortaleza de Itaipu", 
    description: "Localizada em meio à Mata Atlântica, oferece uma vista panorâmica incrível da baía de Santos e conta a história militar da região.",
    image: imagemFortalezaItaipu,
    position: { lat: -24.01632500, lng: -46.3857158154 } 
  },
];

const initialCenter = { lat: -24.0054, lng: -46.4036 };

function AtracoesPasseios() {
  const [mapCenter, setMapCenter] = useState(initialCenter);
  const [mapZoom, setMapZoom] = useState(13);
  const mapRef = useRef(null);

  const handleLocationClick = (position) => {
    setMapCenter(position);
    setMapZoom(16);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!API_KEY || !MAP_ID) {
    return (
      <div className="p-8 text-center text-red-600">
        <h1 className="text-2xl font-bold">Erro de Configuração</h1>
        <p>A chave de API ou o Map ID do Google Maps não foram encontrados.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 font-sans">
      <Navbar />

      <header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
        <h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
          Pontos Turísticos
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 pb-12">
        
        <div className="space-y-10 mb-16">
          {touristSpots.map((spot) => (
            <div 
              key={spot.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-300 relative">
                 <img 
                    src={spot.image} 
                    alt={spot.name} 
                    className="w-full h-full object-cover"
                 />
              </div>

              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
                  {spot.name}
                </h2>
                
                <p className="text-gray-600 mb-6 text-justify leading-relaxed">
                  {spot.description}
                </p>

                <button
                  onClick={() => handleLocationClick(spot.position)}
                  className="self-start bg-[#029AEA] hover:bg-[#1D91CE] text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin size={20} />
                  LOCALIZAÇÃO
                </button>
              </div>
            </div>
          ))}
        </div>

        <div ref={mapRef} className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-4 pl-2 border-l-4 border-yellow-400">
            Mapa Interativo
          </h3>
          
          <APIProvider apiKey={API_KEY}>
            <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-300">
              <Map
                center={mapCenter}
                zoom={mapZoom}
                onCameraChanged={(ev) => {
                    setMapCenter(ev.detail.center);
                    setMapZoom(ev.detail.zoom);
                }}
                mapId={MAP_ID}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
              >
                {touristSpots.map(spot => (
                  <Marker
                    key={spot.id}
                    position={spot.position}
                    title={spot.name}
                    onClick={() => handleLocationClick(spot.position)}
                  />
                ))}
              </Map>
            </div>
          </APIProvider>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default AtracoesPasseios;