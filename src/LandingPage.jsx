import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Phone, MapPin, Clock, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Leaflet icon fix
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const LandingPage = () => {
    const businessData = {
        name: "Nombre del Negocio",
        phone: "961 171 1607",
        address: "Av Artículo 123, Col. Infonavit Grijalva, 29044 Tuxtla Gutiérrez, Chis.",
        hours: "Cierra · Abre a las 10:00 AM",
        coords: [16.7592, -93.0905],
        facebook: "https://facebook.com",
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1200&auto=format&fit=crop"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">

            {/* Header */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            L
                        </div>
                        <span className="font-bold">{businessData.name}</span>
                    </div>
                    <a
                        href={`tel:${businessData.phone}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                    >
                        Llamar ahora
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Servicios de calidad en <span className="text-blue-600">Tuxtla Gutiérrez</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Estamos ubicados en la Col. Infonavit Grijalva. Atención profesional y cercana.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href={`https://wa.me/${businessData.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition"
                    >
                        <MessageCircle size={20} /> WhatsApp
                    </a>
                    <a
                        href="#ubicacion"
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition"
                    >
                        <MapPin size={20} /> Ver mapa
                    </a>
                </div>
            </section>

            {/* Imágenes del negocio */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {businessData.images.map((img, index) => (
                        <div
                            key={index}
                            className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={img}
                                alt="Imagen del negocio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <span className="text-white text-xl font-bold tracking-wide">
                                    Imagen del negocio
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Info Cards */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <Clock className="mx-auto mb-3 text-blue-600" />
                        <h3 className="font-bold">Horario</h3>
                        <p className="text-sm text-gray-600">{businessData.hours}</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <Phone className="mx-auto mb-3 text-blue-600" />
                        <h3 className="font-bold">Contacto</h3>
                        <p className="text-sm text-gray-600">{businessData.phone}</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 text-center">
                        <Facebook className="mx-auto mb-3 text-blue-600" />
                        <h3 className="font-bold">Redes</h3>
                        <a href={businessData.facebook} className="text-blue-600 text-sm hover:underline">
                            Facebook <ExternalLink size={14} className="inline" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section id="ubicacion" className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Nuestra ubicación</h2>
                    <p className="text-center text-gray-600 mb-8">{businessData.address}</p>

                    <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl">
                        <MapContainer center={businessData.coords} zoom={16} style={{ height: '100%', width: '100%' }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={businessData.coords}>
                                <Popup>
                                    <b>{businessData.name}</b><br />Te esperamos
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-gray-900 text-white text-center">
                <p className="opacity-50 text-sm">
                    © {new Date().getFullYear()} {businessData.name}
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
