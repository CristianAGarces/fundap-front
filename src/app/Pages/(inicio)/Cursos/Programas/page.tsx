import Image from "next/image";

export default function ProgramasPage() {
  return (
    <>
      <div className="relative flex items-center pt-40 justify-center min-h-screen w-full bg-gray-100 overflow-hidden">
        <Image
          src="/imagen17.jpg"
          alt="Fondo de valores"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 p-8 border-y-2 border-white/50 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Programas
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl text-center drop-shadow">
            En FundapMacoe nos complace ofrecerle que contamos con distintos
            cursos 100% gratuitos para nuestra comunidad que no cuentan con
            ningun valor para que puedas cumplir con tus metas y propositos.
          </p>
        </div>
      </div>
      <section>
        <div className="w-full mx-auto px-4 py-8 bg-customGreen text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Nuestros Programas
          </h2>
          <p className="text-lg w-10/12 mx-auto mb-6">
            FUNDAPMACOE ofrece programas formativos dirigidos a mujeres cabeza
            de hogar, jóvenes, personas en condición de vulnerabilidad, y
            comunidades afrodescendientes y étnicas. Estos cursos buscan generar
            autonomía, conciencia social y oportunidades económicas.
          </p>
        </div>
        <div className="w-full mx-auto px-4 py-8 bg-white rounded-lg mt-8">
          <h3 className="text-3xl text-center">📚 Modalidades</h3>
          <ul className="list-disc list-inside space-y-4 w-2/3 p-10 text-lg mt-4">
            <li>Presencial (en sedes comunitarias y centros culturales)</li>{" "}
            <li>Virtual (plataforma educativa en línea)</li>
            <li> Semipresencial (modelo híbrido)</li>
          </ul>
        </div>
        <div className="flex mx-auto w-4/5 grid-cols-2 bg-white justify-center items-center p-6 mt-2">
          <div className="flex -grid-cols-2 p-6">
            <Image
              src={"/imagen20.jpg"}
              alt="Curso de Cocina"
              width={140}
              height={60}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">
                Alfabetización Digital y Tecnologías
              </p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Manejo básico de computador e internet</li>
                <li>Herramientas de oficina (Word, Excel, PowerPoint)</li>
                <li>Redes sociales y marketing digital</li>
              </ul>
            </div>
          </div>
          <div className="flex -grid-cols-2">
            {" "}
            <Image
              src={"/imagen23.jpg"}
              alt="Curso de Cocina"
              width={140}
              height={60}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">
                Formación en Identidad Étnica y Cultural
              </p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Historia de los pueblos afrocolombianos</li>
                <li>Cultura palenquera, raizal y afro</li>
                <li>Derechos étnicos y Ley 70</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex grid-cols-2 w-4/5 mx-auto bg-white justify-center items-center p-6 mt-8">
          <div className="flex -grid-cols-2 p-6">
            <Image
              src={"/imagen24.jpg"}
              alt="Curso de Cocina"
              width={150}
              height={80}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">Protección del Medio Ambiente</p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Educación ambiental comunitaria</li>
                <li>Agricultura urbana y agroecología </li>
                <li>Gestión de residuos y reciclaje</li>
              </ul>
            </div>
          </div>
          <div className="flex -grid-cols-2">
            {" "}
            <Image
              src={"/imagen25.jpg"}
              alt="Curso de Cocina"
              width={150}
              height={80}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">
                Derechos Humanos y Participación
              </p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Liderazgo femenino y político</li>
                <li>Derechos de la mujer y de la niñez</li>
                <li>Prevención de violencia de género</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex grid-cols-2 w-4/5 mx-auto bg-white justify-center items-center p-6 mt-8">
          <div className="flex -grid-cols-2 p-6">
            <Image
              src={"/imagen26.jpg"}
              alt="Curso de Cocina"
              width={150}
              height={80}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">Emprendimiento y Autogestión</p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Modelo Canvas para negocios sociales</li>
                <li>Contabilidad básica para emprendedores</li>
                <li>Gestión de proyectos productivos</li>
              </ul>
            </div>
          </div>
          <div className="flex -grid-cols-2">
            {" "}
            <Image
              src={"/imagen27.jpg"}
              alt="Curso de Cocina"
              width={150}
              height={80}
              className="rounded-lg shadow-md mx-auto mt-4"
              priority
            />
            <div className="flex flex-col justify-center items-center p-4">
              <p className="text-xl font-bold">Oficios y Formación Técnica</p>
              <ul className="list-disc text-lg list-inside space-y-2 mt-2">
                <li>Panadería y cocina tradicional afro</li>
                <li>Confección y diseño textil</li>
                <li>Peluquería y estética afro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
