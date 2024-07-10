
const FilterSort = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md">
      
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="filter-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Filter
         
        </button>
       
      </div>

     
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="sort-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sort
         
        </button>
        <div
          
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="sort-menu"
        >
         
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
