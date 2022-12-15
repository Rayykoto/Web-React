import React from 'react';
import { Data } from "./Data";

//dari swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className="testimonial section">
        <h2 className="section__title">My Client Say</h2>
        <span className="section__subtitle">Testimonials</span>

        <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({ id, image, title, description }) => {
                return (
                    <SwiperSlide className="testimonial__content" key={id}>
                    <div className="testimonial__data">
                      <div className="testimonial__header">
                          <img src={image} alt="" className="testimonial__img" />
                        <div>
                          <h3 className="testimonial__name">{title}</h3>
                          <p className="testimonial__description">{description}</p>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide> 
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials;