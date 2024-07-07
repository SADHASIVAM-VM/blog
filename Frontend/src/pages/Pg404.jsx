import oops from '../assets/image/oops.png'

import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[600px] bg-gray-100">
      <div className="max-w-sm w-full p-8 flex justify-center items-center flex-col">
       
        <img
          src={oops}
          alt="404 Illustration"
          className="mx-auto mb-8 h-full"
          
        />
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
