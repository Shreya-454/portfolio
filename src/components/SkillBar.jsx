// components/SkillBar.js
import React from 'react';

const SkillBar = ({ skill, percentage, color,className }) => {
  return (
    <div className={`mb-9 ${className}`}>
      <div className="flex items-center justify-between sm:mb-[18px] mb-5">
          <span className="sm:text-xl text-lg sm:!leading-140 !leading-144 font-semibold font-ClashDisplay-Semibold uppercase">{skill}</span>
          <span className="sm:text-xl text-lg sm:!leading-140 !leading-144 font-semibold font-ClashDisplay-Semibold ">{percentage}%</span>
      </div>
      <div className="flex-1 h-5 bg-gray-200 rounded-full relative overflow-hidden">
        <div
          className={`h-full rounded-full`}
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
  
    </div>
  );
};

export default SkillBar;
