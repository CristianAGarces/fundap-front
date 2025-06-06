import Image from "next/image";

export default function ValoresPage() {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen w-full bg-gray-100 overflow-hidden">
        <Image
          src="/imagen12.jpg"
          alt="Fondo de valores"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 p-8 border-y-2 border-white/50 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Nuestros Valores
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center drop-shadow">
            En FundapMacoe, nos guiamos por valores fundamentales que impulsan
            nuestra misión de promover la sostenibilidad y el bienestar social.
            Creemos en la transparencia, la innovación y la colaboración para
            crear un futuro más estable y justo para todas las mujeres.
          </p>
        </div>
      </div>
      <section className="w-full mx-auto px-4 py-8 bg-customGreen text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Nuestros Principios
        </h2>
        <ul className="list-disc list-inside space-y-4 w-2/3 text-center mx-auto text-lg">
          <li>
            <strong>Empoderamiento:</strong> Fomentamos el empoderamiento de las
            mujeres afrodescendientes y otras etnias, brindando herramientas y
            recursos para su desarrollo personal y profesional.
          </li>
          <li>
            <strong>Solidaridad:</strong> Promovemos la solidaridad entre
            nuestras comunidades, apoyando a quienes más lo necesitan.
          </li>
          <li>
            <strong>Respeto:</strong> Valoramos la diversidad cultural y étnica,
            fomentando un ambiente de respeto mutuo.
          </li>
          <li>
            <strong>Inclusión:</strong> Trabajamos para garantizar que todas las
            voces sean escuchadas y representadas en nuestras iniciativas.
          </li>
        </ul>
        <Image
          src={"/imagen14.jpg"}
          alt="Visión de FundapMacoe"
          width={350}
          height={350}
          className="rounded-lg shadow-lg mx-auto mt-4"
          priority
        />
      </section>
      <section className="w-full mx-auto px-4 py-8 mt-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-customGreen">
          Nuestra Misión
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto text-center">
          Nuestra misión es promover el empoderamiento de las mujeres
          afrodescendientes y otras etnias, brindando apoyo integral a través de
          programas educativos, sociales y económicos. Trabajamos para construir
          un futuro más justo e igualitario.
        </p>
        <Image
          src="/imagen5.jpg"
          alt="Misión de FundapMacoe"
          width={400}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
        />
      </section>
      <section className="w-full mx-auto px-4 py-8 bg-customGreen text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 my-3 text-center text-customYellow">
          Nuestra Visión
        </h2>
        <p className="text-xl text-gray-100 w-10/12 mx-auto text-center">
          La Fundación FUNDAPMACOE es una organización con sede en Candelaria,
          Valle del Cauca, Colombia, que desde hace tres años trabaja por el
          desarrollo integral de las mujeres cabeza de familia, en especial
          aquellas pertenecientes a comunidades negras, afrocolombianas,
          raizales y palenqueras. Su visión es ser reconocida a nivel local y
          nacional por su impacto en proyectos sociales, productivos y
          espirituales, promoviendo el empoderamiento femenino, la participación
          social y la mejora de la calidad de vida. La Fundación busca formar
          mujeres en habilidades productivas y liderazgo, fortaleciendo tanto su
          autonomía económica como su identidad cultural y espiritual. Entre sus
          programas destacados se encuentran becas de estudio y un proyecto
          bandera: &quot;Ponderación de la Mujer Afro Cabeza de Familia y Otras
          Etnias&quot;, que ha venido desarrollándose gratuitamente desde 2020.
          Este programa incluye formación personal, mentorías y una fase de
          aceleración de negocios con el objetivo de consolidar emprendimientos
          sostenibles en sectores como gastronomía, moda y belleza. La meta para
          2024 es capacitar a 600 mujeres, brindándoles herramientas para
          enfrentar retos como la falta de tiempo y el desorden financiero, y
          apoyarlas en la creación y crecimiento de sus negocios. FUNDAPMACOE
          aspira a fortalecer su presencia tanto en áreas rurales como urbanas,
          expandiéndose a nivel nacional y regional como un referente en
          empoderamiento femenino y desarrollo comunitario.
        </p>
        <Image
          src={"/imagen11.jpg"}
          alt="Visión de FundapMacoe"
          width={350}
          height={350}
          className="rounded-lg shadow-lg mx-auto mt-4"
          priority
        />
      </section>
      <section className="w-full mx-auto px-4 py-8 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-customGreen">
          ¿Por qué elegir FundapMacoe?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
          FundapMacoe es una fundación comprometida con el bienestar de las
          mujeres afrodescendientes y otras etnias. Nuestro enfoque integral
          garantiza que cada mujer reciba el apoyo necesario para superar los
          desafíos y alcanzar su máximo potencial.
        </p>
      </section>
      <section className="w-full pb-7 flex items-center justify-center bg-white">
        <Image
          src={"/imagen9.jpg"}
          alt="Visión de FundapMacoe"
          width={300}
          height={200}
          className=" size-60"
        />
        <Image
          src={"/imagen3.jpg"}
          alt="Visión de FundapMacoe"
          width={300}
          height={200}
          className=" size-60"
        />
        <Image
          src={"/imagen8.jpg"}
          alt="Visión de FundapMacoe"
          width={300}
          height={200}
          className=" size-60"
        />
        <Image
          src={"/imagen6.jpg"}
          alt="Visión de FundapMacoe"
          width={300}
          height={200}
          className=" size-60"
        />
      </section>
    </>
  );
}
