import ContactUsImage from '../assets/ContactUs.jpg';

const HandleOrderTwo = () => {
  const HandleOrder = () => {
    const orderUrl = `https://wa.me/9861667624?text=${encodeURIComponent(
      `Hello, I am interested in placing an order.\n\nCheck it out here: ${window.location.href}`
    )}`;
    window.open(orderUrl, '_blank');
  };

  return (
    <img
      src={ContactUsImage}
      onClick={HandleOrder}
      alt="Contact Us"
      className="shadow-md my-2"
    />
  );
};

export default HandleOrderTwo;
