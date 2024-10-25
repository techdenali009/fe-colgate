import BannerSkeleton from '@ui/molecules/BannerSkeleton'
import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton'

export const LandingPageSkeleton = () => {
  return (
    <div className="bg-gray-200">
      <div className="announcement-bar animate-pulse ">
        <div className="bg-gray-300 animate-pulse w-full h-10"></div>
      </div>

      <div className="header animate-pulse mb-4 flex shadow-md md:!hidden">
        <div className="bg-gray-300 mt-[1.3rem]  ml-4  w-10 h-[44px] " />
        <div className="bg-gray-300 mt-[1.3rem] ml-[2rem] mb-6 w-48  h-[54px] " />
        <div className="bg-gray-300 mt-[1.3rem]  ml-6  w-10 h-[44px] " />
        <div className="bg-gray-300 mt-[1.3rem]  ml-6  w-10 h-[44px] " />
      </div>

      <div className="header md:!block 2xs:hidden animate-pulse mb-4 shadow-md">
        <div className="w-full flex gap-20 items-center place-content-evenly h-20 bg-gray-200 mb-[10px]  ">
          <div className="bg-gray-300 mt-2  w-[145px] h-[60px] " />
          <div className="bg-gray-300 mt-[1.3rem] w-[578px] h-[44px] " />
          <div className="flex gap-10">
            <div className="bg-gray-300 mt-[1.3rem]  w-10 h-[44px] " />
            <div className="bg-gray-300 mt-[1.3rem]  w-10 h-[44px] " />
            <div className="bg-gray-300 mt-[1.3rem] w-10 h-[44px] " />
          </div>
        </div>
      </div>

      <div className="WelcomeRegister animate-pulse" >
        <div className="w-full md:!h-[195px] bg-gray-200 flex md:!flex-row md:!gap-4 2xs:flex-col 2xs:gap-0 2xs:h-[500px] ">
          <div className="basis-1/2 bg-gray-300 lg:!ml-[87px] mt-[25px] mb-[25px] 2xs:ml-0" />
          <div className="basis-1/2 bg-gray-300 mt-[25px] mb-[25px] lg:!mr-[87px] 2xs:mr-0" />
        </div>
      </div>

      <div className="Banner">
        <BannerSkeleton />
      </div>

      <div className="Banner-2 w-full h-[322px] bg-gray-200 flex flex-row gap-4 animate-pulse 2xs:hidden md:!flex">
        <div className="basis-1/2  ml-[87px] mt-[25px] mb-[25px] flex">
          <div className="basis-1/2 bg-gray-200 ">
            <div className="bg-gray-300 w-[95%] h-12" />
            <div className="bg-gray-300 w-[95%] h-28 mt-8" />
            <div className="bg-gray-300 w-[55%] h-10 mt-10" />
          </div>
          <div className="basis-1/2 bg-gray-300 flex flex-row gap-4" />

        </div>
        <div className="basis-1/2  mr-[87px] mt-[25px] mb-[25px] flex">
          <div className="basis-1/2 bg-gray-300 flex flex-row gap-4" />
          <div className="basis-1/2 bg-gray-200 ">
            <div className="bg-gray-300 w-[95%] h-12 ml-8" />
            <div className="bg-gray-300 w-[95%] h-28 ml-8 mt-8" />
            <div className="bg-gray-300 w-[55%] h-10 mt-10 ml-8" />
          </div>
        </div>
      </div>

      <div className="banner-large mb-20">
        <BannerSkeleton  />
      </div>

      <div className="Popular-products">
        <PopularProductSkeleton/>
      </div>
    </div>
  )
}