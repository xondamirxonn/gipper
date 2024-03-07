import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { MyDialog } from "../../../components/login";

export const Category = ({ catOpen }) => {
 return <MyDialog isOpen={catOpen}>
    <h1>salom</h1>
  </MyDialog>;
};
