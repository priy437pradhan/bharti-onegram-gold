import { FaShareAlt } from 'react-icons/fa';
const HandleShare = ({ card }) => {
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: card.title,
            text: `Check out this ${card.title} at our store!`,
            url: window.location.href,
          });
          console.log('Content shared successfully');
        } catch (error) {
          console.error('Error sharing the content:', error);
        }
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    };
  
    return (
      <button
      onClick={handleShare}
      className="mt-4  h-10 py-1 px-3 mr-2 text-black font-semibold border border-black  rounded transition duration-300 flex items-center"
    >
      <FaShareAlt  className="stroke-current stroke-2"/>
      
    </button>
    );
  };
 
  export default HandleShare;
  