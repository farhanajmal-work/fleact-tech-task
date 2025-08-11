import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import CardDataStats from "../CardDataStats";
import ChartFour from "../Charts/ChartFour";
import Image from "next/image";
import Link from "next/link";
import SubmissionCard from "../SubmissionCard";
import LeaderboardCard from "../Leaderboard/Leaderboard";


const Education: React.FC = () => {
  return (
    <>
      <div className="grid md:flex items-start">
        <div className="rounded-[15px] min-w-[311px] space-y-4 bg-white">
          <div className="px-[19px] pt-[15px] pb-[10px]">
            <h4 className="text-[24px] font-bold text-[#151C2D] dark:text-white">
              Metrics
            </h4>
          </div>{" "}
          <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-[19px] py-[15px]">
            <CardDataStats title="Exam Categories" total="10" rate="10" levelUp>
              <Image
                src={"/images/metrics-1.svg"}
                width={14}
                height={14}
                alt="exam-categories"
              />
            </CardDataStats>
            <CardDataStats title="Total Subjects" total="20" rate="20" levelUp>
              <Image
                src={"/images/metrics-2.svg"}
                width={14}
                height={14}
                alt="subjects"
              />
            </CardDataStats>
            <CardDataStats
              title="Total Users"
              total="12,900"
              rate="2.59%"
              levelUp
            >
              <Image
                src={"/images/metrics-3.svg"}
                width={14}
                height={14}
                alt="users"
              />
            </CardDataStats>
            <CardDataStats
              title="Total Contributors"
              total="500"
              rate="0.95%"
              levelDown
            >
              <Image
                src={"/images/metrics-4.svg"}
                width={14}
                height={14}
                alt="contributors"
              />
            </CardDataStats>
          </div>
          <ChartFour />
        </div>
        {/* Two boxes after chart */}
        <div className="ml-[8px] my-4  md:my-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-[8px]">
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-[15px]">
            <div className="px-[10px] pt-[13px] pb-[5px]">
              <h4 className="ml-[10px] text-[18px] text-[#151C2D] font-[400]">
                Upcoming Events
              </h4>
              <div className="flex mt-[16px] gap-[12px]">
                <div className="rounded-[5px] bg-[#265DF70A] w-[162px] pt-[28px]">
                  <div className="w-[128px] mx-auto">
                    <Image
                      src={"/images/logo.svg"}
                      width={84}
                      height={84}
                      style={{ margin: "auto" }}
                      alt="logo"
                    />
                    <div className="grid gap-[5px] mt-[8px]">
                      <p className="text-[10px] text-[#151C2D] text-center font-[400] leading-none">
                        Allama Iqbal Medical College
                      </p>
                      <span className="text-[10px] text-[#757B8B]  text-center font-[400] leading-none">
                        (Islamabad Campus)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center pt-[57px] pb-[20px]">
                    <Link
                      href="#"
                      className="w-[134px] h-[19px] inline-flex items-center justify-center rounded-[5px] bg-[#265DF7] text-center text-[10px] font-[400] text-white hover:bg-opacity-90 lg:px-8 xl:px-2"
                    >
                      Send Reminder
                    </Link>
                  </div>
                </div>
                <div className="grid gap-[4px] max-h-[243px] overflow-y-auto custom-scrollbar">
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />{" "}
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />{" "}
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                  <SubmissionCard
                    title="Application Submission"
                    date="Oct 3, 2025"
                    description="Students can submit their applications on the official QUA platform"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-[15px]">
            <LeaderboardCard />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 w-full bg-white rounded-[15px]">
            <ChartTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
