/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="bg-[#1F2937] rounded-[12px] mt-[12px] py-[12px]    mx-auto  2xl:w-auto lg:w-[90%] sm:w-[90%] ">
       <div className=" mx-auto container sm:max-w-[95%] flex ">
      <img src="./Images/Hi.svg" alt=" " className="cursor-pointer lg:max-w-auto sm:max-w-[4%]" />
      <img src="./Images/Logo.svg" alt=" " className="md:ml-[29px] sm:ml-[15px] lg:max-w-auto md:max-w-[20%] sm:max-w-[25%]" />
      <div className="relative flex justify-center items-center  lg:ml-[139px] md:ml-0 sm:ml-5 mx-auto  ">
      <input
            type={"text"}
            placeholder="Search for a commodity"
            className="bg-[#374151] focus:outline-none  xl:w-[433px] rounded-[12px] h-[46px] pl-10 placeholder:text-[#FFFFFF] text-[#FFFFFF] font-regular  "
          />

          <img src="./Images/Hi2.svg" alt=" " className="absolute left-[16px]" />
          
      </div>
      <div className="flex md:ml-auto justify-end  ">
      <img src="./Images/Hi3.svg" alt=" " className="cursor-pointer md:w-auto sm:max-w-[15%]" />
      <img src="./Images/Hi4.svg" alt=" " className="cursor-pointer md:ml-[16px] sm:ml-[10px] md:w-auto sm:max-w-[15%]" />
      <img src="./Images/Hi5.svg" alt=" " className="cursor-pointer md:ml-[24px] sm:ml-[15px] md:w-auto sm:max-w-[20%]" />
      </div>
     
    </div>

    </div>
   
  );
}
