import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex justify-between w-full max-w-md px-4">
        <p className="text-gray-600">contact: info@multiverseai.app</p>
        <a href="/privacy-policy" className="text-gray-600 underline">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer; 