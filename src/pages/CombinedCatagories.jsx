import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainCatCard from '../components/MainCatCard';
import { CombinedData } from '../lib/CombinedData';
import FilterSort from '../components/FilterSort';
import GoBackButton from '../components/GoBackButton';
import HandleOrderTwo from '../components/HandleOrderTwo';

function CombinedCategories() {
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    applyFilters([]);
  }, [category]);
  const applyFilters = (selectedFilters) => {
    let dataToFilter = CombinedData.filter(item => item.category === category);

    if (selectedFilters.length > 0) {
      dataToFilter = dataToFilter.filter(item => {
        let matches = false;

        if (selectedFilters.includes('Option 1') && (item.discount === '20%' || item.discount === '30%' || item.discount === '40%')) {
          matches = true;
        } else if (selectedFilters.includes('Option 2') && (item.discount === '30%' || item.discount === '40%')) {
          matches = true;
        } else if (selectedFilters.includes('Option 3') && item.discount === '40%') {
          matches = true;
        }

        if (selectedFilters.includes('Option 4') && item.price < 1000) {
          matches = true;
        }
        if (selectedFilters.includes('Option 5') && item.price >= 1000 && item.price <= 3000) {
          matches = true;
        }
        if (selectedFilters.includes('Option 6') && item.price > 3000) {
          matches = true;
        }

        return matches;
      });
    }

    setFilteredData(dataToFilter);
  };

  const dataToDisplay = filteredData.length > 0 ? filteredData : CombinedData.filter(item => item.category === category);

  if (dataToDisplay.length === 0) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <>
      <div className="p-2">
        <GoBackButton />
        <FilterSort applyFilters={applyFilters} />
        <HandleOrderTwo />
      </div>
      <div className="flex flex-wrap justify-start">
        {dataToDisplay.map((card, index) => (
          <div key={index} className="w-1/2 p-2">
            <MainCatCard
              key={card.id}
              id={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              price={card.price}
              discount={card.discount}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CombinedCategories;
