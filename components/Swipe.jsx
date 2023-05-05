import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Swipe() {
  return (
    <div className="bg-stone-100  p-4 h-48 text-black z-10">
      <div className="container-sm">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper -z-10 text-center "
        >
          <SwiperSlide>
            <h2 className="text-amber-600 text-sm">
              We are dedicated to providing top-quality components
            </h2>
            <p className="text-black p-6 text-xl">
              Our vast selection includes everything from CPUs and GPUs to
              motherboards and storage devices.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="text-amber-600 text-sm">
              We are dedicated to providing top-quality components
            </h2>
            <p className="text-black p-6 text-xl">
              We&apos;re pleased to offer free delivery
              <span>
                {" "}
                <CiDeliveryTruck className="inline" />{" "}
              </span>
              on all orders over $300!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="text-amber-600 text-sm">
              We are dedicated to providing top-quality components
            </h2>
            <p className="text-black p-6 text-xl">
              Standard delivery time for orders is 3-4 working days
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
