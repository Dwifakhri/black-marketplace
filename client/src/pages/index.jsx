import React from "react";
// import { NavLink } from "react-router-dom";
import LayoutDefault from "../layouts/LayoutDefault.jsx";
import Card from "../components/Card.jsx";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import fb from "../assets/icons/fb.svg";
import ig from "../assets/icons/ig.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

function App() {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <LayoutDefault>
      <div className="main-site">
        <section className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 items-center">
          <div className="mt-3 md:mt-0">
            <h2 className="text-3xl mb-2">Elevate your</h2>
            <h1 className="text-[2.6rem] lg:text-5xl font-medium leading-5">
              Experience with <br />
              iPhone Luxury
            </h1>
            <button className="bg-primary px-5 py-2 mt-5 md:mt-[2.2rem] rounded-md font-medium">
              Explore marketplace
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-3 img-prespective">
            <img className="w-auto front" src={phone1} alt="up1" />
            <img className="w-auto back" src={phone2} alt="up2" />
          </div>
        </section>
        <section className="mt-[5rem]">
          <div className="flex justify-between mb-8">
            <p>Our Top Deal</p>
            {/* <NavLink to="/">Explore</NavLink> */}
            <p>Explore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {a.map((item, i) => (
              <Card key={i}></Card>
            ))}
          </div>
        </section>
        <section className="mt-[5rem]">
          <div className="flex justify-between mb-8">
            <p>Best Selling Product</p>
            {/* <NavLink to="/">Explore</NavLink> */}
            <p>Explore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {a.map((item, i) => (
              <Card key={i}></Card>
            ))}
          </div>
        </section>
        <section className="mt-[5rem]">
          <div className="bg-primary rounded-[1rem] py-10 px-8">
            <p className="text-4xl font-medium">Subscribe to our newsletter</p>
            <p>
              Don't miss out on our top deals! Dont worry we will not spam you.
            </p>
            <button className="mt-8 rounded-md text-primary bg-white py-3 px-5 font-medium">
              Explore marketplace
            </button>
          </div>
        </section>
        <footer className="mt-[7rem] pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-2">
              <h1 className="text-xl font-medium mb-4">Black Marketplace</h1>
              <p className="leading-[1.5rem]">
                Our mission is to make gadget purchase, accessible and
                affordable.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-4">Helpful Links</h1>
              <ul className="leading-[2rem] text-sm">
                <li>Home</li>
                <li>About us</li>
                <li>Marketplace</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-4">Site Map</h1>
              <ul className="leading-[2rem] text-sm">
                <li>Frequently ask question</li>
                <li>Help desk</li>
                <li>Privacy policy</li>
                <li>Terms and condition</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-4">Contact Us</h1>
              <ul className="leading-[2rem] text-sm">
                <li>
                  <ul className="flex gap-2">
                    <li className="flex items-center justify-center bg-[#603011] rounded-full p-2 w-[30px] h-[30px]">
                      <img src={fb} alt="fb" />
                    </li>
                    <li className="flex items-center justify-center bg-[#603011] rounded-full p-2 w-[30px] h-[30px]">
                      <img src={ig} alt="ig" />
                    </li>

                    <li className="flex items-center justify-center bg-[#603011] rounded-full p-2 w-[30px] h-[30px]">
                      <img src={twitter} alt="twitter" />
                    </li>
                    <li className="flex items-center justify-center bg-[#603011] rounded-full p-2 w-[30px] h-[30px]">
                      <img src={linkedin} alt="linkedin" />
                    </li>
                  </ul>
                </li>
                <li className="break-all">blackmarketplace@gmail.com</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </LayoutDefault>
  );
}

export default App;
