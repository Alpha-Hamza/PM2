/* eslint-disable @next/next/no-img-element */

export default function LeftSection({ data }) {
  return (
    <>
      {data ? (
        <div className="bg-[#1F2937]  mt-[12px] pt-[24px] pb-[12.95%]  rounded-r-[12px] sm:w-[100%]    2xl:ml-0 sm:ml-[5%]  sm:static absolute z-10 sm:block hidden  ">
        <div className="  flex-col border-b-[1px] border-[#374151] sm:w-auto  w-[58px]   ">
          <div className="flex  hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
            <img
              src="./Images/Li.svg"
              alt=" "
              className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto  "
            />
            <button className="text-[#9CA3AF] ml-[8px] sm:block hidden ">
              Home
            </button>
          </div>
          <div className="flex mt-[5px] hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
            <img
              src="./Images/Li11.svg"
              alt=" "
              className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto  "
            />
            <button className="text-[#9CA3AF] ml-[8px] sm:block hidden  ">
              Explore
            </button>
          </div>
          <div className="bg-[#0284C7]  rounded-[12px] w-full h-[48px] flex justify-start items-center mt-[5px] mb-[12px]">
            <img
              src="./Images/Li3.svg"
              alt=" "
              className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto"
            />
            <button className="text-[#F9FAFB] ml-[8px] sm:block hidden ">
              Leaderboard
            </button>
          </div>
        </div>
        <div className="  flex-col border-b-[1px] border-[#374151]  ">
          <div className=" xl:flex hidden  mt-[24px] ">
            <img
              src="./Images/Li4.svg"
              alt=" "
              className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto"
            />
            <h1 className="text-[#FFFFFF] ml-[8px] font-semibold sm:block hidden  ">
              Portfolio Overview
            </h1>
          </div>
          <div className="xl:hidden  flex-col mt-[24px] -mb-10 ">
            <img
              src="./Images/Li4.svg"
              alt=" "
              className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto"
            />
          </div>
          <div className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto mt-[16px]">
            <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold sm:block hidden ">
              Value
            </h1>

            <h1 className="text-[#FFFFFF]  font-normal mt-[2px] sm:block hidden ">
              $175,000
            </h1>
          </div>
          <div className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto  mt-[24px]">
            <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold sm:block hidden ">
              Today’s gain/loss
            </h1>
            <div className="flex mt-[2px]">
              <h1 className="text-[#FFFFFF]  font-normal sm:block hidden ">
                $7,400
              </h1>
              <h1 className="text-[#6EE7B7] text-[14px] ml-auto 2xl:mr-5 mr-3   font-normal sm:block hidden ">
                +2.50%
              </h1>
            </div>
          </div>
          <div className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto  my-[24px]">
            <h1 className="text-[#9CA3AF]  text-[12px]  font-semibold sm:block hidden ">
              Overall gain/loss
            </h1>
            <div className=" flex mt-[2px]">
              <h1 className="text-[#FFFFFF]  font-normal sm:block hidden ">
                $4,300
              </h1>
              <h1 className="text-[#F87171] text-[14px] ml-auto 2xl:mr-5 mr-3     font-normal sm:block hidden ">
                -4.20%
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-col mt-[28px] xl:ml-[32px] sm:ml-[15px] ">
          <div className="flex  ">
            <img
              src="./Images/Li5.svg"
              alt=" "
              className=" sm:mx-0 mx-auto"
            />
            <h1 className="text-[#FFFFFF] ml-[8px] font-semibold sm:block hidden ">
              Following
            </h1>
          </div>
          <div className="mt-[25px]">
            <h1 className="text-[#9CA3AF]  font-semibold text-[12px] sm:block hidden ">
              U.S. Equities
            </h1>
            <div className="flex my-[16px]">
              <img
                src="./Images/Li6.svg"
                alt=" "
                className=" sm:mx-0 mx-auto"
              />
              <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] sm:block hidden  ">
                GME
              </h1>
              <h1 className="text-[#6EE7B7] text-[14px] 2xl:ml-[64px] ml-auto 2xl:mr-0 mr-3   sm:block hidden  ">
                +2.50%
              </h1>
            </div>
            <div className="flex">
              <img
                src="./Images/Li7.svg"
                alt=" "
                className="sm:mx-0 mx-auto"
              />
              <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] sm:block hidden ">
                TSLA
              </h1>
              <h1 className="text-[#F87171] text-[14px] 2xl:ml-[64px] ml-auto 2xl:mr-0 mr-3  sm:block hidden  ">
                -2.31%
              </h1>
            </div>
          </div>
          <div className="mt-[32px]">
            <h1 className="text-[#9CA3AF]  font-semibold text-[12px] sm:block hidden ">
              Crypto
            </h1>
            <div className="flex my-[16px]">
              <img
                src="./Images/Li8.svg"
                alt=" "
                className=" sm:mx-0 mx-auto"
              />
              <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] sm:block hidden ">
                BTC
              </h1>
              <h1 className="text-[#F87171] text-[14px] 2xl:ml-[70px] ml-auto 2xl:mr-0 mr-3   sm:block hidden  ">
                -5.65%
              </h1>
            </div>
            <div className="flex my-[16px]">
              <img
                src="./Images/Li9.svg"
                alt=" "
                className="sm:mx-0 mx-auto"
              />
              <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] sm:block hidden ">
                ETH
              </h1>
              <h1 className="text-[#34D399] text-[14px] 2xl:ml-[68px] ml-auto 2xl:mr-0 mr-3   sm:block hidden  ">
                +6.36%
              </h1>
            </div>
            <div className="flex">
              <img
                src="./Images/Li10.svg"
                alt=" "
                className="sm:mx-0 mx-auto"
              />
              <h1 className="text-[#FFFFFF] text-[14px] ml-[8px] sm:block hidden ">
                DOGE
              </h1>
              <h1 className="text-[#34D399] text-[14px] 2xl:ml-[60px] ml-auto 2xl:mr-0 mr-3   sm:block hidden  ">
                +2.54%
              </h1>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <></>
       
      )}
    </>
  );
}
