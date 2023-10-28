import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const servicesData = [
  {
    serviceName: "Ação Judicial Contra a Fila",
    customerTitle: "---",
    content:
      "Preparação dos documentos e assessoria jurídica na Itália para acelerar o processo.",
    image: testimonial1,
  },
  {
    serviceName: "Notificação Trentinos",
    customerTitle: "---",
    content:
      "Ação com advogado na Itália para intervir na demora do parecer favorável à Cidadania Italiana.",
    image: testimonial2,
  },
  {
    serviceName: "Filhos Direto de Italianos",
    customerTitle: "---",
    content:
      "Preparação dos documentos no Brasil e ação sem fila na Itália para filhos direto de italianos vivos.",
    image: testimonial3,
  },
  {
    serviceName: "Processo via Materna",
    customerTitle: "---",
    content:
      "Preparação das certidões, montagem do processo e ação judicial na Itália.",
    image: testimonial3,
  }
];

export const ServicesItaliaActions = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Serviços 
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
        Ações Judiciais na Itália
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 xl:px-0 items-center">
          {servicesData.map((testimonial, index) => {
            return (
              <div
                className="w-full custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
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
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);