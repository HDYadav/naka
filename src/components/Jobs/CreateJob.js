import React from "react";
import LayoutHOC from "../LayoutHOC"; 

const CreateJob = () => {
    return (
        <div className="p-4 ml-44 overflow-x-auto"> 

        <div className="mb-4 px-4 py-2">
        <input
          type="text"
          placeholder="Search by name or email"
         
          className="px-4 py-2 border rounded"
        />
      </div>

            <div className="px-4 py-2">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="mb-5 flex flex-col">
                        <label htmlFor="large-input1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Large input 1
                        </label>
                        <input 
                            type="text" 
                            id="large-input1" 
                            className="block px-2 py-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-5 flex flex-col">
                        <label htmlFor="large-input2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Large input 2
                        </label>
                        <input 
                            type="text" 
                            id="large-input2" 
                            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-5 flex flex-col">
                        <label htmlFor="large-input3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Large input 3
                        </label>
                        <input 
                            type="text" 
                            id="large-input3" 
                            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutHOC(CreateJob);
