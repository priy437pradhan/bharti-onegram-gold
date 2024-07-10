import { useLocation } from 'react-router-dom';

const FilteredData = () => {
  const location = useLocation();
  const { data = [] } = location.state || {};

  return (
    <div>
      <div className="flex flex-wrap justify-start">
        {data.map(({ id, title, imageUrl, price }) => (
          <div key={id} className="MainCatCard w-1/2 p-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={title}  style={{ height:"200px" }} />
            <div className="CardDescription px-2 py-2">
              <div className="font-400 text-m mb-1">{title}</div>
              <div className="font-600 text-s mb-1">{`Rupees : ${price}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredData;
