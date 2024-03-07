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

export const Home = () => {
  const { data } = useGetBanner();
  const { data: categoryData } = useGetCatagries();
  const { data: getPhone , isPending} = useGetPhone();
  const {data: brands} = useGetBrand()
  const {data: discount} = useGetDiscount()
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

          <section className="containerr pt-10">
            <h1 className="text-3xl">Смартфоны и планшеты</h1>

            <div className="slider-container pt-5">
              <Slider {...setting3}>
                {isPending ? (
                  <h1>Loading...</h1>
                ) : (
                  getPhone?.map((item) => <PhoneData {...item} />)
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

      <section className="containerr pt-20">
        <h1 className="text-3xl">Популярные бренды</h1>
        <div className=" grid grid-cols-7 gap-5 pt-5 items-center">
          {brands?.map((item) => (
            <div className="p-3  w-[100%]">
              <img key={item.id} src={item.img} alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
