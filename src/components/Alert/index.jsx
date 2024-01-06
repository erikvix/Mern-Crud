import React from "react";
import Icon from "@/components/Icon";
import "./Alert.css";
import { MdCheckCircle, MdClose } from "react-icons/md";

export default function Alert({ icon = MdCheckCircle, children, isOpen }) {
  return isOpen ? (
    <div className="fixed bottom-7 right-7 z-50 ease-in-out duration-200">
      <div className="bg-gray-50 shadow-xl dark:bg-slate-900 w-[250px] h-20 flex justify-between rounded-2xl">
        <div className="flex items-center gap-2 ml-3">
          <Icon icon={icon} color="#22c55e"></Icon>
          <p className="text-slate-950 dark:text-white">{children}</p>
        </div>
        <MdClose className="mr-2 mt-1 text-slate-950 dark:text-white" />
      </div>
    </div>
  ) : null;
}
