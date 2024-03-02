'use client';
import React from 'react';
import Image from 'next/image';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Pie, Bar } from 'react-chartjs-2';
import WordCloudChart from '@/app/components/WordCloudChart';
import { StyledEngineProvider } from '@mui/material/styles';
import DataTable from '../../components/datatable';
import { useEffect, useState } from 'react';
import { getCompanyData } from '../../database/company-data';
import { CompanyReviews } from '../../database/company-reviews';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { values } from 'd3';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface WordCloudItem {
  key: string;
  value: number;
}

interface PieChartData {
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface CompanyData {
  name: string;
  image: string;
  website: string;
  industry: string;
  size: string;
  location: string;
  details: string;
  labels: string[];
  pieData: PieChartData;
  barData: BarChartData;
  positiveWordCloud: WordCloudItem[];
  neutralWordCloud: WordCloudItem[];
  negativeWordCloud: WordCloudItem[];
}

interface Review {
  id: number;
  review: string;
  sentiment: string;
  platform: string;
}

interface CompanyReviews {
  [key: string]: Review[];
}

export default function CompanyProfiles({
  params,
}: {
  params: { companyName: string };
}) {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data based on the companyName parameter
    const fetchData = async () => {
      try {
        const data = getCompanyData(params.companyName);
        setCompanyData(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.companyName]);

  const [companyReviewsData, setCompanyReviewsData] =
    useState<CompanyReviews | null>(null);

  useEffect(() => {
    // Fetch data based on the companyName parameter
    const fetchData = async () => {
      try {
        const reviews: CompanyReviews | null = CompanyReviews; // Assuming CompanyReviews is an object with keys as company names
        setCompanyReviewsData(
          reviews && reviews[params.companyName] ? reviews : null
        );
      } catch (error) {
        console.error('Error fetching company reviews data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.companyName]);

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      datalabels: {
        color: '#fff',
        formatter: (value: number, context: any) => {
          return (
            Math.round(
              (value /
                context.dataset.data.reduce(
                  (a: number, b: number) => a + b,
                  0
                )) *
                100
            ) + '%'
          );
        },
      },
    },
  };

  const barOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    responsive: true,
  };

  // Render loading state while fetching data
  if (loading) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center text-5xl font-bold">
        <div>LOADING ...</div>
      </div>
    );
  }

  // Handle the case where companyData is null
  if (!companyData) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center text-5xl font-bold">
        <div>Company not found :(</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6]">
      {companyData && (
        <>
          <div
            className="w-full bg-bottom h-48 lg:h-80 bg-slate-500"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/buildings.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'top -550px left',
            }}
          >
            <div className="mx-auto max-w-96 lg:max-w-7xl px-8 w-full pt-28">
              <h1 className="text-xl lg:text-4xl font-bold text-white">
                {companyData.name}
              </h1>
              <p className="py-0 text-md lg:py-6 lg:text-xl text-white">
                COMPANY PROFILE <br />
                Learn about the company
              </p>
            </div>
          </div>
          <div className="mx-auto lg:max-w-7xl px-2 md:px-8 lg:px-8 w-full pt-10 flex flex-col items-center">
            <div className="card rounded-md w-full lg:w-full bg-base-100 shadow-sm ">
              <div className="card-body items-center text-center">
                <div className="flex flex-row w-full items-center">
                  <div className="rounded-md mr-6 w-[70px] h-[70px] border-base-300 border-2 flex justify-center items-center">
                    <Image
                      src={`${companyData.image}`}
                      width={90}
                      height={0}
                      sizes="100vh"
                      alt="company image"
                    />
                  </div>
                  <h2 className="text-xl font-semibold truncate">
                    {companyData.name}
                  </h2>
                </div>
                <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row text-left pt-5">
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-bold text-sm">COMPANY OVERVIEW</h2>
                    <div className="text-justify pr-3">
                      <h3 className="font-bold truncate">Website</h3>
                      <a>{companyData.website}</a>
                      <h3 className="font-bold">Industry</h3>
                      <p>{companyData.industry}</p>
                      <h3 className="font-bold">Company size</h3>
                      <p>{companyData.size} </p>
                      <h3 className="font-bold">Primary location </h3>
                      <p>{companyData.location}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-bold text-sm">COMPANY DETAILS</h2>
                    <div className="text-justify pr-3 overflow-auto h-[300px]">
                      {companyData.details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:max-w-7xl px-2 md:px-8 lg:px-8  h-fit mt-6 flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="card rounded-md w-full lg:w-[600px] bg-base-100 shadow-sm">
              <div className="card-body flex flex-column justify-center">
                <h2 className="card-title text-sm md:text-xl lg:text-xl flex justify-center">
                  OVERALL COMPANY SENTIMENT
                </h2>
                <div className="w-full h-96 py-6 flex justify-center">
                  <Pie
                    options={pieOptions}
                    data={companyData.pieData}
                    plugins={[ChartDataLabels] as never}
                  />
                </div>
              </div>
            </div>

            <div className="card rounded-md w-full lg:w-[600px] bg-base-100 shadow-sm">
              <div className="card-body flex flex-column justify-center">
                <h2 className="card-title text-sm md:text-xl lg:text-xl flex justify-center">
                  SENTIMENT BY PLATFORMS
                </h2>
                <div className="w-full h-96 py-6 flex justify-center">
                  <Bar options={barOptions} data={companyData.barData} />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto gap-6 lg:gap-0 lg:max-w-7xl px-2 md:px-8 lg:px-8 pb-28 w-full h-fit mt-6 flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-between">
            <div className="card rounded-md w-full lg:w-[600px] h-auto bg-base-100 shadow-sm">
              <div className="card-body flex flex-column justify-center h-[1269px]">
                <StyledEngineProvider injectFirst>
                  <DataTable
                    data={
                      companyReviewsData
                        ? companyReviewsData[params.companyName] || []
                        : []
                    }
                  />
                </StyledEngineProvider>
              </div>
            </div>
            <div className="flex flex-col w-full items-center lg:items-end lg:gap-6">
              <div className="card rounded-md w-full lg:w-[600px] bg-base-100 shadow-sm">
                <div className="card-body flex flex-column justify-center">
                  <h2 className="card-title text-sm md:text-xl lg:text-xl flex justify-center">
                    POSITIVE WORD CLOUD
                  </h2>
                  <div className="w-full py-6 h-96 flex justify-center">
                    <WordCloudChart
                      chartId={1}
                      words={companyData.positiveWordCloud}
                    />
                  </div>
                </div>
              </div>
              <div className="card rounded-md w-full lg:w-[600px] bg-base-100 shadow-sm">
                <div className="card-body flex flex-column justify-center">
                  <h2 className="card-title text-sm md:text-xl lg:text-xl flex justify-center">
                    NEUTRAL WORD CLOUD
                  </h2>
                  <div className="w-full py-6 h-96 flex justify-center">
                    <WordCloudChart
                      chartId={2}
                      words={companyData.neutralWordCloud}
                    />
                  </div>
                </div>
              </div>
              <div className="card rounded-md w-full lg:w-[600px] bg-base-100 shadow-sm">
                <div className="card-body flex flex-column justify-center">
                  <h2 className="card-title text-sm md:text-xl lg:text-xl flex justify-center">
                    NEGATIVE WORD CLOUD
                  </h2>
                  <div className="w-full py-6 h-96 flex justify-center">
                    <WordCloudChart
                      chartId={3}
                      words={companyData.negativeWordCloud}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
