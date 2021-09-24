import catGif1 from "assets/catgif1.gif";
import catGif2 from "assets/catgif2.gif";
import catGif3 from "assets/catgif3.gif";
import catGif4 from "assets/catgif4.gif";
import catGif5 from "assets/catgif5.gif";
import catGif6 from "assets/catgif6.gif";
import catGif7 from "assets/catgif7.gif";
import catGif8 from "assets/catgif8.gif";
import catGif9 from "assets/catgif9.gif";
import catGif10 from "assets/catgif10.gif";
import catGif11 from "assets/catgif11.gif";
import TextAnimation from "PageContent/TextAnimation/TextAnimation";

const Title = () => {
  return (
    <div className="h-5/6 md:h-screen w-screen md:mb-0">
      <div className="h-85-vh md:h-screen w-screen my-auto flex flex-col justify-between">
        <div className="h-56 mt-48 mx-6 lg:mt-64 lg:mx-32">
          <TextAnimation
            textArray={[
              "Stray Cat NFT Collection",
              "Made with Love.",
              "by EEZEE",
              "Stray Cat Website",
              "by mickyngub",
            ]}
            showUnderScore
            elementID="text"
            textColorArray={[
              "aqua",
              "rebeccapurple",
              "deepPink",
              "Pink",
              "Indigo",
              "GreenYellow",
              "Gold",
              "PaleGreen",
              "Yellow",
              "Wheat",
              "Teal",
              "Violet",
            ]}
          />
        </div>
        <div className="self-end md:mb-0 flex w-screen">
          <img className="catGifTitle" src={catGif1} alt="catGif1" />
          <img className="catGifTitle" src={catGif2} alt="catGif2" />
          <img className="catGifTitle" src={catGif3} alt="catGif3" />
          <img className="catGifTitle" src={catGif4} alt="catGif4" />
          <img className="catGifTitle" src={catGif5} alt="catGif5" />
          <img className="catGifTitle" src={catGif6} alt="catGif6" />
          <img className="catGifTitle" src={catGif7} alt="catGif7" />
          <img className="catGifTitle" src={catGif8} alt="catGif8" />
          <img className="catGifTitle" src={catGif9} alt="catGif9" />
          <img className="catGifTitle" src={catGif10} alt="catGif11" />
          <img className="catGifTitle" src={catGif11} alt="catGif11" />
          <img className="catGifTitle" src={catGif1} alt="catGif1" />
          <img className="catGifTitle" src={catGif2} alt="catGif2" />
          <img className="catGifTitle" src={catGif3} alt="catGif3" />
          <img className="catGifTitle" src={catGif4} alt="catGif4" />
          <img className="catGifTitle" src={catGif5} alt="catGif5" />
          <img className="catGifTitle" src={catGif6} alt="catGif6" />
          <img className="catGifTitle" src={catGif7} alt="catGif7" />
        </div>
      </div>
      <div className="border-b-48 w-auto lg:mr-2.5 border-black"></div>
    </div>
  );
};

export default Title;
