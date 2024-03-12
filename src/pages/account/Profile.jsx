// import React, { useState } from "react";
// import { loadState, saveState } from "../../services/storage";
// import { CategoryModal } from "../../components/categoryModal";
// import { MyDialog } from "../../components/login";
// import { useForm } from "react-hook-form";
// import { useEdit } from "./service/mutation/useEdit";

// export const Profile = () => {
//   const [open, setOpen] = useState(false);
//   const [edit, setEdit] = useState(false);
//   const token = loadState("user");
//   const email = token.user.email;
//   const [username, domain] = email.split("@");
//   const {register, reset, handleSubmit} = useForm()

//   const {mutate, isPending} = useEdit()

//   const editProfile = (data) => {
//     mutate(data, {
//       onSuccess: (data) => {
//         saveState("user", data)
//         console.log(data);
//         reset()
//       }
//     })
//   }

//   const hiddenUsername =
//     username.charAt(0) +
//     "*".repeat(username.length - 2) +
//     username.charAt(username.length - 1);


//   return (
//     <div className="containerr">
//       <div className="flex gap-5">
//         <div className="flex flex-col w-[25%] gap-4">
//           <button className="border p-3 border-black">
//             Персональные данные
//           </button>
//           <button className="border p-3 border-black">Мои заказы</button>
//           <button className="border p-3 border-black">Адреса</button>
//           <button className="border p-3 border-black">Избранные товары</button>
//           <button className="border p-3 border-black">Уведомления</button>
//         </div>
//         <div className="w-[90%] flex flex-col gap-2">
//           <h1>Персональные данные</h1>
//           <div className="flex items-end gap-5 mt-3">
//             <p>ID пользователя</p>
//             <span className="border w-[60%] border-gray-400 "></span>
//             <p>{token.user.id}</p>
//           </div>
//           <div className="flex gap-6 items-end ">
//             <p>Имя и фамилия</p>
//             <span className="border  w-[60%] border-gray-400 "></span>
//             <p>
//               {token.user.firstName} {token.user.LastName}
//             </p>
//           </div>{" "}
//           <div className="flex gap-4 items-end ">
//             <p>Номер телефона</p>
//             <span className="border  w-[60%] border-gray-400 "></span>
//             <p>+{token.user.phoneNumber}</p>
//           </div>{" "}
//           <div className="flex gap-7 items-end ">
//             <p>Дата рождения</p>
//             <span className="border  w-[60%] border-gray-400 "></span>
//           </div>
//           <div className="flex gap-4 items-end ">
//             <p>Электронная почта</p>
//             <span className="border  w-[58.3%] border-gray-400 "></span>
//             <p>
//               {hiddenUsername}@{domain}
//             </p>
//             <button
//               onClick={() => setOpen(!open)}
//               className="bg-green-400 rounded-md text-white"
//             >
//               посмотреть почту
//             </button>
//             <MyDialog isOpen={open} setIsOpen={setOpen}>
//               <span className="text-2xl">Ваш адрес электронной почты</span>
//               <input
//                 disabled
//                 className="w-full text-center mt-4"
//                 type="text"
//                 value={token.user.email}
//               />

//               <div className="flex justify-end mt-5">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="bg-blue-400 p-2 rounded-md text-white"
//                 >
//                   закрывать
//                 </button>
//               </div>
//             </MyDialog>
//           </div>
//           <button
//             className="text-red-500 w-[15%] mt-3 text-start"
//             onClick={() => setEdit(!edit)}
//           >
//             ИЗМЕНИТЬ
//           </button>
//           <MyDialog setIsOpen={setEdit} isOpen={edit}>
//             <form onSubmit={handleSubmit(editProfile)}>
//               <input
//                 {...register("firstName")}
//                 // value={token?.user?.firstName}
//                 type="text"
//               />
//               <input
//                 {...register("LastName")}
//                 // value={token?.user?.LastName}
//                 type="text"
//               />
//               {/* <input type="date" {...register("date")} /> */}
//               <button className="bg-yellow-400 p-3 w-full">
//                 Редактировать
//               </button>
//             </form>
//           </MyDialog>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { loadState, saveState } from "../../services/storage";
import { CategoryModal } from "../../components/categoryModal";
import { MyDialog } from "../../components/login";
import { useForm } from "react-hook-form";
import { useEdit } from "./service/mutation/useEdit";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const token = loadState("user");
  const email = token.user.email;
  const [username, domain] = email.split("@");
  const { register, reset, handleSubmit } = useForm();
  const { mutate, isPending } = useEdit();

  const editProfile = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        console.log(data);
        reset();
      },
    });
    console.log(data);
  };

  const hiddenUsername =
    username.charAt(0) +
    "*".repeat(username.length - 2) +
    username.charAt(username.length - 1);

  return (
    <div className="containerr pt-10">
      <div className="flex gap-5 mb-10">
        <div className="flex flex-col w-[25%] gap-4">
          <button className="border p-3 border-black">
            Персональные данные
          </button>
          <button className="border p-3 border-black">Мои заказы</button>
          <button className="border p-3 border-black">Адреса</button>
          <button className="border p-3 border-black">Избранные товары</button>
          <button className="border p-3 border-black">Уведомления</button>
        </div>
        <div className="w-[90%] flex flex-col gap-2">
          <h1>Персональные данные</h1>
          <div className="flex items-end gap-5 mt-3">
            <p>ID пользователя</p>
            <span className="border w-[60%] border-gray-400 "></span>
            <p>{token.user.id}</p>
          </div>
          <div className="flex gap-6 items-end ">
            <p>Имя и фамилия</p>
            <span className="border  w-[60%] border-gray-400 "></span>
            <p>
              {token.user.firstName} {token.user.LastName}
            </p>
          </div>{" "}
          <div className="flex gap-4 items-end ">
            <p>Номер телефона</p>
            <span className="border  w-[60%] border-gray-400 "></span>
            <p>+{token.user.phoneNumber}</p>
          </div>{" "}
          <div className="flex gap-7 items-end ">
            <p>Дата рождения</p>
            <span className="border  w-[60%] border-gray-400 "></span>
          </div>
          <div className="flex gap-4 items-end ">
            <p>Электронная почта</p>
            <span className="border  w-[58.3%] border-gray-400 "></span>
            <p>
              {hiddenUsername}@{domain}
            </p>

            <MyDialog isOpen={open} setIsOpen={setOpen}>
              <span className="text-2xl">Ваш адрес электронной почты</span>
              <input
                disabled
                className="w-full text-center mt-4"
                type="text"
                value={token.user.email}
              />

              <div className="flex justify-end mt-5">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-400 p-2 rounded-md text-white"
                >
                  закрывать
                </button>
              </div>
            </MyDialog>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="bg-yellow-400 rounded-md text-white p-2 w-[20%] "
            >
              посмотреть почту
            </button>
          </div>
          <button
            className="text-red-500 w-[15%] mt-3 text-start"
            onClick={() => setEdit(!edit)}
          >
            ИЗМЕНИТЬ
          </button>
          <MyDialog setIsOpen={setEdit} isOpen={edit}>
            <form onSubmit={handleSubmit(editProfile)}>
              <input
                {...register("firstName")}
                defaultValue={token?.user?.firstName}
                type="text"
              />
              <input
                {...register("LastName")}
                defaultValue={token?.user?.LastName}
                type="text"
              />
              <input
                {...register("phoneNumber")}
                defaultValue={token?.user?.phoneNumber}
                type="text"
              />
              <button className="bg-yellow-400 p-3 w-full">
                Редактировать
              </button>
            </form>
          </MyDialog>
        </div>
      </div>
    </div>
  );
};
