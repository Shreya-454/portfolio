import CommonHeading, { SubHeading } from "./common/CommonHeading";
import CommonParagraph from "./common/CommonParagraph";
import SkillBar from "./SkillBar";

export default function Skills() {
    return(
    <div className="lg:py-[120px] md:py-20 py-[72px] max-sm:pb-6">
    <div className="container max-w-[1480px] mx-auto pl-[19px] pr-[18px]  ">
    <SubHeading className="text-center mb-3">my expertise</SubHeading>
    <div className="relative">
    <p className="text-stroke-grey text-6xl sm:text-7xl  md:text-8xl lg:text-big z-20 font-ClashDisplay-Bold text-transparent left-[21%] xs:left-[33%] lg:left-[30%] xl:left-[32%] top-[-51%] xs:top-[-40%] lg:top-[-71%] absolute uppercase opacity-[12%] text-center !leading-113">skills</p>
        <CommonHeading general className="text-center">Skills</CommonHeading>
            </div>
                <CommonParagraph center className="max-w-[960px] mx-auto sm:mb-10 mb-[30px] md:mb-[60px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</CommonParagraph>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[30px] gap-9">
            <div>
                <SkillBar skill="HTML" percentage={95} color="#FE8902" />
                <SkillBar skill="CSS" percentage={95} color="#399918" />
                <SkillBar skill="PHP" percentage={95} color="#FF7777" className="!mb-0" />
            </div>
            <div>
                <SkillBar skill="JavaScript" percentage={95} color="#E4003A" />
                <SkillBar skill="Angular JS" percentage={95} color="#4535C1" />
                <SkillBar skill="WordPress" percentage={95} color="#77E4C8" className="!mb-0" />
            </div>
          </div>
</div>
</div>
    )
}   