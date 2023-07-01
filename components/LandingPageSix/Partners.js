import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


const Partners = () => {
    return (
        <div className="logo-area ptb-100">
            <div className="container">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 5,
                        },
                    }}
                    className="mySwiper logo-slider"
                >
                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo1.png" alt="Logo" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo2.png" alt="Logo" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo3.png" alt="Logo" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo4.png" alt="Logo" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo5.png" alt="Logo" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="logo-item text-center">
                            <img src="/images/logo/logo3.png" alt="Logo" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Partners;