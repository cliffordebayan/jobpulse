"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompanyProfiles() {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    { name: "Accenture", imageSrc: "/company-img/accenture.png" },
    { name: "IBM", imageSrc: "/company-img/ibm.png" },
    { name: "Alorica", imageSrc: "/company-img/alorica.png" },
    { name: "Oracle", imageSrc: "/company-img/oracle.png" },
    { name: "Teleperformance", imageSrc: "/company-img/teleperformance.png" },
    { name: "iQor", imageSrc: "/company-img/iqor.png" },
    { name: "Concentrix", imageSrc: "/company-img/concentrix.png" },
    { name: "Genpact", imageSrc: "/company-img/genpact.png" },
    { name: "Cognizant", imageSrc: "/company-img/cognizant.png" },
    { name: "FIS Global", imageSrc: "/company-img/fis-global.png" },
    { name: "PLDT", imageSrc: "/company-img/pldt.png" },
    { name: "UBISOFT", imageSrc: "/company-img/ubisoft.jpg" },
    { name: "UBER", imageSrc: "/company-img/uber.png" },
    { name: "Converge", imageSrc: "/company-img/converge.jpg" },
    { name: "Huawei", imageSrc: "/company-img/huawei.jpg" },
    { name: "Tata Consultancy Services", imageSrc: "/company-img/tata.jpg" },
    { name: "EXL Services", imageSrc: "/company-img/exl.jpg" },
    { name: "DXC Technology", imageSrc: "/company-img/dxc.png" },
    { name: "Wipro", imageSrc: "/company-img/wipro.jpg" },
    { name: "Everise", imageSrc: "/company-img/everise.jpg" },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6]">
      <div
        className="w-full bg-bottom h-48 lg:h-80 bg-slate-500"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/building.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "bottom -220px right",
        }}
      >
        <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full pt-28">
          <h1 className="text-xl lg:text-4xl font-bold text-white">
            COMPANY PROFILES
          </h1>
          <p className="py-0 text-md lg:py-6 lg:text-xl text-white">
            ANALYZE INDIVIDUAL COMPANY <br />
            FOR INFORMED JOB HUNTING
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-10 flex flex-column justify-center">
        <div className="w-fit flex justify-center relative">
          <input
            className="input input-bordered rounded-full w-80 lg:w-[450px]"
            placeholder="Search Company ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute top-2 right-5"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#9ca3af"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-10 pb-28 flex flex-col items-center lg:flex-row flex-wrap gap-10">
        {filteredCompanies.map((company, index) => (
          <Link
            key={index}
            href={`/company-profiles/${company.name.toLowerCase()}`}
          >
            <div className="card w-52 bg-base-100 shadow-sm ">
              <figure className="px-10 pt-10">
                <div className="rounded-md w-[100px] h-[100px] border-base-300 border-2 flex justify-center items-center">
                  <Image
                    src={company.imageSrc}
                    width={90}
                    height={0}
                    sizes="100vh"
                    alt="company image"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="w-full text-md font-semibold truncate">
                  {company.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
