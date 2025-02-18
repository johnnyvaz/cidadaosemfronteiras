import { motion } from "framer-motion";
import italia from "../assets/images/italia.png";
import espanha from "../assets/images/espanha.png";
import portugal from "../assets/images/portugal.png";

export const SelectPais = () => {

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="SelectPais" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <br />
              <br />

              <span className="custom-block-subtitle">
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Selecione sua origem
              </h2>
              <p className="mb-6 text-customGrayText">
                Para cada país, um serviço personalizado.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
            <div className="p-8 justify-center">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      PORTUGUESA
                    </h4>
                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={portugal}
                        alt="portuguesa"
                        className="bg-customDarkBg3 rounded-2xl"
                      />
                    </div>

                  </a>
                </div>
              </div>
              <div className="p-8 justify-center">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      ITALIANA
                    </h4>
                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={italia}
                        alt="italiana"
                        className="bg-customDarkBg3 rounded-2xl"
                      />
                    </div>

                  </a>
                </div>
              </div>
              <div className="p-8 justify-center">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      ESPANHOLA
                    </h4>
                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={espanha}
                        alt="espanhola"
                        className="bg-customDarkBg3 rounded-2xl"
                      />
                    </div>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
