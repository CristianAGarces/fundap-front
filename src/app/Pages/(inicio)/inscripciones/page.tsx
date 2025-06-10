import Image from "next/image";
import Form from "@/components/Formulario/Form";

export default function Inscripcion() {
  return (
    <>
      <div className=" mx-auto pt-24 items-center text-center">
        <section className="w-10/12 mx-auto px-4 mb-8">
          <h1 className="text-4xl font-bold">
            ¿Por qué inscribirse en FUNDAPMACOE?
          </h1>
          <p className="text-xl mt-4">
            Inscribirse en nuestra fundación FUNDAPMACOE es dar un paso firme
            hacia una vida más digna, empoderada y con oportunidades reales.
            Desde el año 2020, trabajamos por mejorar la calidad de vida de las
            mujeres cabeza de familia, especialmente aquellas en condiciones de
            vulnerabilidad social, económica o emocional.
            <br /> <br /> Queremos ayudarte a construir un futuro mejor para ti
            y tu familia. No importa en qué etapa te encuentres: si estás
            comenzando o ya tienes un negocio, en FUNDAPMACOE encontrarás
            herramientas y apoyo para avanzar.
          </p>
          <Image
            src="/imagen12.jpg"
            alt="Beneficios de inscribirse"
            width={500}
            height={300}
            quality={80}
            className="mt-4 mx-auto rounded-lg shadow-lg"
          />
        </section>
        <section className="mb-8 grid sm:flex-col md:flex-col lg:flex-col p-4 gap-4 w-full bg-customGreen">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Beneficios de inscribirse
            </h2>
            <ul className="list-decimal list-inside text-xl text-start space-y-2">
              <li>Acceso a programas de formación y capacitación.</li>
              <li>Asesoría en emprendimiento y desarrollo de negocios.</li>
              <li>Apoyo emocional y psicológico.</li>
              <li>Red de apoyo entre mujeres.</li>
              <li>Oportunidades de networking y colaboración.</li>
            </ul>
            <Image
              src="/imagen6.jpg"
              alt="Beneficios de inscribirse"
              width={300}
              height={100}
              quality={80}
              className="mt-4 mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">¿Cómo inscribirse?</h2>
            <p className="text-xl">
              Para inscribirte, simplemente completa el siguiente formulario de
              inscripción en nuestra página web o contáctanos a través de
              nuestras redes sociales. Nuestro equipo estará encantado de
              guiarte en el proceso.
            </p>
            <Image
              src="/imagen13.jpg"
              alt="Beneficios de inscribirse"
              width={300}
              height={100}
              quality={80}
              className="mt-10 mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
        <Form />
      </div>
    </>
  );
}
