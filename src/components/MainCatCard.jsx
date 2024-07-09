import '../App.css'
import HandleShare from './HandleShare';
import HandleOrder from './HandleOrder';
function MainCatCard({ imageSrc, title }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between">
        <HandleShare />
        <HandleOrder />
        </div>
      </div>
    </div>
  );
}

export default MainCatCard;

