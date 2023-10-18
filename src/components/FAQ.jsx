import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Prezados visitantes",
    answer: "É com grande satisfação que informamos que o site 'Cidadão Sem Fronteiras' está atualmente em desenvolvimento. Estamos trabalhando diligentemente para criar uma plataforma que atenda às suas necessidades relacionadas à documentação de nacionalidade estrangeira para Portugal, Itália e Espanha. \n " +
    "Nosso compromisso é fornecer informações detalhadas e serviços especializados para aqueles que buscam explorar as oportunidades e os processos de obtenção de nacionalidade em países estrangeiros. Com anos de experiência nessa área, nossa equipe está empenhada em facilitar o acesso a informações precisas e relevantes, bem como a assistência prática durante todo o processo \n" +
    "Em breve, você poderá explorar nosso site, onde encontrará uma descrição abrangente de nossos serviços, informações úteis, e orientações sobre como dar início ao processo de obtenção de nacionalidade estrangeira." +
    "Agradecemos sua paciência enquanto trabalhamos para criar uma plataforma que atenda às suas expectativas. Estamos ansiosos para compartilhar nosso conhecimento e assistência com você." +
    "Atenciosamente," +
    "A equipe do Cidadão Sem Fronteiras"
  }
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Em desenvolvimento
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Cidadão sem Froteiras
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
