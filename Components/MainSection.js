/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";



export default function MainSection() {
      // map_loop_for_cards
      let cards = [
        {
            id: 1,
            heading: "Technology",
            img: "/images/computer.png",
            text: "View more"
        },
        {
            id: 2,
            heading: "Crypto",
            img: "/images/crypto.png",
            text: "View more"
        },
        {
            id: 3,
            heading: "Industrials",
            img: "/images/industrials.png",
            text: "View more"
        },
        {
            id: 4,
            heading: "Healthcare",
            img: "/images/health.png",
            text: "View more"
        }]
    // map_loop_for_slider
    let slider = [
        {
            id: 1,
            img: "/images/gme.svg",
            heading: "GameStop",
            text: "NYSE: GME"
        },
        {
            id: 2,
            img: "/images/tsl.svg",
            heading: "TSL",
            text: "NYSE: GME"
        },
        {
            id: 3,
            img: "/images/bt.svg",
            heading: "BIT",
            text: "NYSE: GME"
        },
        {
            id: 4,
            img: "/images/eth.svg",
            heading: "ETH",
            text: "NYSE: GME"
        },
        {
            id: 5,
            img: "/images/eth.svg",
            heading: "ETH",
            text: "NYSE: GME"
        },
    ]

  return (
    
    <div className="bg-[#1F2937]   ml-8 mt-[12px] pb-[6%] rounded-[12px] w-[80%]    ">
        < Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        navigation={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 0,
                            depth: 100,
                            modifier: 2,
                            stretch: 150,
                            slideShadows: false,

                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="mySwiper w-[90%] "
                    >
                        
                        {/* card_1 */}
                        {/* cards_div */}
                        {slider?.map((single, index) => (
                                <SwiperSlide key={index} >
                                    <div className="un_active_cards  mt-8 rounded-xl bg-color">
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
                                                        <p className="text-xl font-semibold text-white">{single.heading}</p>
                                                        <p className="text-xs font-normal text-white pt-2">{single.text}</p>
                                                    </div>
                                                </div>
                                                {/* right_side_div */}
                                                <div>
                                                    <div className="follow w-full rounded-2xl">
                                                        {/* img_text */}
                                                        <div className="flex items-center py-2 px-[18px]">
                                                            <div>
                                                                <img src="/images/add.svg" alt="" className="pr-1" />
                                                            </div>
                                                            <p className="text-sm font-semibold text-white">Follow</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* middle_section */}
                                            <div className='flex justify-between px-8 pt-[32px]' >
                                                {/* text_div */}
                                                <div>
                                                    <p className='text-xl font-semibold text-white'>$234.84</p>
                                                    <p className='text-sm font-normal text-white pt-[9px] w-[120px]'>Stock price today</p>
                                                </div>
                                                {/* img_div */}
                                                <div className=' ml-[10%] '>
                                                    <img src='/images/Path 2.svg' alt='w-full' />
                                                </div>
                                            </div>
                                            {/* last_section */}
                                            <div className='flex justify-between px-8 pt-8'>
                                                {/* left */}
                                                <div className='flex'>
                                                    <p className='text-xs font-semibold text-white'>+9.85%</p>
                                                    <p className='text-xs font-normal text-white pl-2'>Increase in stock today</p>
                                                </div>
                                                {/* middle */}
                                                <div className='flex'>
                                                    <div>
                                                        <img src='/images/users.png' alt='' />
                                                    </div>
                                                    <p className='text-xs font-normal text-white pl-2'>12M Followers</p>
                                                </div>
                                                {/* last */}
                                                <div className='flex'>
                                                    <div>
                                                        <img src='/images/eye.png' alt='' />
                                                    </div>
                                                    <p className='text-xs font-normal text-white pl-2'>2M Views</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        ))}
                    </Swiper>
    </div>
  );
}
