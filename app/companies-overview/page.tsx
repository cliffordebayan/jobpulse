"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import { companiesOverview } from "../database/company-data";

interface Company {
  name: string;
  image: string;
  percentage: string;
}

interface PieData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface BarData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface CompaniesOverview {
  totalCompanies: number;
  jobSites: number;
  socialMedia: number;
  Total: number;
  recommend: Record<string, Company>;
  pieData: PieData;
  barData: BarData;
}

export default function CompaniesOverview() {
  const [companyData, setCompanyData] = useState<CompaniesOverview | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data based on the companyName parameter
    const fetchData = async () => {
      try {
        const data: any = companiesOverview;
        setCompanyData(data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render loading state while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-5xl font-bold">
        <div>LOADING ...</div>
      </div>
    );
  }

  // Handle the case where companyData is null
  if (!companyData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-5xl font-bold">
        <div>No Data Found :(</div>
      </div>
    );
  }

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      datalabels: {
        color: "#fff",
        formatter: (value: number, context: any) => {
          return (
            Math.round(
              (value /
                context.dataset.data.reduce(
                  (a: number, b: number) => a + b,
                  0
                )) *
                100
            ) + "%"
          );
        },
      },
    },
  };

  const barOptions = {
    indexAxis: "y" as const,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6]">
      {companyData && (
        <>
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
                OVERVIEW OF COMPANIES
              </h1>
              <p className="py-0 text-md lg:py-6 lg:text-xl text-white">
                ANALYZED COMPANIES SENTIMENT <br />
                FOR INFORMED JOB HUNTING
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-10 flex flex-col items-center gap-5 lg:gap-0 lg:flex-col lg:justify-center">
            <div className="card rounded-md w-72 lg:w-full  bg-base-100 shadow-sm">
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-xl">
                  Data Collected as of Jan - May 2024
                </h2>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-10 flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="card rounded-md w-72 bg-base-100 shadow-sm">
              <div className="card-body flex flex-row">
                <div className="h-16 w-16 rounded-full bg-[#F0EFF5] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="#6C5B9F"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.73,208H224V96a16,16,0,0,0-16-16H164a4,4,0,0,0-4,4V208H144V32.41a16.43,16.43,0,0,0-6.16-13,16,16,0,0,0-18.72-.69L39.12,72A16,16,0,0,0,32,85.34V208H16.27A8.18,8.18,0,0,0,8,215.47,8,8,0,0,0,16,224H240a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,239.73,208ZM76,184a8,8,0,0,1-8.53,8A8.18,8.18,0,0,1,60,183.72V168.27A8.19,8.19,0,0,1,67.47,160,8,8,0,0,1,76,168Zm0-56a8,8,0,0,1-8.53,8A8.19,8.19,0,0,1,60,127.72V112.27A8.19,8.19,0,0,1,67.47,104,8,8,0,0,1,76,112Zm40,56a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.26V168.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Zm0-56a8,8,0,0,1-8.53,8,8.19,8.19,0,0,1-7.47-8.26V112.27a8.19,8.19,0,0,1,7.47-8.26,8,8,0,0,1,8.53,8Z"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <h2 className="card-title text-4xl">
                    {companyData.totalCompanies}
                  </h2>
                  <p>Total Companies</p>
                </div>
              </div>
            </div>

            <div className="card rounded-md w-72 bg-base-100 shadow-sm">
              <div className="card-body flex flex-row">
                <div className="h-16 w-16 rounded-full bg-[#FFF7EA] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="#FFB32E"
                    viewBox="0 0 256 256"
                  >
                    <path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <h2 className="card-title text-4xl">
                    {companyData.jobSites}
                  </h2>
                  <p>Job Site Reviews</p>
                </div>
              </div>
            </div>

            <div className="card rounded-md w-72 bg-base-100 shadow-sm">
              <div className="card-body flex flex-row">
                <div className="h-16 w-16 rounded-full bg-[#E7EFFB] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="#0E5FD9"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <h2 className="card-title text-4xl">
                    {companyData.socialMedia}
                  </h2>
                  <p>Social Reviews</p>
                </div>
              </div>
            </div>

            <div className="card rounded-md w-72 bg-base-100 shadow-sm">
              <div className="card-body flex flex-row">
                <div className="h-16 w-16 rounded-full bg-[#EDFAEF] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="#4FCB5B"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
                  </svg>
                </div>
                <div className="pl-2">
                  <h2 className="card-title text-4xl">{companyData.Total}</h2>
                  <p>Total Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-6 flex flex-col items-center lg:items-start gap-5 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="card rounded-md w-96 lg:w-[600px] h-full bg-base-100 shadow-sm">
              <div className="card-body flex flex-column ">
                <h2 className="card-title text-xl flex justify-center">
                  TOP RECOMMENDED COMPANIES
                </h2>
                <div className="w-full py-6 flex justify-center">
                  <table className="table sm:table-xs md:table-xs">
                    <tbody className="w-full h-full flex flex-col gap-4">
                      {Object.entries(companyData.recommend).map(
                        ([key, company], index) => (
                          <tr key={key} className="border-b-slate-300 flex-1">
                            <Link
                              href={`/company-profiles/${company.name.toLowerCase()}`}
                              className={"w-full h-full flex flex-row"}
                            >
                              <th className="text-xl">{index + 1}</th>
                              <td className="p-0 w-14 flex flex-row items-center justify-center">
                                <Image
                                  src={company.image}
                                  width={48}
                                  height={0}
                                  sizes="100vh"
                                  alt={`company picture - ${company.name}`}
                                />
                              </td>
                              <td className="text-xl font-medium">
                                {company.name}
                              </td>
                              <td className="text-xl text-[#4FCB5B] font-bold text-end flex-1">
                                {company.percentage}
                              </td>
                            </Link>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card rounded-md w-96 h-full lg:w-[600px] bg-base-100 shadow-sm">
              <div className="card-body flex flex-column justify-center">
                <h2 className="card-title text-xl flex justify-center">
                  OVERALL COMPANIES SENTIMENT
                </h2>
                <div className="w-full h-full py-6 flex justify-center">
                  <Pie
                    options={pieOptions}
                    data={companyData.pieData}
                    plugins={[ChartDataLabels] as never}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full mt-6 pb-28 flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="card rounded-md w-96 lg:w-full bg-base-100 shadow-sm">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-xl flex justify-center">
                  SENTIMENT DISTRIBUTION OF COMPANIES
                </h2>
                <div className="w-full h-60 lg:h-auto py-6 flex justify-center">
                  <Bar options={barOptions} data={companyData.barData} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
