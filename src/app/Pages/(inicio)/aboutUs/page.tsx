import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 bg-gradient-to-r from-green-500 via-lime-400 to-yellow-300">
      <h1 className="text-4xl font-bold text-black mb-6">¿Quienes somos?</h1>
      <p className="text-xl text-black mb-4 text-center w-9/12 leading-relaxed">
        La Fundación Ponderación de la Mujer Afro Cabeza de Familia y Otras
        Etnias (FUNDAPMACOE) es una entidad sin ánimo de lucro, con carácter
        nacional e internacional, que nace con el propósito de reivindicar y
        fortalecer los derechos de las mujeres afrocolombianas cabeza de hogar y
        de otras comunidades étnicas tradicionalmente excluidas. FUNDAPMACOE
        promueve el desarrollo integral de estas comunidades a través de la
        autogestión, la cooperación y la participación activa en proyectos
        sociales, económicos, culturales, ambientales y tecnológicos. Nuestra
        labor se sustenta en principios de equidad, justicia social, identidad
        cultural y sostenibilidad.
      </p>
      <Image
        src="/imagen15.jpg"
        alt="Logo FundapMacoe"
        width={200}
        height={200}
        quality={80}
        className="my-4 rounded-lg shadow-lg"
      />
      <section className="p-8 bg-customGreen mx-auto text-white rounded-lg shadow-lg w-full items-center justify-center my-8">
        <h2 className="text-4xl font-bold text-black mb-6 text-center">
          Nuestra razon de ser
        </h2>
        <p className="text-xl text-black mb-4 text-center mx-auto w-9/12 text-c leading-relaxed">
          La fundación se constituye como una respuesta a las múltiples
          problemáticas que enfrentan las mujeres cabeza de familia
          afrodescendientes, tales como la pobreza, la desigualdad de género, la
          exclusión social, el limitado acceso a oportunidades laborales,
          educativas y tecnológicas, y la falta de representación en espacios de
          decisión.
        </p>
        <Image
          src="/imagen12.jpg"
          alt="Mujeres trabajando juntas"
          width={500}
          height={300}
          quality={80}
          className="my-4 rounded-lg shadow-lg mx-auto"
        />
      </section>
      <h2 className="text-4xl font-bold text-black mb-6">
        Nuestros principios
      </h2>
      <ul className="list-disc list-inside text-black text-xl mb-4 w-9/12">
        <li>
          Equidad de género: Creemos en la igualdad real de oportunidades entre
          mujeres y hombres.
        </li>
        <li>
          Reconocimiento étnico: Valoramos y promovemos las raíces culturales
          afrocolombianas, raizales, palenqueras y de otras comunidades étnicas.
        </li>
        <li>
          Autonomía y participación: Fomentamos el liderazgo comunitario y la
          toma de decisiones colectivas.
        </li>
        <li>
          Solidaridad y cooperación: Trabajamos en red con otras organizaciones
          y entidades aliadas, públicas y privadas.
        </li>
        <li>
          Sostenibilidad: Diseñamos proyectos con enfoque ambiental y de largo
          plazo.
        </li>
      </ul>
      <Image
        src="/imagen14.jpg"
        alt="Mujeres empoderadas"
        width={500}
        height={300}
        quality={80}
        className="my-4 rounded-lg shadow-lg mx-auto"
      />
      <section className="p-8 bg-customGreen mx-auto rounded-lg shadow-lg w-full items-center justify-center my-8">
        <h2 className="text-4xl font-bold text-black mb-6 text-center">
          Ambito de accion
        </h2>
        <p className="text-xl text-center">
          <b>FUNDAPMACOE</b> trabaja de forma transversal en temas como:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-center text-black text-xl mt-4 w-9/12 mx-auto">
          <li>Identidad cultural afrocolombiana.</li>
          <li>Protección de la niñez, juventud y adulto mayor.</li>
          <li>Tecnología y alfabetización digital.</li>
          <li>Medio ambiente y sostenibilidad.</li>
          <li>Empoderamiento económico y emprendimiento.</li>
          <li>Vivienda digna y saneamiento básico.</li>
          <li>Derechos humanos y participación política.</li>
          <li>
            Reintegración social de personas en situación de calle o
            desplazamiento.
          </li>
        </ul>
        <Image
          src="/imagen6.jpg"
          alt="Mujeres trabajando juntas"
          width={500}
          height={300}
          quality={80}
          className="my-4 rounded-lg shadow-lg mx-auto"
        />
      </section>
      <h2 className="text-4xl font-bold text-black mb-6 text-center">
        Objetivos
      </h2>
      <h3 className="text-2xl font-bold text-black mb-6">Objetivo General</h3>
      <p className="text-xl text-black mb-4 text-center w-9/12 mx-auto">
        Contribuir al desarrollo integral de las mujeres afrocolombianas cabeza
        de familia y de otras comunidades étnicas, mediante el fortalecimiento
        étnico, cultural, ambiental, económico y organizativo, en armonía con
        los principios constitucionales, la Ley 70, la Ley 99 de 1993, la Ley
        134 de 1994 y demás normativas vigentes.
      </p>
      <h3 className="text-2xl font-bold text-black mb-6">
        Objetivos especificos
      </h3>
      <ul className="list-decimal list-inside space-y-4 text-center text-black text-xl mt-4 w-9/12 mx-auto">
        <li>
          🧬 Reivindicar los derechos sociales, económicos, territoriales y
          culturales de las comunidades afrocolombianas, raizales y palenqueras.
        </li>
        <li>
          🧠 Desarrollar procesos de formación y capacitación que fortalezcan la
          identidad cultural, el liderazgo y la autogestión comunitaria.
        </li>
        <li>
          🌱 Ejecutar proyectos ambientales y de sostenibilidad, como
          reforestación, manejo de cuencas, saneamiento básico y conservación
          ecológica.
        </li>
        <li>
          📶 Promover el acceso a tecnologías de la información para cerrar la
          brecha digital en comunidades étnicas vulnerables.
        </li>
        <li>
          🏠 Impulsar proyectos de vivienda digna y mejoramiento del hábitat,
          con un enfoque participativo y autogestionado.
        </li>
        <li>
          🧒🏽 Proteger los derechos de poblaciones vulnerables, como la niñez,
          juventud, adultos mayores y personas en situación de calle o
          desplazamiento.
        </li>
        <li>
          ⚽ Fomentar la recreación, el deporte y la cultura, como medios para
          el desarrollo integral y la sana convivencia.
        </li>
        <li>
          🤝 Establecer alianzas estratégicas con entidades públicas, privadas,
          ONG y organismos internacionales para el financiamiento y ejecución de
          proyectos sociales.
        </li>
        <li>
          💼 Crear y apoyar iniciativas productivas que generen empleo,
          promuevan el emprendimiento y mejoren la calidad de vida de la
          población afro y otras etnias.
        </li>
        <li>
          🕊️ Promover la paz, la convivencia y la participación ciudadana, con
          enfoque étnico, de género y de derechos humanos.
        </li>
      </ul>
      <Image
        src="/imagen4.jpg"
        alt="Mujeres empoderadas"
        width={500}
        height={300}
        quality={80}
        className="my-4 rounded-lg shadow-lg mx-auto"
      />
      <div className="flex justify-around w-full mt-8 mb-4">
        <div className="flex space-x-8 justify-center items-center p-3 bg-slate-500/10 rounded-lg cursor-pointer hover:bg-slate-500/20 transition">
          <a
            href="/estatutos.doc"
            download
            className="flex items-center space-x-2"
          >
            <Image src="/word.png" width={60} height={20} alt="logo word" />
            <p>Click aqui para descargar estatus legales</p>
          </a>
        </div>
        <div className="flex space-x-8 justify-center items-center p-3 bg-slate-500/10 rounded-lg cursor-pointer hover:bg-slate-500/20 transition">
          <a
            href="/camara-comercio.pdf"
            download
            className="flex items-center space-x-2"
          >
            <Image
              src="/pdf.png"
              width={60}
              height={20}
              quality={80}
              alt="logo word"
            />
            Click aqui para documento de camara y comercio
          </a>
        </div>
      </div>
    </div>
  );
}
