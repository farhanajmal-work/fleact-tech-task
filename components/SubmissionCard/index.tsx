import React from "react";

interface SubmissionCardProps {
  title: string;
  date: string;
  description: string;
}

const SubmissionCard: React.FC<SubmissionCardProps> = ({
  title,
  date,
  description,
}) => {
  return (
    <div className="bg-white px-[13px] py-[16px] rounded-[5px] shadow-md">
      <div className="flex justify-between">
        <span className="text-[12px] text-[#151C2D] font-[400] leading-none">
          {title}
        </span>
        <span className="text-[12px] text-[#6EC8FF] font-[400] leading-none">
          {date}
        </span>
      </div>
      <p className="text-[12px] text-[#757B8B] font-[400] leading-none mt-[9px]">
        {description}
      </p>
    </div>
  );
};

export default SubmissionCard;
