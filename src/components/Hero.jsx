import CommonButton from "./common/CommonButton";
import Nav from "./Nav";

export default function Hero() {
    return(
        <div className="min-h-screen flex flex-col xl:min-h-[1080px] bg-head bg-center bg-cover bg-no-repeat">
<Nav/>
<div className="flex max-xl:flex-grow xl:pt-24 items-center">
    <div className="container max-w-[1480px] mx-auto px-5">
    <div className="flex items-center gap-[66px]">
        <div className="max-w-[668px] w-full"><img src="/assets/images/webp/profile-head.webp" alt="profile-head" width={668} height={668} /></div>
        <div className="min-w-[733px] w-full">
<p className="text-3xl font-semibold uppercase !leading-126 text-rich-black mb-[18px] font-ClashDisplay-Semibold" >i’m </p>
<h1 className="uppercase text-large leading-none font-bold font-ClashDisplay-Bold text-stroke text-transparent mb-[18px]">roie  zamir</h1>
<h2 className="text-6xl font-ClashDisplay-Semibold font-semibold !leading-113 uppercase">web developer </h2>
<div className="mt-[60px] flex gap-6">
    <CommonButton className="!px-[67px]">About  me</CommonButton>
    <CommonButton transparent>download cv</CommonButton>
</div>
        </div>
    </div>
    </div>
</div>
        </div>
    )
}