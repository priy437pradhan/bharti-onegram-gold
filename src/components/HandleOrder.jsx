const HandleOrder = ({ card }) => {
    const handleOrder = () => {
      const orderUrl = `https://wa.me/9861667624?text=${encodeURIComponent(
        `Hello, I am interested in the ${card.title}.\n\nCheck it out here: ${window.location.href}`
      )}`;
      window.open(orderUrl, '_blank');
    };
  
    return (
      <button
        onClick={handleOrder}
        className="mt-4  text-black font-semibold py-2 px-4 border-black border rounded transition duration-300"
      >
        Order
      </button>
    );
  };
  
  export default HandleOrder;
  