import Link from "next/link";
import Image from "next/image";
import { Leaderboard } from "@/types/leaderboard";

const leaderboardData: Leaderboard[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    time: "13 days streak",
    xps: 3000,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    time: "13 days streak",
    xps: 3000,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    time: "13 days streak",
    xps: 3000,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    time: "13 days streak",
    xps: 3000,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    time: "13 days streak",
    xps: 3000,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    time: "13 days streak",
    xps: 3000,
  },
];

const LeaderboardCard = () => {
  return (
    <div className="col-span-12 rounded-[15px] bg-white py-[15px] shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-[18px] px-[16px] text-[18px] font-[400] text-black dark:text-white">
        Leaderboard
      </h4>

      <div className="grid gap-[16px] max-h-[250px] overflow-y-auto custom-scrollbar">
        {leaderboardData.map((leaderboard, key) => (
          <Link
            href="/"
            className="flex items-center gap-[6px] px-[16px] hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          > 
          <span className="mr-[7px] text-[#757B8B] text-[10px]">{key}</span>
            <div className="relative rounded-full">
             
              <Image
                src={leaderboard.avatar}
                alt="User"
                width={41}
                height={41}
              />
              
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {leaderboard.name}
                </h5>
                <p>
                 
                  <span className="text-xs">{leaderboard.time}</span>
                </p>
              </div>
              {leaderboard.xps !== 0 && (
                  <span className="text-[10px] text-[#265DF7] font-400">
                    {leaderboard.xps} xps
                  </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
