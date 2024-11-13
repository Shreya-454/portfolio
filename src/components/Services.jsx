import CommonHeading, { SubHeading } from "./common/CommonHeading";

export default function Services() {
    return (
        <div className="lg:py-[120px] md:py-20 py-[72px] max-sm:pb-6">
            <div className="container max-w-[1480px] mx-auto pl-[19px] pr-[18px]  ">
                <SubHeading className="text-center mb-3">my expertise</SubHeading>
                <div className="relative lg:max-w-[627px] md:max-w-[423px] sm:max-w-[338px] max-w-[277px] mx-auto">
                    <p className="text-stroke-grey text-6xl sm:text-7xl  md:text-8xl lg:text-big z-20 font-ClashDisplay-Bold text-transparent left-[-6%] md:left-[-9%] lg:left-[-23%] top-[-51%] xs:top-[-40%] lg:top-[-71%] absolute uppercase opacity-[12%] text-center !leading-113">services</p>
                    <CommonHeading general className="text-center">my services</CommonHeading>
                </div>
            </div>
        </div>
    )
}