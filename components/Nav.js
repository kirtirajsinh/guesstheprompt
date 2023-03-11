import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import useDevice from "./Common/useDevice";
import ModalWrapper from "./Common/ModalWrapper";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useDevice();
  return (
    <div
      className={`font-font-heading flex justify-between items-center p-4 border-b`}
    >
      <h1 className=" text-center flex-1 text-4xl">Guess the Prompt</h1>
      <div className="flex flex-row items-center space-x-2">
        <BsQuestionCircle
          className="w-8 h-8 "
          onClick={() => setIsModalOpen(true)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="4 4 24 24"
          width="28"
          className=" text-p-text"
          data-testid="icon-statistics"
        >
          <path d="M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z" />
        </svg>
      </div>
      <ModalWrapper isModalOpen={isModalOpen}>Hello</ModalWrapper>
    </div>
  );
};

export default Nav;
