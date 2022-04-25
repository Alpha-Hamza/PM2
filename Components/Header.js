/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="bg-[#1F2937] rounded-[12px] mt-[12px] py-[12px]    mx-auto">
       <div className=" mx-auto container max-w-[95%] flex ">
      <img src="./Images/Hi.svg" alt=" " className="cursor-pointer" />
      <img src="./Images/Logo.svg" alt=" " className="ml-[29px]" />
      <div className="relative flex justify-center items-center  ml-[139px] ">
      <input
            type={"text"}
            placeholder="Search for a commodity"
            className="bg-[#374151] focus:outline-none  xl:w-[433px] rounded-[12px] h-[46px] pl-10 placeholder:text-[#FFFFFF] font-regular  "
          />
          <img src="./Images/Hi2.svg" alt=" " className="absolute left-[16px]" />
          
      </div>
      <div className="flex ml-auto">
      <img src="./Images/Hi3.svg" alt=" " className="cursor-pointer" />
      <img src="./Images/Hi4.svg" alt=" " className="cursor-pointer ml-[16px]" />
      <img src="./Images/Hi5.svg" alt=" " className="cursor-pointer ml-[24px]" />
      </div>
     
    </div>

    </div>
   
  );
}
