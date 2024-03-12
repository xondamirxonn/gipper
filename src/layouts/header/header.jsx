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
import { useSelector } from "react-redux";
import { productLength } from "../../redux/reducer/product-reducer";

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

  const { count } = useSelector((state) => state.product);
  const { qualifiersCount } = useSelector((state) => state.qualifier);
  console.log(qualifiersCount);
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

  const CartPage = () => {
    navigate("/cart");
  };

  return (
    <div className="mx-auto fixed top-0  w-full shadow-xl bg-white z-30 ">
      <div className="containerr   flex items-center justify-between py-5 gap-20 ">
        <div className="flex items-center ">
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
            {value.length >= 3 ? (
              isPending ? (
                <div className="bg-white ">
                  <div
                    role="status"
                    className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 "
                  >
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                      <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                      <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                      <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                      <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
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
              )
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
          <div
            onClick={() => navigate("/qualifiers")}
            className="flex flex-col items-center cursor-pointer relative"
          >
            <Heart />
            <span>Избранное</span>
            <span className="bg-red-500 absolute right-4 bottom-8  rounded-full w-[23px] h-[23px] flex items-center justify-center text-white">
              {qualifiersCount}
            </span>
          </div>
          <div
            onClick={CartPage}
            className="flex flex-col items-center cursor-pointer relative"
          >
            <Cart />
            <span>Корзина</span>
            <span className="bg-red-500 absolute right-2 bottom-8  rounded-full w-[23px] h-[23px] flex items-center justify-center text-white">
              {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
