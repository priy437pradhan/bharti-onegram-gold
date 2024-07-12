import { useNavigate } from 'react-router-dom';
import '../App.css';

const Category = ({ image, link, title, isLarge }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className={`category-container relative cursor-pointer border rounded-lg overflow-hidden shadow-md transition-all duration-300 mb-4 mt-2 mx-2 ${
                isLarge ? 'w-full md:w-full lg:w-full xl:w-full' : 'w-full md:w-full lg:w-full xl:w-full'
            }`}>
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="category-image w-full h-full object-cover transition-transform duration-300"
                />
            </div>
            <div className="category-title absolute bottom-0 w-full bg-opacity-75 bg-white text-center py-2 border-t transition-all duration-300">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{title}</span>
            </div>
        </div>
    );
};

export default Category;
