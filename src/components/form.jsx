import React, { useState } from "react";
import { MyDialog } from "./login";
import { useForm } from "react-hook-form";
import { usePostReg } from "../pages/home/service/mutation/usePostRegister";
import { loadState, saveState } from "../services/storage";
import { usePostLogin } from "../pages/home/service/mutation/usePostLogin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Form = ({ isOpen, setIsOpen }) => {
  let [active, setActive] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const { mutate, isPending } = usePostReg();
  const { mutate: loginMutete, isPending: isLoading } = usePostLogin();
  const navigate = useNavigate();
  const token = loadState("user");
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        saveState("user", data);
       
        reset();
        navigate("/")
      },
    });
  };

  const loginSubmit = (data, e) => {
    loginMutete(data, {
      onSuccess: (data) => {
        console.log(data);
        saveState("user", data);

        // loadState("user");
        reset();
        
      },
      onError: (error) => {
        toast(error.response.data, { theme: "colored", type: "error" });
        console.log(error);
        reset()
      },
    });
  };

  return (
    <div>
      <MyDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        {active ? (
          <form className="" onSubmit={handleSubmit(submit)}>
            <h1 className="text-3xl text-center mb-3">зарегистрироваться</h1>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="firstName">Имя</label>
                <input
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className="border border-black outline-none p-2 rounded-md"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="LastName">фамилия</label>
                <input
                  id="LastName"
                  {...register("LastName", { required: true })}
                  className="border border-black outline-none p-2 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="phone">Номер телефона</label>
                <input
                  id="phone"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("phoneNumber", { required: true })}
                  type="tel"
                  placeholder="998 xx xxx xx xx"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">электронная почта*</label>
                <input
                  id="email"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("email", { required: true })}
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Пароль*</label>
              <input
                id="password"
                className="border border-black outline-none p-2 rounded-md"
                {...register("password", { required: true })}
                type="password"
              />
            </div>
            <button className="bg-yellow-400 p-3 w-full mt-3">
              {isPending ? "Loading..." : "Зарегистрироваться"}
            </button>
            <button
              type="button"
              onClick={() => setActive(false)}
              className="p-3 bg-gray-200 w-full mt-2"
            >
              Войти
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(loginSubmit)}>
            <h1 className="text-center text-3xl mb-3">авторизоваться</h1>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex flex-col">
                <label htmlFor="email">электронная почта</label>
                <input
                  id="email"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Пароль</label>
                <input
                  id="password"
                  className="border border-black outline-none p-2 rounded-md"
                  {...register("password", { required: true })}
                  type="password"
                />
              </div>
              <button
                className={`bg-yellow-400 p-3 ${
                  isLoading ? 'disabled:cursor-not-allowed' : ""
                }`}
                disabled={isLoading}
                
              >
                {isLoading ? "Loading..." : "Войти"}
              </button>

              <button
                type="button"
                onClick={() => setActive(true)}
                className="p-3 border border-gray-300 "
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        )}
      </MyDialog>
    </div>
  );
};
