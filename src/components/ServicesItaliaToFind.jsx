import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const servicesData = [
  {
    serviceName: "Pesquisa Genealógica",
    customerTitle: "---",
    content:
      "Serviço de pesquisa da história da família no Brasil com objetivo de resgatar informações dos ancestrais.",
    image: testimonial1,
  },
  {
    serviceName: "Pesquisa e Busca na Itália",
    customerTitle: "---",
    content:
      "Serviço de pesquisa e busca das certidões de nascimento ou batismo e casamento do ascendente na Itália.",
    image: testimonial2,
  },
  {
    serviceName: "Análise de Documentos",
    customerTitle: "---",
    content:
      "Análise minuciosa e especializada das certidões para o processo de cidadania italiana no Brasil e na Itália.",
    image: testimonial3,
  },
  {
    serviceName: "Montagem do Processo",
    customerTitle: "---",
    content:
      "Reunião dos documentos, análise, retiﬁcação, tradução e apostilamento para o processo no Brasil ou na Itália.",
    image: testimonial3,
  },
  {
    serviceName: "Convocado no Consulado",
    customerTitle: "---",
    content:
      "Preparação das certidões e montagem do processo para convocados pelo Consulado Italiano de Curitiba e São Paulo.",
    image: testimonial3,
  },
  {
    serviceName: "Cidadania na Itália",
    customerTitle: "---",
    content:
      "Preparação de certidões e montagem do processo para solicitação da cidadania italiana na Itália.",
    image: testimonial3,
  },
  {
    serviceName: "Apostilamento de Haia",
    customerTitle: "---",
    content:
      "Assistência para o apostilamento de certidões e traduções em cartórios. Serviço para todo o Brasil.",
    image: testimonial3,
  },
  {
    serviceName: "Tradução de Documentos",
    customerTitle: "---",
    content:
      "Tradução juramentada do português para o italiano para o processo de cidadania italiana e cadastro consular AIRE.",
    image: testimonial3,
  },
];

export const ServicesItaliaToFind = () => (
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
        Para quem busca a Cidadania
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