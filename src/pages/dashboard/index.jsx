import DashboardLayout from "../../components/DashboardLayout";
import Chart from "chart.js/auto";
import React, { useState, useEffect, useRef } from "react";

const DashboardHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [chartData, setChartData] = useState({
    options: [{ label: "October" }, { label: "November" }],
    selectedOption: 0,
    showDropdown: false,
    data: null,
  });

  const fetchChartData = async () => {
    const data = {
      0: [20, 40, 60, 80, 100],
      1: [50, 70, 90, 110, 130],
    };
    setChartData((prev) => ({ ...prev, data }));
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  const data = {
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
    ],
    datasets: [
      {
        data: [20, 40, 60, 80, 40, 40, 80, 100, 80, 60, 80],
        borderColor: "rgba(63, 157, 0, 1)",
        fill: true,
        backgroundColor: "rgba(63, 157, 0, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(63, 157, 0, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      const newChartInstance = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });

      setChartInstance(newChartInstance);
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="font-sans text-3xl text-black font-bold">Dashboard</h1>
        <div className="flex flex-col h-full w-full mx-auto  space-y-6">
          <div className="flex flex-col mx-auto rounded-lg space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
              <div className="flex flex-col justify-center px-6 py-6 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <div className="text-base font-semibold tracking-tight leading-none text-[#202224]">
                      Total User
                    </div>
                    <div className="text-3xl font-bold text-black">40,689</div>
                  </div>
                  <div className="bg-[#8280FF] bg-opacity-20 p-4 rounded-2xl">
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.587821"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.66667 5.33333C6.66667 8.27885 9.05449 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05449 0 6.66667 2.38781 6.66667 5.33333ZM20 10.6667C20 12.8758 21.7909 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7909 6.66667 20 8.45753 20 10.6667Z"
                        fill="#8280FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.194 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9988 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3469 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
                        fill="#8280FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-6 py-6 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <div className="text-base font-semibold tracking-tight leading-none text-[#202224]">
                      Total Order
                    </div>
                    <div className="text-3xl font-bold text-black">10,293</div>
                  </div>
                  <div className="bg-[#FEC53D] bg-opacity-20 p-4 rounded-2xl">
                    <svg
                      width="30"
                      height="34"
                      viewBox="0 0 30 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 11.3165L12.9005 18.7646C13.0394 18.8448 13.1851 18.9027 13.3333 18.9395V33.3847L0.920065 26.0385C0.349784 25.701 0 25.0876 0 24.4249V11.3165ZM30 11.1185V24.4249C30 25.0876 29.6502 25.701 29.0799 26.0385L16.6667 33.3847V18.8129C16.6969 18.7978 16.7269 18.7817 16.7566 18.7646L30 11.1185Z"
                        fill="#FEC53D"
                      />
                      <path
                        opacity="0.499209"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.40522 7.70142C0.562795 7.50244 0.761683 7.33426 0.993562 7.21076L14.1186 0.2201C14.6695 -0.0733665 15.3305 -0.0733665 15.8814 0.2201L29.0064 7.21076C29.1852 7.30596 29.3443 7.42771 29.48 7.56966L15.0899 15.8778C14.9953 15.9325 14.908 15.995 14.8285 16.064C14.749 15.995 14.6618 15.9325 14.5672 15.8778L0.40522 7.70142Z"
                        fill="#FEC53D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-6 py-6 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <div className="text-base font-semibold tracking-tight leading-none text-[#202224]">
                      Total Produk
                    </div>
                    <div className="text-3xl font-bold text-black">15</div>
                  </div>
                  <div className="bg-[#4AD991] bg-opacity-20 p-4 rounded-2xl">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.11111 24.8889H26.4444C27.3036 24.8889 28 25.5853 28 26.4444C28 27.3036 27.3036 28 26.4444 28H1.55556C0.696446 28 0 27.3036 0 26.4444V1.55556C0 0.696446 0.696446 0 1.55556 0C2.41467 0 3.11111 0.696446 3.11111 1.55556V24.8889Z"
                        fill="#4AD991"
                      />
                      <path
                        opacity="0.5"
                        d="M8.91263 18.175C8.32504 18.8018 7.34063 18.8335 6.71388 18.2459C6.08713 17.6584 6.05537 16.6739 6.64295 16.0472L12.4763 9.82497C13.0445 9.21882 13.9888 9.16626 14.6209 9.70558L19.2249 13.6344L25.2235 6.03609C25.7559 5.36179 26.734 5.24671 27.4083 5.77906C28.0826 6.3114 28.1977 7.28958 27.6654 7.96388L20.6654 16.8305C20.1186 17.5231 19.1059 17.6227 18.4347 17.0499L13.7306 13.0358L8.91263 18.175Z"
                        fill="#4AD991"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-6 py-6 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <div className="text-base font-semibold tracking-tight leading-none text-[#202224]">
                      Total Message
                    </div>
                    <div className="text-3xl font-bold text-black">40,689</div>
                  </div>
                  <div className="bg-[#FF9066] bg-opacity-20 p-4 rounded-2xl">
                    <svg
                      width="28"
                      height="31"
                      viewBox="0 0 28 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.78"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6312 9.80885C12.6512 9.54835 12.8684 9.3472 13.1297 9.3472H13.5475C13.8044 9.3472 14.0195 9.54185 14.045 9.79745L14.6667 16.0139L19.0814 18.5366C19.2372 18.6256 19.3333 18.7913 19.3333 18.9707V19.3592C19.3333 19.6889 19.0199 19.9284 18.7018 19.8416L12.3987 18.1226C12.1673 18.0595 12.0133 17.841 12.0317 17.6019L12.6312 9.80885Z"
                        fill="#FF9066"
                      />
                      <path
                        opacity="0.901274"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.72176 0.984404C6.45765 0.669655 5.94771 0.790125 5.85238 1.18979L4.21891 8.03793C4.14123 8.36358 4.39931 8.67208 4.73356 8.65313L11.7783 8.25392C12.1892 8.23063 12.3976 7.74861 12.133 7.43333L10.3316 5.28648C11.4965 4.88844 12.7317 4.68053 14 4.68053C20.2592 4.68053 25.3333 9.75464 25.3333 16.0139C25.3333 22.2731 20.2592 27.3472 14 27.3472C7.74077 27.3472 2.66667 22.2731 2.66667 16.0139C2.66667 14.9631 2.80896 13.934 3.08641 12.9448L0.518845 12.2246C0.180793 13.4298 0 14.7007 0 16.0139C0 23.7459 6.26801 30.0139 14 30.0139C21.732 30.0139 28 23.7459 28 16.0139C28 8.28188 21.732 2.01387 14 2.01387C12.0551 2.01387 10.2029 2.41044 8.51973 3.12714L6.72176 0.984404Z"
                        fill="#FF9066"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl py-5 px-5 w-full">
            <div className="flex flex-wrap items-end">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black">Sales Detail</h3>
              </div>
              <div className="relative">
                <button
                  className="text-sm font-semibold text-gray-400 border border-gray-400 px-4 rounded-lg hover:text-black hover:border-black h-8 focus:outline-none flex items-center"
                  onClick={() =>
                    setChartData((prev) => ({
                      ...prev,
                      showDropdown: !prev.showDropdown,
                    }))
                  }
                >
                  {chartData.options[chartData.selectedOption].label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                {chartData.showDropdown && (
                  <div className="bg-white shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-2 -mr-3">
                    <span className="absolute top-0 right-0 w-3 h-3 bg-white transform rotate-45 -mt-1 mr-3"></span>
                    <div className="bg-white rounded w-full relative z-10 py-1">
                      <ul className="list-reset text-xs">
                        {chartData.options.map((item, index) => (
                          <li
                            key={index}
                            className={`px-4 py-2 hover:bg-[#3F9D00] hover:bg-opacity-30 hover:text-[#3F9D00] bg-white transition-colors duration-100 cursor-pointer ${
                              index === chartData.selectedOption
                                ? "text-[#3F9D00]"
                                : ""
                            }`}
                            onClick={() => {
                              selectOption(index);
                              setChartData((prev) => ({
                                ...prev,
                                showDropdown: false,
                              }));
                            }}
                          >
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div style={{ height: "400px", width: "100%" }}>
              <canvas ref={chartRef} className="mt-8"></canvas>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <div className="flex flex-wrap items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black">
                  Messages Detail
                </h3>
              </div>
              <div className="relative justify-end">
                  <button
                    onClick={toggleDropdown}
                    className="mt-2 px-4 py-2 text-sm text-gray-400 flex items-center gap-2 bg-white border border-gray-400 rounded-lg hover:bg-[#3F9D00] hover:text-white focus:outline-none"
                  >
                    Select
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          Option 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          Option 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
            </div>
            <div className="relative overflow-x-auto mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-black uppercase bg-[#F1F4F9] ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 rounded-s-lg text-center"
                    >
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center rounded-e-lg"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 justify-center">Auracantika</td>
                    <td className="px-6 py-4 justify-center">Maxwelliam</td>
                    <td className="px-6 py-4 justify-center">
                      aura21@gmail.com
                    </td>
                    <td className="px-6 py-4 justify-center">
                      +62853362477724
                    </td>
                    <td className="px-6 py-4 justify-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </td>
                    <td className="px-6 py-4 justify-center text-center">
                      <button className="text-white text-sm py-2 px-6 rounded-full bg-[#00B69B]">
                        Answered
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 justify-center">Aura</td>
                    <td className="px-6 py-4 justify-center">Maxwelliam</td>
                    <td className="px-6 py-4 justify-center">
                      aura21@gmail.com
                    </td>
                    <td className="px-6 py-4 justify-center">
                      +62853362477724
                    </td>
                    <td className="px-6 py-4 justify-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ...
                    </td>
                    <td className="px-6 py-4 justify-center text-center">
                      <button className="text-white text-sm py-2 px-6 rounded-full bg-[#F4A732]">
                        Pending
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
