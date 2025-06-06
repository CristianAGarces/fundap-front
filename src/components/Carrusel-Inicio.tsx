"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = ["/imagen1.jpg", "/imagen2.jpg", "/imagen7.jpg", "/imagen8.jpg"];

export default function CarruselInicio() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  // Función para reiniciar el contador manualmente
  const handleManualNav = (navFn: () => void) => {
    navFn();
    // Reinicia el contador automático
    setCurrent((prev) => prev); // Forzar actualización para reiniciar useEffect
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full h-screen z-10 relative overflow-hidden flex items-center justify-center bg-black">
      {images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          width={1900}
          height={1080}
          alt={`slide-${idx}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700  ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      <h2 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4 py-2 bg-black/60 rounded-lg max-w-3xl mt-20">
        PONDERACION DE LA MUJER AFRO CABEZA DE FAMILIA Y OTRAS ETNIAS
      </h2>
      <button
        onClick={() => handleManualNav(prevSlide)}
        title="Anterior"
        className="absolute size-12 left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 text-black rounded-full p-3 z-20"
        aria-label="Anterior"
      >
        <FaArrowLeft className="w-5 h-5 mr-2" />
      </button>
      <button
        onClick={() => handleManualNav(nextSlide)}
        title="Siguiente"
        className="absolute size-12 right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 text-black rounded-full p-3 z-20"
        aria-label="Siguiente"
      >
        <FaArrowRight className="w-5 h-5 " />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
