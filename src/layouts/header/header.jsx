import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars } from "../../assets/icons/bars";
import { Search } from "../../assets/icons/search";
import { UserIcon } from "../../assets/icons/userIcon";
import { Heart } from "../../assets/icons/heart";
import { Cart } from "../../assets/icons/cart";
import { MyDialog } from "../../components/login";
import { useForm } from "react-hook-form";
import { usePostReg } from "../../pages/home/service/mutation/usePostRegister";
import { client } from "../../config/use-query";
import { loadState, saveState } from "../../services/storage";
import { Form } from "../../components/form";
import { useGetCatagries } from "../../pages/home/service/query/useGetCategory";
import { CategoryModal } from "../../components/categoryModal";
import Profile from "../../assets/img/profile.avif";
import { AccountModal } from "../../components/accountModal";
import useDebounce from "../../hook/useDebounce";
import { useGetPhone } from "../../pages/home/service/query/useGetPhone";
import { useGetAllData } from "../../pages/home/service/query/useGetAllData";
import { CategoryDialog } from "../../components/categoryDialog";

export const Header = () => {
  const navigate = useNavigate();
  const locations = useLocation();
  const [catOPen, setCatalog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const search = useDebounce(value);
  const { data: datas } = useGetCatagries();
  const { data, isPending } = useGetAllData(search);

  console.log(data);

  let token = loadState("user");

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const ProfileNavigate = () => {
    setOpen(false);
    navigate("/my-profile");
  };
  const HomeNavigate = () => {
    setOpen(false);
    navigate("/");
  };
  const modal = () => {
    setIsOpen(!isOpen);
  };

  const category = () => {
    setCategoryOpen(!categoryOpen);
  };

  const AccModal = () => {
    setOpen(true);
  };

  return (
    <div className="containerr flex items-center justify-between py-5 ">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="relative">
          <div
            onClick={() => category()}
            className="bg-yellow-400 p-3 flex items-center gap-2 cursor-pointer "
          >
            <Bars /> Каталог
          </div>
          <CategoryDialog
            categoryOpen={categoryOpen}
            setCategoryOpen={setCategoryOpen}
          />
        </div>
      </div>
      <div className="flex relative items-center">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="search"
          type="text"
          className="p-3  border-black border outline-none w-[650px] "
          placeholder="Поиск"
        />
        <label htmlFor="search" className="absolute right-1 cursor-pointer">
          <Search />
        </label>

        <div className="absolute z-10 w-full  top-[100%] ">
          {isPending ? (
            <div className="w-full bg-white shadow-md p-3 text-center">
              <h1>Loading...</h1>
            </div>
          ) : value.length >= 3 ? (
      
              <div className="w-full   h-[50vh] overflow-auto  ">
                {data?.map((item) => (
                  <Link
                    key={item.id}
                    className="border border-gray-300 flex gap-5 bg-white items-center p-3"
                    onClick={(e) => setValue(e.target.reset())}
                    to={`product/${item.datakey}/${item.id}`}
                  >
                    <img className="w-[10%]" src={item.img} alt="" />
                    <span>{item.title}</span>
                  </Link>
                ))}
                {!data?.length && !isPending && (
                  <div className="w-full bg-white shadow-md p-3 text-center">
                    <h1>Not Found</h1>
                  </div>
                )}
              </div>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        {token ? (
          <>
            <img
              onClick={() => AccModal()}
              className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
              src={Profile}
              alt=""
            />
            <AccountModal Opened={Open} setOpen={setOpen}>
              <div className="flex flex-col items-center mb-10">
                <img className="w-[80%] " src={Profile} alt="" />
                <p className="">ID: {token.user.id}</p>
                <h1>
                  {token.user.firstName} {token.user.LastName}
                </h1>
              </div>

              <div className="flex flex-col gap-3 items-center">
                <button
                  className="border border-red-600 bg-red-600 rounded-md outline-none p-2 text-white w-[80%]"
                  onClick={logOut}
                >
                  Выход
                </button>
                <button
                  className="bg-blue-400 p-2 rounded-md w-[80%] text-white"
                  onClick={
                    locations.pathname === "/my-profile"
                      ? HomeNavigate
                      : ProfileNavigate
                  }
                >
                  {locations.pathname === "/my-profile"
                    ? "Перейти на главную"
                    : "Войти в профиль"}
                </button>
              </div>
            </AccountModal>
          </>
        ) : (
          <div
            onClick={() => modal()}
            className="flex flex-col items-center cursor-pointer"
          >
            <UserIcon />
            <span>Войти</span>

            <Form isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
        <div className="flex flex-col items-center cursor-pointer">
          <Heart />
          <span>Избранное</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Cart />
          <span>Корзина</span>
        </div>
      </div>
    </div>
  );
};
