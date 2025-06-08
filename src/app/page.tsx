import CarruselInicio from "@/components/Carrusel-Inicio";
import Image from "next/image";
import Imagen10 from "../../public/imagen10.jpg";
import Imagen5 from "../../public/imagen5.jpg";
import Imagen3 from "../../public/imagen3.jpg";
import Imagen6 from "../../public/imagen6.jpg";
import Link from "next/link";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <div className="pt-16">
        <CarruselInicio />
        <section className="mt-8 text-center mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a FundapMacoe</h1>
          <p className="text-xl w-10/12 mx-auto">
            FundapMacoe es una organización dedicada a la promoción y defensa de
            los derechos de las mujeres afrodescendientes y otras etnias en
            Colombia. Nuestro objetivo es empoderar a estas comunidades y
            fomentar su desarrollo integral.sdfsdfsdf
          </p>
          <Image
            src={Imagen6}
            alt="Logo FundapMacoe"
            width={600}
            height={600}
            className="mx-auto mt-4 rounded-lg shadow-lg"
          />
          <h3 className="text-4xl font-bold mt-6 mb-2">
            ¿Que hacemos en FundapMacoe?
          </h3>
          <p className="text-xl w-10/12 mx-auto">
            FundapMacoe es una fundacion que trabaja por todas las mujeres
            cabeza de familia que toquen a nuestra puerta en condiciones de
            vulnerabilidad socioeconómica y/o emocional, Esta Fundación nace en
            el año 2020 en el Municipio de Candelaria, Valle.
          </p>
          <Image
            src={Imagen10}
            alt="Logo FundapMacoe"
            width={200}
            height={200}
            className="mx-auto mt-4"
          />
        </section>
        <section className="mt-8 text-center mx-auto px-4 bg-customGreen text-white py-6">
          <h2 className="text-4xl font-bold mb-4 text-customYellow">
            Nuestros Valores
          </h2>
          <p className="text-xl w-10/12 mx-auto">
            En FundapMacoe, nos guiamos por valores fundamentales que reflejan
            nuestro compromiso con la comunidad y el bienestar de las mujeres
            afrodescendientes:
          </p>
          <ul className="text-2xl list-inside list-none gap-5 font-bold flex justify-center mt-4 w-10/12 mx-auto">
            <li> Equidad de genero</li>
            <li> Identidad culturar</li>
            <li> Desarrollo sostenible</li>
            <li> Inclusión</li>
            <li>Participacion comunitaria</li>
          </ul>
        </section>
        <section className="mt-8 text-center mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Nuestra mision</h2>
          <p className="text-xl w-10/12 mx-auto">
            Nuestra misión es promover el empoderamiento de las mujeres
            afrodescendientes y otras etnias, brindando apoyo integral a través
            de programas educativos, sociales y económicos. Trabajamos para
            construir un futuro más justo e igualitario.
          </p>
          <Image
            src={Imagen5}
            alt="Logo FundapMacoe"
            width={400}
            height={400}
            className="mx-auto mt-4 rounded-lg shadow-lg"
          />
        </section>
        <section className="mt-8 text-center mx-auto px-4 bg-customGreen text-white py-6">
          <h2 className="text-4xl font-bold mb-4 text-customYellow">
            Nuestra Vision
          </h2>
          <p className="text-xl w-5/6 text-center mx-auto">
            Nuestra visión es que la Fundación FUNDAPMACOE, será reconocida
            territorial, nacional e internacionalmente como ponderante en
            gestión y ejecución de proyectos productivos, sociales, espirituales
            y de vida, que promuevan el desarrollo humano y la calidad de vida
            de las mujeres cabeza de familia, fomentando el trabajo solidario, y
            la asociatividad. Ofreciendo becas a estas madres 100% gratuitas
            fomentando la igualdad de genero, para 2024 nos proyectos fomar 600
            madres cabezas de hogar.
          </p>
          <Image
            src={Imagen3}
            alt="Logo FundapMacoe"
            width={450}
            height={450}
            className="mx-auto mt-4 shadow-lg rounded-lg"
          />
        </section>
        <section className="text-center mx-auto px-4 py-6 bg-black ">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Nuestros Proyectos
          </h2>
          <p className="text-xl w-10/12 mx-auto text-white">
            FUNDAPMACOE trabaja en la implementación de proyectos sociales,
            comunitarios y ambientales que aportan al bienestar de comunidades
            afrocolombianas y otras etnias vulnerables. Nuestros proyectos se
            desarrollan con enfoque participativo, étnico, de género y
            sostenibilidad. Algunos de estos son: sdfsdfsdf
          </p>
          <ul className="list-disc list-inside space-y-4 w-2/3 mx-auto text-lg mt-4 text-white flex">
            <li className="text-lg text-white mt-4">
              Desarrollo Ambiental y Territorial
            </li>
            <li className="text-lg text-white mt-2">
              Acceso Tecnológico y Alfabetización Digital
            </li>
            <li className="text-lg text-white mt-2">
              Formación en Habilidades Productivas y Emprendimiento
            </li>
          </ul>
          <Image
            src={"/imagen23.jpg"}
            alt="Proyecto Ambiental"
            width={300}
            height={150}
            className="mx-auto mt-4 rounded-lg shadow-lg"
            priority
          />
        </section>
        <section className="text-center mx-auto px-4 py-6 bg-customGreen text-white">
          <h2 className="text-4xl font-bold mb-4 text-customYellow">
            Nuestros Cursos
          </h2>
          <p className="text-xl w-10/12 mx-auto">
            En FundapMacoe ofrecemos cursos gratuitos para nuestra comunidad que
            no tienen ningún costo, con el objetivo de ayudar a las mujeres a
            cumplir sus metas y propósitos. Estos cursos están diseñados para
            empoderar a las mujeres y brindarles las herramientas necesarias
            para su desarrollo personal y profesional.
          </p>
          <Image
            src={"/imagen20.jpg"}
            alt="Curso de Cocina"
            width={300}
            height={150}
            className="mx-auto mt-4 rounded-lg shadow-lg"
            priority
          />
          <h3 className="text-2xl font-bold mt-6 mb-2">
            Modalidades de los Cursos
          </h3>
          <ul className="list-disc list-inside flex space-y-4 w-2/3 mx-auto text-lg mt-4">
            <li>Presencial (en sedes comunitarias y centros culturales)</li>
            <li>Virtual (plataforma educativa en línea)</li>
            <li>Semipresencial (modelo híbrido)</li>
          </ul>
        </section>
        <section className="text-center mx-auto px-4 py-6 bg-white">
          <h2 className="text-4xl font-bold mb-4">Nuestras capacitaciones</h2>
          <p>
            En fundapMacoe creemos firmemente que con dedicacion y firmeza
            podemos ayudar a las mujeres a lograr la igualdad entre genero y
            cumplir sus sueños y metas. Por eso, ofrecemos capacitaciones
            gratuitas en diversas áreas, incluyendo:sdsd
          </p>
          <div className="flex w-full justify-center mt-4">
            <Image
              src="/imagen21.jpg"
              alt="Capacitación"
              width={240}
              height={155}
              className="mx-auto mt-4 shadow-lg"
              priority
            />
            <Image
              src="/imagen21.jpg"
              alt="Capacitación"
              width={240}
              height={155}
              className="mx-auto mt-4 shadow-lg"
              priority
            />
            <Image
              src="/imagen21.jpg"
              alt="Capacitación"
              width={240}
              height={155}
              className="mx-auto mt-4 shadow-lg"
              priority
            />
            <Image
              src="/imagen21.jpg"
              alt="Capacitación"
              width={240}
              height={155}
              className="mx-auto mt-4 shadow-lg"
              priority
            />
            <Image
              src="/imagen21.jpg"
              alt="Capacitación"
              width={240}
              height={155}
              className="mx-auto mt-4 shadow-lg"
              priority
            />
          </div>
        </section>
        <section className="text-center mx-auto px-4 py-10 bg-orange-400 ">
          <h2 className="text-4xl font-bold mb-4">
            ¿Deseas hacer parte de este proceso?
          </h2>
          <p className="mb-10 text-xl w-10/12 mx-auto">
            Si deseas hacer parte de este proceso, puedes contactarnos a través
            de nuestras redes sociales o enviarnos un correo electrónico. Tu
            apoyo es fundamental para continuar nuestra labor y ayudar a más
            mujeres en situación de vulnerabilidad.
          </p>
          <Link
            href={"./Pages/inscripciones"}
            title="Inscripción"
            aria-label="Inscripción"
            className="bg-customYellow text-2xl hover:opacity-70 text-white px-4 py-2 rounded font-bold"
          >
            Inscribete aqui.
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
