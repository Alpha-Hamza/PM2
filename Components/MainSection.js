/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function MainSection() {
  // map_loop_for_cards
  let cards = [
    {
      id: 1,
      heading: "Technology",
      img: "/Images/LS.svg",
      text: "View more",
    },
    {
      id: 2,
      heading: "Crypto",
      img: "/Images/LS1.svg",
      text: "View more",
    },
    {
      id: 3,
      heading: "Industrials",
      img: "/Images/LS2.svg",
      text: "View more",
    },
    {
      id: 4,
      heading: "Healthcare",
      img: "/Images/LS3.svg",
      text: "View more",
    },
  ];
  // map_loop_for_slider
  let slider = [
    {
      id: 1,
      img: "/Images/gme.svg",
      heading: "GameStop",
      text: "NYSE: GME",
      text2: "$234.84",
      text3: "+9.85%",
    },
    {
      id: 2,
      img: "/Images/tsl.svg",
      heading: "TSL",
      text: "NYSE: GME",
      text2: "$428.94",
      text3: "-2.31%",
    },
    {
      id: 3,
      img: "/Images/bt.svg",
      heading: "BIT",
      text: "NYSE: GME",
      text2: "$35234.84",
      text3: "+10.9%",
    },
    {
      id: 4,
      img: "/Images/gme.svg",
      heading: "GameStop",
      text: "NYSE: GME",
      text2: "$234.84",
      text3: "+9.85%",
    },
    {
      id: 5,
      img: "/Images/gme.svg",
      heading: "GameStop",
      text: "NYSE: GME",
      text2: "$234.84",
      text3: "+9.85%",
    },
  ];

  return (
    <div className="  sm:ml-8 sm:pl-0 pl-14 mt-[12px] pb-[6%] rounded-[12px] 2xl:w-[80%] lg:w-[75%] md:w-[70%] sm:w-[65%] w-[100%] mx-auto container    ">
      <h1 className="text-center text-gray-50 text-3xl font-semibold mt-[35px]">
        Trending Markets
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          depth: 158.5,
          modifier: 2,
          stretch: 100,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper w-[90%]    "
      >
        {/* card_1 */}
        {/* cards_div */}
        {slider?.map((single, index) => (
          <SwiperSlide key={index}>
            <div className="un_active_cards  mt-8 rounded-xl bg-color ">
              <div className="py-[30px]">
                {/* card_header_div */}
                <div className="flex justify-between px-8 ">
                  {/* left_side_div */}
                  <div className="flex items-center">
                    {/* img_div */}
                    <div>
                      <img src={single.img} />
                    </div>
                    {/* text_div */}
                    <div className="pl-2">
                      <p className="text-xl font-semibold text-white">
                        {single.heading}
                      </p>
                      <p className="text-xs font-normal text-white pt-2">
                        {single.text}
                      </p>
                    </div>
                  </div>
                  {/* right_side_div */}
                  <div>
                    <div className="follow w-full rounded-2xl">
                      {/* img_text */}
                      <div className="flex items-center py-2 px-[18px] cursor-pointer">
                        <div>
                          <img src="/Images/add.svg" alt="" className="pr-1" />
                        </div>
                        <p className="text-sm font-semibold text-white ">
                          Follow
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* middle_section */}
                <div className="flex justify-between px-8 pt-[32px]">
                  {/* text_div */}
                  <div>
                    <p className="text-xl font-semibold text-white">
                      {single.text2}
                    </p>
                    <p className="text-sm font-normal text-white pt-[9px] w-[120px]">
                      Stock price today
                    </p>
                  </div>
                  {/* img_div */}
                  <div className=" ml-[10%] ">
                    <img src="/Images/Path 2.svg" alt="w-full" />
                  </div>
                </div>
                {/* last_section */}
                <div className="flex justify-between px-8 pt-8">
                  {/* left */}
                  <div className="flex">
                    <p className="text-xs font-semibold text-white">
                      {single.text3}
                    </p>
                    <p className="text-xs font-normal text-white pl-2">
                      Increase in stock today
                    </p>
                  </div>
                  {/* middle */}
                  <div className="flex">
                    <div>
                      <img src="/Images/users.png" alt="" />
                    </div>
                    <p className="text-xs font-normal text-white pl-2">
                      12M Followers
                    </p>
                  </div>
                  {/* last */}
                  <div className="flex">
                    <div>
                      <img src="/Images/eye.png" alt="" />
                    </div>
                    <p className="text-xs font-normal text-white pl-2">
                      2M Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-b-[1px] border-[#1F2937] mt-10 max-w-[90%] mx-auto "></div>
      {/* down_section */}
      <div className="pt-12  pb-[66px] ">
        {/* heading_div */}
        <div className="pb-9">
          <h1 className="text-center text-gray-50 text-3xl font-semibold">
            Popular Industries
          </h1>
        </div>
        {/* cards_div */}
        <div className="xl:flex justify-center grid sm:grid-rows-2 grid-rows-4 grid-flow-col gap-y-10  ">
          {/* card_1 */}
          {cards?.map((single, index) => (
            <div key={index}>
              <div className="bg-gray-800 hover:bg-[#36454F] w-[203px] h-[196px] rounded-xl mr-5">
                {/* heading_div */}
                <div>
                  <p className="text-white text-lg font-semibold text-center pt-[26px] pb-4">
                    {single.heading}
                  </p>
                </div>
                {/* img_div */}
                <div className="w-full flex justify-center">
                  <div className=" border border-solid border-[#4B5563] w-[76px] h-[76px] rounded-[50px]">
                    {/* img */}
                    <div className="flex items-center h-full w-full justify-center">
                      <img src={single.img} alt="" />
                    </div>
                  </div>
                </div>
                {/* text_div */}
                <div className="pt-4 pb-8">
                  <p className="text-xs font-normal text-white text-center">
                    {single.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
