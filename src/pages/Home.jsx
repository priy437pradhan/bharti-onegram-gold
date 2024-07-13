import image1 from '../assets/jewellery-set.jpg';
import image2 from '../assets/Chain.jpg';
import image3 from '../assets/brecelets.jpg';
import image4 from '../assets/ear-ring.jpg';
import image5 from '../assets/ring.jpg';
import image6 from '../assets/bengle.jpg';
import image7 from '../assets/anklet.jpg';
import image8 from '../assets/nose-pin.jpg';
import Category from '../components/Catagory'; // Corrected import name

const categories = [
  { image: image1, link: '/category/set', title: "Set" },
  { image: image2, link: '/category/Chain', title: "Chain" },
  { image: image3, link: '/category/Bracelets', title: "Bracelets" },
  { image: image4, link: '/category/Ear-Ring', title: "Ear Ring" },
  { image: image5, link: '/category/Ring', title: "Ring" },
  { image: image6, link: '/category/Bangle', title: "Bangle" },
  { image: image7, link: '/category/Anklet', title: "Anklet" },
  { image: image8, link: '/category/Nose-Pin', title: "Nose Pin" },
  { image: image8, link: '/category/Nose-Pin', title: "Nose Pin" },
];

const Home = () => {
  return (
    <div className="container px-2 py-2">
      <div className="grid sm:grid-cols-3 grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Category key={index} image={category.image} link={category.link} title={category.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
