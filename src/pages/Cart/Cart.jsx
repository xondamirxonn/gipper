import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart } from "../../assets/icons/heart";
import { ToggleCount, remove } from "../../redux/reducer/product-reducer";
import { useNavigate } from "react-router-dom";
import { addQualifier } from "../../redux/reducer/qualifiers-reducer";
import { toast } from "react-toastify";

export const Cart = () => {
  const { products, count, totalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [promo, setPromo] = useState(false);
  const navigate = useNavigate();
  const DeleteProduct = (id) => {
    dispatch(remove({ id }));
  };

  const HomePage = () => {
    navigate("/");
  };

  const AddCount = (id) => {
    dispatch(ToggleCount({ type: "add", id }));
  };

  const AddQualifiers = (item) => {
    dispatch(addQualifier(item))
 
     

     toast("Добавлено успешно", { theme: "colored", type: "success" });
    
  }

  const RemoveCount = (id) => {
    dispatch(ToggleCount({ type: "remove", id }));
  };

  return (
    <div className="p-4 min-h-[43vh]">
      <div className="flex justify-aroud gap-10 items-start ">
        <div className="w-[75%] ">
          {!products.length ? (
            <div className="text-center mt-10 flex flex-col gap-3">
              <h1 className="text-4xl font-bold  ">
                Savatda hozircha mahsulot yoʻq
              </h1>
              <p>
                Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
                qidiruv orqali toping
              </p>
              <button
                onClick={HomePage}
                className="bg-yellow-400 p-2 rounded-md  mx-auto w-[15%]"
              >
                Bosh sahifa
              </button>
            </div>
          ) : (
              products.map((item) => (
              <div key={item.id} className="flex items-center pt-2">
                <div className="w-[30%]">
                  <img className="w-[50%]" src={item.img} alt="" />
                </div>
                <div className="flex justify-between w-full gap-10">
                  <div className="flex flex-col gap-3 ">
                    <h1 className="font-bold ">{item.title}</h1>
                    <div className="flex items-center gap-5 ">
                      <button className="flex items-center gap-2" onClick={() => AddQualifiers(item)}>
                        <Heart className="w-[15px]" /> В избранное
                      </button>
                      <button onClick={() => DeleteProduct(item.id)}>
                        Удалить
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <strong>${item.userPrice}</strong>
                    <div className="border border-gray-200 flex  items-center justify-center -mx-4">
                      <button
                        className="borde w-[50%] text-gray-300 disabled:cursor-not-allowed"
                        onClick={() => RemoveCount(item.id)}
                        disabled={item.userCount <= 1}
                      >
                        -
                      </button>
                      <span className="w-[60%] text-center bg-gray-300">
                        {item.userCount}
                      </span>
                      <button
                        className=" w-[50%] text-gray-300 disabled:cursor-not-allowed"
                        onClick={() => AddCount(item.id)}
                        disabled={item.userCount === item.count}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-[20%] bg-gray-100  fixed right-5 ">
          <div className="p-3 flex flex-col gap-4 ">
            <h1>В корзине</h1>

            <p>Товаров: {count}</p>

            <button
              className="text-red-500 text-start"
              onClick={() => setPromo(!promo)}
            >
              Введите промокод
            </button>
            {promo ? (
              <input
                className="p-2 text-center border border-gray-200 outline-none rounded-md"
                type="text"
                placeholder="Введите промо-код"
              />
            ) : (
              ""
            )}
            <strong>${totalPrice}</strong>
          </div>
          <button className="bg-yellow-400 p-2  w-full">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
