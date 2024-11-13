import { SOCIAL_ICONS } from "@/utils/helper";
import CommonButton from "./common/CommonButton";
import Nav from "./Nav";
import Icons from "./common/Icons";

export default function Hero() {
    return(
        <div className="min-h-screen flex flex-col 2xl:min-h-[1080px] bg-head bg-center bg-cover bg-no-repeat relative pb-12 md:pb-16" >
<Nav/>
<div className="flex flex-grow  xl:pt-0 lg:pt-16 max-lg:pt-20 max-sm:pt-9 items-center">
    <div className="container max-w-[1480px] mx-auto pl-[19px] pr-[18px]  ">
        <div className="flex lg:gap-[30px] md:gap-5 gap-4 items-center  flex-col absolute min-[1440px]:left-[60px] lg:left-0 md:left-[60px] sm:left-10 left-5 xs:left-0 top-[17%] sm:top-[20%] lg:top-[32%]">
            <p className="font-ClashDisplay-Semibold text-sm md:text-lg leading-none font-semibold text-rich-black vertical-text">Follow Me on</p>
            <div className="lg:h-[72px] sm:h-12 h-[25px] w-[1px] bg-rich-black"></div>
            <div className="flex gap-[18px] flex-col">
                {SOCIAL_ICONS.map((obj,index)=>(
                 <Icons key={index} icon={obj} className="max-sm:size-3.5" />
                ))}
            </div>
        </div>
    <div className="flex max-lg:flex-col items-center md:gap-9 2xl:gap-[66px] gap-[30px]">
        <div className="w-full max-xs:justify-end flex justify-center xl:justify-end">
            <div className="min-[1800px]:max-w-[668px] lg:max-w-[550px] sm:max-w-[500px] xs:max-w-[420px] w-full max-xs:max-w-[307px]"><img src="/assets/images/webp/profile-head.webp" alt="profile-head" width={668} height={668} className="w-full" /></div>
        </div>
        <div className="xl:min-w-[733px] max-xl:max-w-[650px] w-full">
<p className="md:text-3xl sm:text-2xl text-base font-semibold uppercase !leading-126 text-rich-black mb-3 md:mb-[18px] max-lg:text-center font-ClashDisplay-Semibold" >i’m </p>
<h1 className="uppercase lg:text-7xl md:text-8xl sm:text-6xl text-5xl xl:text-large leading-none font-bold max-lg:text-center font-ClashDisplay-Bold text-stroke text-transparent mb-3 md:mb-[18px]">roie  zamir</h1>
<h2 className="xl:text-6xl lg:text-5xl md:text-6xl sm:text-4xl text-3xl font-ClashDisplay-Semibold max-lg:text-center font-semibold !leading-113 uppercase">web developer </h2>
<div className="lg:mt-[60px] md:mt-12 mt-[30px] flex gap-2.5 sm:gap-6 max-lg:justify-center">
    <CommonButton className="xl:px-[67px] max-lg:px-[67px] max-sm:px-[38px]">About  me</CommonButton>
    <CommonButton transparent>download cv</CommonButton>
</div>
        </div>
    </div>
    </div>
</div>
        </div>
    )
}