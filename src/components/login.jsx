import { Dialog } from "@headlessui/react";

export const MyDialog = ({ isOpen, setIsOpen,  children }) => {
  return (
    <Dialog
      open={isOpen}   
      onClose={() => setIsOpen(false) }
      className="relative z-50 p-3"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-5 bg-[#00000065] ">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-5">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
