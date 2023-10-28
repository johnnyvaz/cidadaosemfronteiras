import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const servicesData = [
  {
    serviceName: "Cadastro Consular AIRE",
    customerTitle: "Cadastro Consular AIRE",
    content:
      "Preparação dos documentos e orientação para atualização de endereço e estado civil junto aos Consulados Italianos em todo o Brasil.",
    image: testimonial1,
  },
  {
    serviceName: "Inscrição e Atualização FAST IT",
    customerTitle: "---",
    content:
      "Assistência completa para atualização e inscrição no sistema FAST IT dos Consulados Italianos.",
    image: testimonial2,
  },
  {
    serviceName: "Cidadania por Casamento",
    customerTitle: "---",
    content:
      "Assistência para o processo de naturalização italiana por casamento junto aos Consulados Italianos de Curitiba e São Paulo.",
    image: testimonial3,
  },
  {
    serviceName: "Cidadania para Filhos",
    customerTitle: "---",
    content:
      "Preparação dos documentos e orientação para obtenção da cidadania italiana de filhos menores de 18 anos em todo o Brasil.",
    image: testimonial3,
  },
];

export const ServicesItaliaIsHave = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <br />
        <br />
        <br />
        <div className="custom-block-subtitle text-center mb-6">
          Serviços 
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Pra quem já possui Cidadania
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {servicesData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.serviceName}-${index}`}
            >
              {/* <div className="flex mb-2">
                <QuoteIcon />
              </div> */}
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                {/* <img src={testimonial.image} alt="" width="45px" /> */}
                <h3 className="mb-6 text-2xl font-bold text-white">
                {testimonial.serviceName}
                </h3>
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
