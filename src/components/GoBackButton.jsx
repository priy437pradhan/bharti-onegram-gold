import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}>
      
      <IoArrowBack style={{ color: '#007BFF', fontSize:"20px"}} className="mr-4" /> 

    </button>
  );
};

export default GoBackButton;
