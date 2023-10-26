import { useState } from "react";
import { motion } from "framer-motion";
import italia from "../assets/images/italia.png";
import espanha from "../assets/images/espanha.png";
import portugal from "../assets/images/portugal.png";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

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
                Selecione o País que deseja a Cidadania
              </h2>
              <p className="mb-6 text-customGrayText">
                Cada país temos um serviço personalizado.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">

                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      ITÁLIA
                    </h4>
                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={italia}
                        alt="123"
                        className=""
                      />
                    </div>

                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      PORTUGAL
                    </h4>

                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={portugal}
                        alt="123"
                        className=""
                      />
                    </div>

                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <a
                    className="text-gray-400 hover:text-gray-300"
                    href="/italia"
                    aria-label=""
                  >
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      ESPANHA
                    </h4>

                    <div className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      <img
                        src={espanha}
                        alt="123"
                        className=""
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
