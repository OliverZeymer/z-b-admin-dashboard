import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${type}/${id}`, {
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
  function handleYes(event) {
    deleteItem(popup[1]);
    setPopup(false);
  }
  function handleNo(event) {
    setPopup(false);
    console.log(event.target);
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
            className="relative transition-transform-500 flex flex-col justify-between bg-primary-background shadow-2xl rounded-3xl p-16"
          >
            <h1 className="text-3xl text-primary-text">Are you sure you wanna do that?</h1>

            <div className="flex justify-evenly mt-8">
              <motion.button
                onClick={(event) => {
                  handleYes(event);
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="dialog button"
                className="bg-green-600 rounded text-white px-10 py-4 font-semibold tracking-wider outline-none uppercase"
              >
                Yes
              </motion.button>
              <motion.button
                onClick={handleNo}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="dialog button"
                className="bg-red-600 rounded text-white px-10 py-4 font-semibold tracking-wider outline-none uppercase"
              >
                No
              </motion.button>
            </div>
            <button
              onClick={function () {
                setPopup(!popup);
              }}
              className="button p-1 border-none text-3xl absolute top-1 right-3 bg-transparent text-red-500 hover:text-red-900 rounded-full"
            >
              <RiCloseCircleLine color="red" className="hover:scale-125 duration-300" />
            </button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmBox;
