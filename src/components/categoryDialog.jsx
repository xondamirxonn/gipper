import React from "react";
import { CategoryModal } from "./categoryModal";

export const CategoryDialog = ({categoryOpen, setCategoryOpen}) => {
  return (
    <div>
      <CategoryModal categoryOpen={categoryOpen} setCategoryOpen={setCategoryOpen}>
        <h1>Salom</h1>
      </CategoryModal>
    </div>
  );
};
