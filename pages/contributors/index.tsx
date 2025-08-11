import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Contributors = () => {
  const [selectedPerson, setSelectedPerson] = useState<null | {
    name: string;
    role: string;
  }>(null);

  const firstRing = [
    { name: "Ayesha Ahmed", role: "Team", angle: 0 },
    { name: "Ayesha Ahmed", role: "Team", angle: 120 },
    { name: "Ayesha Ahmed", role: "Team", angle: 240 },
  ];

  const secondRing = [
    { name: "Ayesha Ahmed", role: "Team", angle: 0 },
    { name: "Ayesha Ahmed", role: "Team", angle: 72 },
    { name: "Ayesha Ahmed", role: "Team", angle: 144 },
    { name: "Ayesha Ahmed", role: "Team", angle: 216 },
    { name: "Ayesha Ahmed", role: "Team", angle: 288 },
  ];

  const renderRing = (
    data: { name: string; role: string; angle: number }[],
    radius: number
  ) =>
    data.map((person, idx) => (
      <div
        key={idx}
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `translate(-50%, -50%) rotate(${person.angle}deg) translate(${radius}px) rotate(-${person.angle}deg)`,
        }}
      >
        <button
          onClick={() => setSelectedPerson(person)}
          className="flex flex-col items-center focus:outline-none"
        >
          <Image
            src="/images/avatar1.jpg"
            width={50}
            height={50}
            alt={person.name}
            className="rounded-full border-2 border-yellow-400 w-14 h-14 object-cover"
          />
          <p className="text-xs mt-1 text-center text-gray-700">
            {person.name} <br />
            <span className="text-gray-500">({person.role})</span>
          </p>
        </button>
      </div>
    ));

  return (
    <>
      <div className="flex justify-between py-[12px] px-[25px]">
        <p className="text-[26px] text-[#151C2D] font-[400]">
          Your Shared Contributors
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-[8px] bg-[#265DF7] w-[160px] h-[41px] text-[16px] font-[400] text-white hover:bg-opacity-90"
        >
          <Image
            src="/images/plus-icon.svg"
            width={14}
            height={14}
            alt="plus"
            className="mr-[5px]"
          />
          Add Contributor
        </Link>
      </div>

      <div className="relative w-[600px] h-[600px] mx-auto">
        {/* Center avatar */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
          <Image
            src="/images/avatar1.jpg"
            width={178}
            height={178}
            alt="You"
            className="rounded-full border-2 border-[#265DF7] w-24 h-24 mx-auto object-cover"
          />
          <p className="text-center font-bold mt-2">Wareesha Khan (You)</p>
        </div>

        {/* Outer circle outlines */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-blue-300 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[540px] h-[540px] rounded-full border border-green-300 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Rings */}
        {renderRing(firstRing, 200)}
        {renderRing(secondRing, 270)}
      </div>

      {/* Modal */}
      {selectedPerson && (
        <div
          className="fixed w-[100vw] h-[100vh]  inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedPerson(null)}
        >
          <div className="bg-white  rounded-lg shadow-lg w-[223px] h-[194px] text-center relative">
            {/* <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button> */}
            <Image
              src="/images/avatar1.jpg"
              width={72}
              height={72}
              alt={selectedPerson.name}
              className="absolute w-[72px] h-[72px] top-[-25px] left-[75px] rounded-full object-cover mx-auto"
            />
            <h2 className="text-lg font-bold mt-[42px]">
              {selectedPerson.name}
            </h2>
            <p className="text-gray-500">{selectedPerson.role}</p>
            <div className="px-[15px]">
              <div className="grid grid-cols-2">
                <p className="text-left text-[14px] text-[#757B8B] font-[400]">
                  Commission:
                </p>
                <p className="text-left text-[14px] text-[#757B8B] font-bold">
                  12 %
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-left text-[14px] text-[#757B8B] font-[400]">
                  Discount:
                </p>
                <p className="text-left text-[14px] text-[#757B8B] font-bold">
                  14 %
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-left text-[14px] text-[#757B8B] font-[400]">
                  Promocode:
                </p>
                <p className="text-left text-[14px] text-[#757B8B] font-bold">
                  New9101
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contributors;
