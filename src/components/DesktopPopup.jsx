import  { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; 

function DesktopPopup() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    isDesktop && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm mx-auto relative">
          <button
            onClick={() => setIsDesktop(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
          <p className="text-center text-lg">
            For better view open at mobile.
          </p>
        </div>
      </div>
    )
  );
}

export default DesktopPopup;
