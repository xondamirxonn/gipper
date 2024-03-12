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
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, isLoading: isLoad } = useGetBanner();
  const { data: categoryData, isLoading: categoryLoading } = useGetCatagries();
  const { data: getPhone, isPending } = useGetPhone();
  const { data: brands, isLoading: brandLoading } = useGetBrand();
  const { data: discount, isLoading: discountLoading } = useGetDiscount();
  const { data: laptop, isLoading } = useGetLaptop();

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
       responsive: [
      {
        breakpoint: 1024,
        setting3: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        setting3: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        setting3: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div>
        {isLoad ? (
          <div className=" p-5 flex justify-center">
            <div className=" flex items-center justify-center h-[60vh] w-full bg-gray-300 rounded-xl animate-pulse dark:bg-gray-300">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {data?.map((item) => (
                <BannerCard key={item.id} {...item} />
              ))}
            </Slider>
          </div>
        )}

        <div>
          {categoryLoading ? (
            <div className="flex items-center justify-between pt-10">
              {[...Array(5)].map((_, i) => (
                <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
                  <div class="flex items-center w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-400 w-20"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-400 w-full"></div>
                  </div>
                  <div class="flex items-center w-full max-w-[250px]">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-400 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-400 w-24"></div>
                  </div>
                  <div class="flex items-center w-full max-w-[220px]">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-full"></div>
                  </div>
                  <div class="flex items-center w-full max-w-[250px]">
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-24"></div>
                  </div>
                  <div class="flex items-center w-full max-w-[240px]">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-full"></div>
                  </div>
                  <div class="flex items-center w-full max-w-[160px]">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-500 w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="slider-container ">
              <div className="">
                <Slider {...setting}>
                  {categoryData?.map((item) => (
                    <CategoryData key={item.id} {...item} />
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>
        <section className="p-5 pt-10">
          <h1 className="text-3xl">Смартфоны и планшеты</h1>

          {isPending ? (
            <div className="flex items-center justify-between w-full mt-5">
              {[...Array(5)].map((_, i) => (
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      class="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-center mt-4">
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="slider-container pt-5">
              <Slider {...setting3}>
                {getPhone?.map((item) => (
                  <PhoneData key={item.id} {...item} />
                ))}
              </Slider>
            </div>
          )}
        </section>
      </div>

      <section className="bg-yellow-400 p-5 mt-20">
        <h1 className="text-3xl font-bold">Акции</h1>

        <div className="flex justify-between mt-10">
          {discountLoading ? (
            <div className="flex justify-between w-full">
              {[...Array(3)].map((_, i) => (
                <div
                  role="status"
                  class="flex items-center justify-center h-56 w-[400px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                >
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          ) : (
            discount?.map((item) => <img key={item.id} src={item.img} alt="" />)
          )}
        </div>
      </section>
      <section className="grid grid-cols-3 items-center containerr w-[100%] gap-4 pt-32">
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Смартфоны и планшеты</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {getPhone?.slice(0, 3).map((item) => (
            <Link
              to={`/product/${item.datakey}/${item.id}`}
              key={item.id}
              className="flex gap-4 relative rounded-md  shadow-md "
            >
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Ноутбуки, планшеты и компьютеры</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {laptop?.slice(0, 3).map((item) => (
            <Link
              to={`/product/${item.datakey}/${item.id}`}
              key={item.id}
              className="flex gap-4 relative rounded-md shadow-md "
            >
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <div>
            <h1>Смартфоны и планшеты</h1>
            <div className="border border-b-0 mt-2 border-gray-300"></div>
          </div>
          {getPhone?.slice(0, 3).map((item) => (
            <Link
              to={`/product/${item.datakey}/${item.id}`}
              key={item.id}
              className="flex gap-4 relative rounded-md shadow-md "
            >
              <img className="w-[50%]" src={item.img} alt="" />
              <div className="flex flex-col justify-aroun">
                <h1 className="absolute top-2">{item.title}</h1>
                <strong className="absolute bottom-1">${item.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* <section className="p-4 pt-10">
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
      </section> */}
      <section className="p-5 pt-10">
        <h1 className="text-3xl">Смартфоны и планшеты</h1>

        {isPending ? (
          <div className="flex items-center justify-between w-full mt-5">
            {[...Array(5)].map((_, i) => (
              <div
                role="status"
                class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div class="flex items-center mt-4">
                  <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="slider-container pt-5">
            <Slider {...setting3}>
              {getPhone?.map((item) => (
                <PhoneData key={item.id} {...item} />
              ))}
            </Slider>
          </div>
        )}
      </section>
      {/* <section className="p-4 pt-10 ">
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
      </section> */}
      <section className="p-5 pt-10">
        <h1 className="text-3xl">Смартфоны и планшеты</h1>

        {isPending ? (
          <div className="flex items-center justify-between w-full mt-5">
            {[...Array(5)].map((_, i) => (
              <div
                role="status"
                class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div class="flex items-center mt-4">
                  <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="slider-container pt-5">
            <Slider {...setting3}>
              {laptop?.map((item) => (
                <PhoneData key={item.id} {...item} />
              ))}
            </Slider>
          </div>
        )}
      </section>
      <section className="p-4 pt-20">
        <h1 className="text-3xl">Популярные бренды</h1>
        {brandLoading ? (
          <div className="grid grid-cols-7 w-full gap-5 pt-10">
            {[...Array(16)].map((_, i) => (
              <div
                role="status"
                class="flex items-center justify-center h-32 w-[200px]  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-7 gap-5 pt-5 items-center">
            {brands?.map((item) => (
              <div key={item.id} className="p-3  w-[100%]">
                <img key={item.id} src={item.img} alt="" />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
