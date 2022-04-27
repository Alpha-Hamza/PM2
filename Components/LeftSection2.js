/* eslint-disable @next/next/no-img-element */

export default function LeftSection2({ data }) {
    return (
      <>
        {data ? (
          <></>
          
        ) : (
            <div className="bg-[#1F2937]  mt-[12px] pt-[24px] pb-[12.95%]  rounded-r-[12px]     absolute z-10 sm:hidden block ">
          <div className="  flex-col border-b-[1px] border-[#374151]   w-[58px] h-[190px]   ">
            <div className="flex  hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
              <img
                src="./Images/Li.svg"
                alt=" "
                className=" mx-auto  "
              />
              
            </div>
            <div className="flex mt-[5px] hover:bg-[#0284C7] w-full h-[48px]  items-center rounded-[12px]">
              <img
                src="./Images/Li11.svg"
                alt=" "
                className=" mx-auto  "
              />
              
            </div>
            <div className="bg-[#0284C7]  rounded-[12px] w-full h-[48px] flex justify-start items-center mt-[5px] mb-[12px]">
              <img
                src="./Images/Li3.svg"
                alt=" "
                className=" mx-auto"
              />
              
            </div>
          </div>
          <div className="  flex-col border-b-[1px] border-[#374151]  ">
            <div className=" xl:flex hidden  mt-[24px] ">
              <img
                src="./Images/Li4.svg"
                alt=" "
                className="xl:ml-[32px] sm:ml-[15px] sm:mx-0 mx-auto"
              />
              
            </div>
            <div className="xl:hidden  flex-col my-[24px]  ">
              <img
                src="./Images/Li4.svg"
                alt=" "
                className=" mx-auto"
              />
            </div>
            
          
          </div>
          <div className="flex-col mt-[28px]  ">
            <div className="flex  ">
              <img
                src="./Images/Li5.svg"
                alt=" "
                className="  mx-auto"
              />
             
            </div>
            <div className="mt-[25px]">
             
              <div className="flex my-[16px]">
                <img
                  src="./Images/Li6.svg"
                  alt=" "
                  className="  mx-auto"
                />
             
              </div>
              <div className="flex">
                <img
                  src="./Images/Li7.svg"
                  alt=" "
                  className=" mx-auto"
                />
              
              </div>
            </div>
            <div className="mt-[32px]">
              
              <div className="flex my-[16px]">
                <img
                  src="./Images/Li8.svg"
                  alt=" "
                  className="  mx-auto"
                />
               
              </div>
              <div className="flex my-[16px]">
                <img
                  src="./Images/Li9.svg"
                  alt=" "
                  className=" mx-auto"
                />
               
              </div>
              <div className="flex">
                <img
                  src="./Images/Li10.svg"
                  alt=" "
                  className=" mx-auto"
                />
                
              </div>
            </div>
          </div>
        </div>
         
        )}
      </>
    );
  }
  