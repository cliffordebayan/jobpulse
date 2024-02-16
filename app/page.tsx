import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col max-w-96 px-8 w-full z-50 lg:flex-row-reverse mx-auto lg:max-w-7xl ">
          <Image
            src="/banner.jpg"
            width={420}
            height={0}
            sizes="100vh"
            alt="Picture of job hunting"
          />
          <div>
            <h1 className="text-xl lg:text-6xl font-bold">
              Finding Reputable Companies is now much easier.
            </h1>
            <p className="text-xl pt-6 lg:text-xl pb-10">
              JobPulse is an interesting platform that give you employee
              sentiments of companies from various job sites and social media
              platform for informed job hunting.
            </p>
            <Link
              href="/company-profiles"
              className="btn btn-primary bg-[#0E5FD9] hover:bg-[#0e6dd9] border-[#0E5FD9] hover:border-[#0E5FD9]  text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full h-fit absolute bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#70BEDF' }} />
                <stop offset="100%" style={{ stopColor: '#0E5FD9' }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fillOpacity="1"
              d="M0,64L40,80C80,96,160,128,240,165.3C320,203,400,245,480,245.3C560,245,640,203,720,176C800,149,880,139,960,165.3C1040,192,1120,256,1200,277.3C1280,299,1360,277,1400,266.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100 relative">
        <svg
          className="w-20 lg:w-36 h-auto absolute left-0 center-0 rotate-180"
          width="691"
          height="1382"
          viewBox="0 0 691 1382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M691 1382C507.735 1382 331.977 1309.2 202.389 1179.61C72.8016 1050.02 -5.09808e-06 874.265 0 691C5.09808e-06 507.735 72.8016 331.977 202.389 202.389C331.977 72.8016 507.735 -2.18541e-06 691 0L691 691L691 1382Z"
            fill="url(#paint0_linear_393_362)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_393_362"
              x1="691"
              y1="691"
              x2="-1030"
              y2="691"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0E5FD9" />
              <stop offset="1" stop-color="#70BEDF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="hero-content max-w-96 flex-col lg:flex-row mx-auto lg:max-w-7xl px-8 w-full">
          <Image
            src="/data_analytics.jpg"
            width={640}
            height={0}
            sizes={'100vh'}
            alt="Picture of data analytics"
          />
          <div>
            <h1 className="text-xl lg:text-5xl font-bold">WHAT IS JOBPULSE?</h1>
            <p className="py-6 text-xl text-justify">
              JobPulse revolutionizes the job hunting experience by analyzing
              data from social media and job sites in the Philippines,
              uncovering employee sentiments in both English and Tagalog.
              Leveraging machine learning algorithms, specifically logistic
              regression, it empowers job seekers with valuable insights into
              companies, enabling them to make well-informed decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100 relative">
        <svg
          className="w-20 lg:w-36 h-auto absolute right-0 center-0"
          width="691"
          height="1382"
          viewBox="0 0 691 1382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M691 1382C507.735 1382 331.977 1309.2 202.389 1179.61C72.8016 1050.02 -5.09808e-06 874.265 0 691C5.09808e-06 507.735 72.8016 331.977 202.389 202.389C331.977 72.8016 507.735 -2.18541e-06 691 0L691 691L691 1382Z"
            fill="url(#paint0_linear_393_362)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_393_362"
              x1="691"
              y1="691"
              x2="-1030"
              y2="691"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0E5FD9" />
              <stop offset="1" stop-color="#70BEDF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hero-content flex-col max-w-96 lg:flex-row-reverse mx-auto lg:max-w-7xl px-8 w-full">
          <Image
            src="/job_hunting.jpg"
            width={640}
            height={0}
            sizes={'100vh'}
            alt="Picture of job hunting"
          />
          <div>
            <h1 className="text-xl lg:text-5xl font-bold">ABOUT US</h1>
            <p className="py-6 text-xl text-justify">
              At JobPulse, we are dedicated to transforming the job hunting
              landscape. Our mission is to empower individuals with valuable
              insights into company culture and employee sentiment. Through
              innovative analysis of social media and job site data, we provide
              users with the tools to make informed decisions that align with
              their values and preferences. Join us on this journey to redefine
              the job search experience and pave the way for a more fulfilling
              professional future.
            </p>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content max-w-96 flex-col mx-auto lg:max-w-7xl px-8 w-full">
          <div className="flex flex-col lg:flex-row w-full justify-between">
            <Image
              className="hidden lg:block flex-none h-[140px]"
              src="/mmsu.png"
              width={140}
              height={140}
              alt="MMSU logo"
            />
            <div className="px-4 text-center">
              <h1 className="text-xl lg:text-5xl font-bold">OUR TEAM</h1>
              <p className="py-6 text-xl">
                Our team consists of four students studying for a
                Bachelor&apos;s degree in Computer Science at Mariano Marcos
                State University in the City of Batac, Ilocos Norte.
              </p>
            </div>
            <Image
              className="hidden lg:block flex-none h-[140px]"
              src="/ccis.png"
              width={140}
              height={140}
              alt="CCIS logo"
            />
          </div>
          <div className="w-96 lg:w-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-around py-8">
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  className="flex-none h-[140px] rounded-xl"
                  src="/clifford.png"
                  width={140}
                  height={140}
                  alt="person image"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">CLIFFORD ALLEN EBAYAN</h2>
                <p>PROGRAMMER</p>
              </div>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  className="flex-none h-[140px] rounded-xl"
                  src="/clint.png"
                  width={140}
                  height={140}
                  alt="person image"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">CLINT EARL EBAYAN</h2>
                <p>PROGRAMMER</p>
              </div>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  className="flex-none h-[140px] rounded-xl"
                  src="/marinelle.png"
                  width={140}
                  height={140}
                  alt="person image"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MARINELLE MANALIGOD</h2>
                <p>PROGRAMMER</p>
              </div>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  className="flex-none h-[140px] rounded-xl"
                  src="/jover.png"
                  width={140}
                  height={140}
                  alt="person image"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MARK JOVER DELA CRUZ</h2>
                <p>PROGRAMMER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
