import { useNavigate } from 'react-router-dom';

const Category = ({ image, link, title }) => {
    const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="relative cursor-pointer border rounded-lg overflow-hidden boxShadow hover:shadow-2xl transition-shadow duration-300 mb-4 mt-2 mx-2">
      <img src={image} alt="Category" className="w-full h-28 object-cover" />
      <div className="absolute bottom-0 w-full bg-white text-center py-1 border-t">
        {title}
      </div>
    </div>
  );
};

export default Category;
