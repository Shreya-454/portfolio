import { PROFILE, PROFILE_1 } from "@/utils/helper";
import CommonButton from "./common/CommonButton";
import CommonHeading from "./common/CommonHeading";
import CommonParagraph from "./common/CommonParagraph";

export default function About() {
    return(
        <div className="bg-light-gray lg:py-[120px] md:py-20 sm:py-14 max-sm:pt-12 max-sm:pb-6">
<div className="container max-w-[1480px] pl-[19px] pr-[18px] mx-auto">
    <div className="flex flex-wrap flex-row -mx-3 items-center">
        <div className="lg:w-1/2 w-full px-3 flex max-lg:justify-center max-lg:mb-[66px]">
        <img src="/assets/images/webp/about-me.webp" alt="about-me" width={705} height={640} />
        </div>
        <div className="lg:w-1/2 w-full px-3 flex lg:justify-end justify-center">
        <div className="flex flex-col ">
            <div className="relative">
                <CommonHeading className="!mb-0 relative z-10 !leading-none">About me</CommonHeading>
                <p className="text-stroke-grey text-6xl sm:text-7xl max-lg:top-[-44%] max-md:left-[28%] max-md:top-[-37%] max-xs:top-[-66%] max-xs:left-[19%] md:text-8xl lg:text-big z-20 font-ClashDisplay-Bold text-transparent -top-14 absolute uppercase opacity-[12%] text-center !leading-113">About</p>
            </div>
            <h3 className="text-orange font-ClashDisplay-Semibold max-md:text-center font-semibold uppercase text-lg sm:text-2xl md:text-3xl mb-2 sm:mt-6 mt-[18px]">UI/UX Designer & Web Developer</h3>
            <CommonParagraph className="max-w-[618px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</CommonParagraph>
<div className="flex lg:gap-6 sm:mb-10 mb-9 md:mb-[60px] max-sm:justify-between gap-[27px] max-xs:justify-normal">
    <div className="flex flex-col gap-[18px] max-sm:max-w-[145px]">
        {
            PROFILE.map((item,index)=>(
                <p key={index} className="font-clash text-sm sm:text-lg leading-144 text-rich-black font-normal">{item.category}: {item.value}</p>
            ))
        }
    </div>
    <div className="flex flex-col gap-[18px]">
        {
            PROFILE_1.map((item,index)=>(
                <p key={index} className="font-clash text-sm sm:text-lg leading-144 text-rich-black font-normal">{item.category}: {item.value}</p>
            ))
        }
    </div>
</div>
<div className="flex sm:gap-6 max-sm:justify-center gap-2.5">
    <CommonButton className="xl:!px-[79px] sm:!px-16 !px-12">Hire me</CommonButton>
    <CommonButton transparent className="max-sm:!px-[28.5px]">Learn more</CommonButton>
</div>
        </div>
        </div>
    </div>
</div>
        </div>
    )
}