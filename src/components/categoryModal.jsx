import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { MyDialog } from "./login";

export const CategoryModal = ({ categoryOpen, setCategoryOpen, children, className }) => {
  return (
    <Dialog
    
      open={categoryOpen}
      onClose={() => setCategoryOpen(false)}
      className={`relative z-50 p-3 ${className}` }
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-5  bg-[#00000065] ">
        <Dialog.Panel className=" h-[80vh] w-[60%] rounded bg-white p-5">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
