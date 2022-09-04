import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";

import confirmPopupContext from "../contexts/confirmPopupContext";
import tokenContext from "../contexts/tokenContext";
const ConfirmBox = ({ type }) => {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0,
      },
    },
  };
  const { token } = useContext(tokenContext);
  const { popup, setPopup } = useContext(confirmPopupContext);
  const deleteItem = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/${type}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  };
  /* eslint-disable */
  const escapeDown = useCallback((event) => {
    if (event.keyCode === 27) {
      setPopup(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
  }, []);
  /* eslint-enable */
  function handleYes() {
    deleteItem(popup[1]);
    setPopup(false);
    document.querySelector(`#${popup[1]}`).remove();
  }
  function handleNo() {
    setPopup(false);
  }

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          onClick={() => setPopup(!popup)}
          tabIndex="-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="z-40 fixed inset-0 backdrop-blur bg-black/75 flex justify-center items-center"
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            initial={{ x: "100vh", y: "100vw", scale: 0 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            exit={{ x: "100vh", y: "100vw", scale: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[420px] transition-transform-500 flex flex-col gap-5 shadow-normal bg-primary-theme rounded-2xl p-6"
          >
            <BsExclamationCircle className="text-primary-color" size="40" />
            <h2 className=" font-semibold text-primary-text text-xl">
              Are you sure?
            </h2>
            <p className="text-lg text-primary-text">
              Are you sure you want to delete this {type.slice(0, -1)}?
            </p>
            <div className="flex justify-between gap-12">
              <motion.button
                onClick={() => {
                  handleYes();
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="dialog button"
                className="bg-primary-color rounded-lg py-3 text-white px-8 w-full font-semibold outline-none"
              >
                Yes, delete
              </motion.button>
              <motion.button
                onClick={handleNo}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="dialog button"
                className="bg-transparent rounded-lg py-3 border-gray-300 border-2 text-gray-300 px-8 w-full font-semibold outline-none"
              >
                Cancel
              </motion.button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmBox;
