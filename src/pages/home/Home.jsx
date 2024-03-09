import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "./service/query/useGetBanner";
import { BannerCard } from "./components/bannerCard";
import {
  SampleNextArrow,
  SampleNextArrow3,
  SamplePrevArrow,
  SamplePrevArrow3,
} from "./components/arrow";
import { useGetCatagries } from "./service/query/useGetCategory";
import { CategoryData } from "./components/CategoryData";
import { useGetPhone } from "./service/query/useGetPhone";
import { PhoneData } from "./components/PhoneData";
import { useGetBrand } from "./service/query/useGetBrand";
import { useGetDiscount } from "./service/query/useGetDiscount";
import { useGetLaptop } from "./service/query/useGetLaptop";
import { LaptopData } from "./components/LaptopData";
import { loadState } from "../../services/storage";

export const Home = () => {
  const { data } = useGetBanner();
  const { data: categoryData } = useGetCatagries();
  const { data: getPhone, isPending } = useGetPhone();
  const { data: brands } = useGetBrand();
  const { data: discount } = useGetDiscount();
  const { data: laptop, isLoading } = useGetLaptop();
  const token = loadState("user")
  console.log(brands);
  console.log(data);
  console.log(categoryData);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const setting3 = {
    // focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow3 />,
    prevArrow: <SamplePrevArrow3 />,
  };



  return (
    <div>
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {data?.map((item) => (
                <BannerCard key={item.id} {...item} />
              ))}
            </Slider>
          </div>

          <div className="slider-container ">
            <div>
              <Slider {...setting}>
                {categoryData?.map((item) => (
                  <CategoryData key={item.id} {...item} />
                ))}
              </Slider>
            </div>
          </div>

          <section className="p-5 pt-10">
            <h1 className="text-3xl">Смартфоны и планшеты</h1>

            <div className="slider-container pt-5">
              <Slider {...setting3}>
                {isPending ? (
                  <h1>Loading...</h1>
                ) : (
                  getPhone?.map((item) => <PhoneData key={item.id} {...item} />)
                )}
              </Slider>
            </div>
          </section>
        </div>
      )}

      <section className="bg-yellow-400 p-5 mt-20">
        <h1 className="text-3xl font-bold">Акции</h1>

        <div className="flex justify-between mt-10">
          {discount?.map((item) => (
            <img key={item.id} src={item.img} alt="" />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-3 items-center containerr w-[100%] gap-4 pt-32">
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Смартфоны и планшеты</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {getPhone?.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-4 relative rounded-md  shadow-md ">
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Ноутбуки, планшеты и компьютеры</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {laptop?.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-4 relative rounded-md shadow-md ">
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Смартфоны и планшеты</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {getPhone?.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-4 relative rounded-md shadow-md ">
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4 pt-10">
        <h1 className="text-2xl ">Смартфоны и планшеты</h1>

        <div className="slider-container pt-5">
          <Slider {...setting3}>
            {isPending ? (
              <h1>Loading...</h1>
            ) : (
              getPhone?.map((item) => <PhoneData key={item.id} {...item} />)
            )}
          </Slider>
        </div>
      </section>

      <section className="p-4 pt-10 ">
        <h1 className="text-2xl ">Ноутбуки, планшеты и компьютеры</h1>

        <div className="slider-container pt-5">
          <Slider {...setting3}>
            {isPending ? (
              <h1>Loading...</h1>
            ) : (
              laptop?.map((item) => <LaptopData key={item.id} {...item} />)
            )}
          </Slider>
        </div>
      </section>

      <section className="p-4 pt-20">
        <h1 className="text-3xl">Популярные бренды</h1>
        <div className=" grid grid-cols-7 gap-5 pt-5 items-center">
          {brands?.map((item) => (
            <div key={item.id} className="p-3  w-[100%]">
              <img key={item.id} src={item.img} alt="" />
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};
