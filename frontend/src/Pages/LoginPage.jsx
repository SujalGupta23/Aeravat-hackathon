import { useState } from "react";
import { initialTabs as tabs } from "../components/users";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-primary">
        <div className="window bg-white w-1/3 h-2/3 p-4 rounded-lg">
          <nav>
            <ul className="flex justify-between">
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={`${
                    item === selectedTab ? "selected pt-5" : "pt-5"
                  } text-black px-4 border-r-2 border-b-2 border-gray-600`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.icon} ${item.label}`}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  selectedTab.label === "Organizer" ? (
                    <div className="flex justif-center">
                      <div className="max-w-md text-sm pt-2 ">
                        <label className="font-medium text-black text-lg py-2">
                          Organization Name
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                        <label className="font-medium text-black text-lg py-2">
                          Phone Number
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="dob"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                        <label className="font-medium text-black text-lg py-2">
                          Address
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="address"
                          type="text"
                          placeholder="Enter your organization address"
                        />
                        <label className="font-medium text-black text-lg py-2">
                          Number of employees in your organization
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="numEmployees"
                          type="number"
                          placeholder="Enter the number of employees"
                        />
                        <motion.div
                          className="flex justify-center w-full bg-[#1e1e44] shadow-md border shadow-gray-800 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                              console.log("Register button clicked")
                            }
                          >
                            Register
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  ) : selectedTab.label === "Participant" ? (
                    <div className="flex justify-center">
                      <div className="max-w-md text-sm mt-10  ">
                        <label className="font-medium text-black text-lg py-2">
                          Name
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                        <label className="font-medium text-black text-lg py-2">
                          Phone Number
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="dob"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                        <label className="font-medium text-black text-lg  block">
                          Gender
                        </label>
                        <select
                          name="gender"
                          className="shadow appearance-none border text-sm rounded w-full pt-2 pb-3 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option className=" text-white">Choose</option>
                          <option className="text-white">Male</option>
                          <option className="text-white">Female</option>
                          <option className="text-white">Others</option>
                          <option className="text-white">
                            Choose not to Disclose
                          </option>
                        </select>

                        {/* <label className="font-medium">Address</label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Enter your organization address"
                    />
                    <label className="font-medium">Number of employees in your organization</label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="numEmployees"
                      type="number"
                      placeholder="Enter the number of employees"
                    /> */}
                        <motion.div
                          className="flex justify-center w-full bg-[#1e1e44] shadow-md border shadow-gray-800 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                              console.log("Register button clicked")
                            }
                          >
                            Register
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="max-w-md text-sm mt-10  ">
                        <label className="font-medium text-black text-lg py-2">
                          Name
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                        <label className="font-medium text-black text-lg py-2">
                          Phone Number
                        </label>
                        <input
                          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          id="dob"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                        <label className="font-medium text-black text-lg  block">
                          Gender
                        </label>
                        <select
                          name="gender"
                          className="shadow appearance-none border text-sm rounded w-full pt-2 pb-3 px-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option className=" text-white">Choose</option>
                          <option className="text-white">Male</option>
                          <option className="text-white">Female</option>
                          <option className="text-white">Others</option>
                          <option className="text-white">
                            Choose not to Disclose
                          </option>
                        </select>

                        {/* <label className="font-medium">Address</label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Enter your organization address"
                    />
                    <label className="font-medium">Number of employees in your organization</label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="numEmployees"
                      type="number"
                      placeholder="Enter the number of employees"
                    /> */}
                        <motion.div
                          className="flex justify-center w-full bg-[#1e1e44] shadow-md border shadow-gray-800 rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                              console.log("Register button clicked")
                            }
                          >
                            Register
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  )
                ) : null}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
