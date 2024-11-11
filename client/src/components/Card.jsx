import love from "../assets/icons/love.svg";
import imgCard from "../assets/images/img-card.png";

const Card = () => {
  return (
    <div className="p-6 bg-base rounded-md">
      <div className="flex justify-between">
        <div className="bg-[#603011] text-primary rounded-md p-3 text-sm">
          -59%
        </div>
        <div className="bg-[#1F1E49] rounded-full w-[44px] flex items-center justify-center">
          <img src={love} alt="love" />
        </div>
      </div>
      <img src={imgCard} alt="img-card" className="w-full rounded-md my-4" />
      <div className="flex justify-between items-center">
        <div className="bg-[#17273D] rounded-md p-3 text-xs">Audio Devices</div>
        <div className="font-medium">$600.000</div>
      </div>
      <p className="mt-4 mb-5 text-xl">
        Nokia Essential Wireless Headphones 120CM BLACK
      </p>
      <div className="flex justify-between text-xs gap-3">
        <button className="bg-none text-primary px-5 py-3 w-full font-medium">
          Add to cart
        </button>
        <button className="bg-primary px-5 py-3 rounded-md w-full font-medium">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Card;
