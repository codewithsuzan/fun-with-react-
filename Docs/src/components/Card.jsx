import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{bounceStiffness:100,bounceDamping:30}}
      className="relative flex-shrink-0 px-5 py-10 text-white w-60 h-72 bg-zinc-900/90 rounded-[45px] overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        {data.description}
      </p>
      <div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between mb-5 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <FiDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`
            ${
              data.tagDetails.tagColor === "blue"
                ? "bg-blue-600"
                : "bg-green-600"
            }
            tag flex items-center justify-center w-full py-4 bg-blue-600`}
          >
            <h3 className="tex-sm font-semibold">{data.tagDetails.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
