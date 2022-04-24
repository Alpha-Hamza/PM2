/* eslint-disable @next/next/no-img-element */

export default function LeftSection() {
    return (
      <div className="bg-[#1F2937]  mt-[12px] pt-[24px] pb-[12.95%]  rounded-r-[12px] w-[100%] 2xl:ml-0 xl:ml-[5%]  ">
         <div className="  flex-col border-b-[1px] border-[#374151]    ">
             <div className="flex  hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
             <img src="./Images/Li.svg" alt=" " className="ml-[32px]" />
             <button className="text-[#9CA3AF] ml-[8px]">Home</button>

             </div>
             <div className="flex mt-[5px] hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
             <img src="./Images/Li11.svg" alt=" " className="ml-[32px] " />
             <button className="text-[#9CA3AF] ml-[8px] ">Explore</button>

             </div>
             <div className="bg-[#0284C7] rounded-[12px] w-full h-[48px] flex justify-start items-center mt-[5px] mb-[12px]">
             <img src="./Images/Li3.svg" alt=" " className="ml-[32px]" />
             <button className="text-[#F9FAFB] ml-[8px]">Leaderboard</button>

             </div>
       
      </div>
      <div className="  flex-col border-b-[1px] border-[#374151]  ">
      <div className="flex mt-[24px] ">
             <img src="./Images/Li4.svg" alt=" " className="ml-[32px]" />
             <h1 className="text-[#FFFFFF] ml-[8px] font-semibold">Portfolio Overview</h1>

             </div>
             <div className="ml-[32px] mt-[16px]">
             <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold">Value</h1>
             
             <h1 className="text-[#FFFFFF]  font-normal mt-[2px]">$175,000</h1>

             </div>
             <div className="ml-[32px] mr-5 mt-[24px]">
             <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold">Today’s gain/loss</h1>
             <div className="flex mt-[2px]">

             <h1 className="text-[#FFFFFF]  font-normal">$7,400</h1>
             <h1 className="text-[#6EE7B7] text-[14px] ml-auto   font-normal">+2.50%</h1>
             </div>

             </div>
             <div className="ml-[32px] mr-5 my-[24px]">
             <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold">Overall gain/loss</h1>
             <div className=" flex mt-[2px]">
             <h1 className="text-[#FFFFFF]  font-normal">$4,300</h1>
             <h1 className="text-[#F87171] text-[14px] ml-auto   font-normal">-4.20%</h1>

             </div>

             </div>
            
      </div>
      <div className="flex-col mt-[28px] ml-[32px]">
      <div className="flex ">
             <img src="./Images/Li5.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] ml-[8px] font-semibold">Following</h1>

             </div>
             <div className="mt-[25px]">
             <h1 className="text-[#9CA3AF]  font-semibold text-[12px]">U.S. Equities</h1>
             <div className="flex my-[16px]">
             <img src="./Images/Li6.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] ">GME</h1>
             <h1 className="text-[#6EE7B7] text-[14px] ml-[64px]  ">+2.50%</h1>


             </div>
             <div className="flex">
             <img src="./Images/Li7.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] ">TSLA</h1>
             <h1 className="text-[#F87171] text-[14px] ml-[64px]  ">-2.31%</h1>


             </div>


             </div>
             <div className="mt-[32px]">
             <h1 className="text-[#9CA3AF]  font-semibold text-[12px]">Crypto</h1>
             <div className="flex my-[16px]">
             <img src="./Images/Li8.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] ">BTC</h1>
             <h1 className="text-[#F87171] text-[14px] ml-[64px]  ">-5.65%</h1>


             </div>
             <div className="flex my-[16px]">
             <img src="./Images/Li9.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] ">ETH</h1>
             <h1 className="text-[#34D399] text-[14px] ml-[64px]  ">+6.36%</h1>


             </div>
             <div className="flex">
             <img src="./Images/Li10.svg" alt=" " className="" />
             <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] ">DOGE</h1>
             <h1 className="text-[#34D399] text-[14px] ml-[55px]  ">+2.54%</h1>


             </div>


             </div>


      </div>

  
      </div>
     
    );
  }
  