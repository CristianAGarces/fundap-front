import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <div className="pt-24">
        <h2 className="text-4xl text-center font-bold mb-4">Contactonos</h2>
        <div className="grid h-auto sm:flex-col md:grid-cols-2 gap-4 items-center justify-center mb-7">
          <div className="text-xl px-8 py-16 sm:text-sm md:text-lg lg:text-xl">
            <p className="mb-8 font-semibold ">
              Estamos aquí para ayudarte. Contáctanos a través de los siguientes
              medios:
            </p>
            <ul className="space-y-4 font-semibold ">
              <li>Representante Legal FUNDAPMACOE.</li>
              <li>TITO NELIO CUERO MURILLO</li>
              <li>Teléfono: +57 3002392123.</li>
              <li>Email: titocue@gmail.com</li>
              <li>
                Dirección: Carrera 10 #8-31, Barrio San Carlos, Candelaria,
                Valle.
              </li>
              <Image
                src="/imagen9.jpg"
                alt="Imagen de contacto"
                width={300}
                height={400}
                className="rounded-lg shadow-lg mx-auto size-52 mt-4"
                priority
              />
            </ul>
          </div>
          <div className="w-11/12 lg:w-full sm:w-full flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.758400577746!2d-76.35235192597827!3d3.408984396565575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0ea5a9b6d2b1%3A0xbc5335bfef0c14d5!2sCra.%2010%20%238-31%2C%20Candelaria%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1748811842300!5m2!1ses-419!2sco"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-lg shadow-lg mt-4"
              style={{ border: 0, marginTop: "30px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
