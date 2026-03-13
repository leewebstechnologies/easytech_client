"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/bundle";
import { useState, useEffect } from "react";
import {API_BASE_URL, IMAGE_BASE_URL} from "@/config/config";
import ClipLoader from "react-spinners/ClipLoader";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(slider);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/slider`)
        const data = await response.json();
        setSlider(data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[500]">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <div className="slider-block">
          <div className="prev-arrow items-center justify-center">
            <Icon.CaretLeftIcon className="text-white heading6" weight="bold" />
          </div>
          <div className="slider-main">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".next-arrow",
                prevEl: ".prev-arrow",
              }}
              loop={true}
              pagination={{ clickable: true }}
              speed={400}
              modules={[Pagination, Autoplay, Navigation]}
              className="h-full relative"
              autoplay={{ delay: 4000 }}
            >
              {slider.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slider-item slider-first">
                    <div className="bg-img">
                      <Image
                        src={`${IMAGE_BASE_URL}/${item.image}`}
                        width={4000}
                        height={3000}
                        alt={item.image}
                        priority={true}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="container">
                      <div className="text-content flex-column-between">
                        <div className="heading2">
                          <div className="relative overflow-hidden">
                            <span className="block relative overflow-hidden">
                              {item.heading}
                            </span>
                            <span className="block absolute top-0 left-0 w-full h-full">
                              {item.heading}
                            </span>
                          </div>
                        </div>
                        <div className="body2 mt-3 text-secondary">
                         {item.description}
                        </div>
                        <div className="button-block md:mt-10 mt-6">
                          <Link
                            href="/services"
                            className="button-main bg-blue-700 text-white hover:bg-blue-500"
                          >
                            Discover Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* <SwiperSlide>
                <div className="slider-item slider-first">
                  <div className="bg-img">
                    <Image
                      src={"/images/slider/two.jpg"}
                      width={4000}
                      height={3000}
                      alt="slider1"
                      priority={true}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="container">
                    <div className="text-content flex-column-between">
                      <div className="heading2">
                        <div className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            Easy to use
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            Easy to use
                          </span>
                        </div>
                        <div className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            Our Solution
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            Our Solution
                          </span>
                        </div>
                      </div>
                      <div className="body2 mt-3 text-secondary">
                        Your Wealth, Optimized with Intelligence axis
                        <br />
                        Track, diversify, and grow your digital and traditional
                        assets with real-time insights and automated portfolio
                        tools.
                      </div>
                      <div className="button-block md:mt-10 mt-6">
                        <Link
                          href="/service"
                          className="button-main bg-blue-700 text-white hover:bg-blue-500"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider-item slider-first">
                  <div className="bg-img">
                    <Image
                      src={"/images/slider/three.jpg"}
                      width={4000}
                      height={3000}
                      alt="slider1"
                      priority={true}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="container">
                    <div className="text-content flex-column-between">
                      <div className="heading2">
                        <div className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            User-centric and top-notch
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            User-centric and top-notch
                          </span>
                        </div>
                        <div className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            Our Solution
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            Our Solution
                          </span>
                        </div>
                      </div>
                      <div className="body2 mt-3 text-secondary">
                        Make Confident Investment Decisions
                        <br />
                        Our analysts provide tailored investment advice backed
                        by data, market trends, and proven financial strategies.
                      </div>
                      <div className="button-block md:mt-10 mt-6">
                        <Link
                          href="/service"
                          className="button-main bg-blue-700 text-white hover:bg-blue-500"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="next-arrow items-center justify-center">
            <Icon.CaretRightIcon
              className="text-white heading6"
              weight="bold"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Slider;
