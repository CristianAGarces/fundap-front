import Image from "next/image";

export default function ProyectosPage() {
  return (
    <>
      <section className="relative flex items-center pt-56 justify-center min-h-screen w-full bg-gray-100 overflow-hidden">
        <Image
          src="/imagen18.jpg"
          alt="Fondo de valores"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 p-8 border-y-2 border-white/50 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Proyectos
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center drop-shadow">
            En FundapMacoe, nos esforzamos al maximo por brindar beneficios y
            proyectos a toda la comunidad de mujeres sin importar su estrato
            socioeconomicio, raza o etc.
          </p>
        </div>
      </section>
      <section className="text-center p-8 mx-auto bg-black text-white px-4">
        <h2 className="text-4xl font-bold mb-4">Nuestros Proyectos</h2>
        <p className="text-xl w-10/12 mx-auto">
          FUNDAPMACOE trabaja en la implementación de proyectos sociales,
          comunitarios y ambientales que aportan al bienestar de comunidades
          afrocolombianas y otras etnias vulnerables. Nuestros proyectos se
          desarrollan con enfoque participativo, étnico, de género y
          sostenibilidad.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-black py-6 px-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Desarrollo Ambiental y Territorial
            </h3>
            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>Reforestación y recuperación de microcuencas.</li>
              <li>Manejo de residuos sólidos y educación ambiental.</li>
              <li>Saneamiento básico comunitario.</li>
              <li>Promoción de energías limpias y sostenibles.</li>
              <li>Conservación y uso responsable del agua.</li>
            </ul>
            <Image
              src="/imagen19.jpg"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Acceso Tecnológico y Alfabetización Digital
            </h3>
            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>
                Cursos de herramientas digitales básicas para mujeres, jóvenes y
                adultos mayores.
              </li>
              <li>Instalación de puntos digitales comunitarios.</li>
              <li>
                Talleres sobre redes sociales, ciberseguridad y emprendimiento
                digital.
              </li>
            </ul>
            <Image
              src="/imagen20.jpg"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Hábitat y Vivienda Digna
            </h3>
            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>
                Diagnóstico y mejoramiento de viviendas de interés social.
              </li>
              <li>Capacitación en autoconstrucción con enfoque ecológico.</li>
              <li>Asesoría técnica y jurídica en propiedad de la tierra.</li>
            </ul>
            <Image
              src="/imagen21.jpg"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Producción Agropecuaria y Seguridad Alimentaria
            </h3>
            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>Formación y apoyo a huertas comunitarias y familiares.</li>
              <li>Fortalecimiento de prácticas agrícolas sostenibles.</li>
              <li>Distribución y gestión solidaria de alimentos.</li>
              <li>Producción agroecológica con enfoque de economía local.</li>
            </ul>
            <Image
              src="/imagen22.jpg"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Derechos Humanos y Participación Ciudadana
            </h3>

            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>
                {" "}
                Asesoría jurídica gratuita a mujeres cabeza de hogar y población
                vulnerable.
              </li>
              <li>
                Talleres sobre Ley 70 y derechos de comunidades afrocolombianas.
              </li>
              <li>Formación en liderazgo social y político.</li>
            </ul>
            <Image
              src="/imagen22.png"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              {" "}
              Cultura, Deporte y Recreación{" "}
            </h3>
            <ul className=" list-disc list-outside gap-4 text-sm space-y-3 text-start">
              <li>
                {" "}
                Escuelas de formación deportiva para niños, jóvenes y adultos
                mayores.
              </li>
              <li>Eventos culturales y ferias de emprendimiento étnico. </li>
              <li>
                Conservación de saberes ancestrales a través del arte, danza y
                música afro.
              </li>
            </ul>
            <Image
              src="/imagen23.png"
              alt="Proyecto Ambiental"
              width={100}
              height={100}
              className="mt-4 rounded-lg shadow-md mx-auto"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
