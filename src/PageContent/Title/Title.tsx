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
import FrontPageText from "PageContent/FrontPageText/FrontPageText";

const Title = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-auto w-screen my-auto flex flex-col space-y-48">
        {/* <p className="text-8xl text-center my-6">Stray Cat NFT Collection</p>
        <p className="text-2xl text-center my-16">by EEZEE</p> */}
        <p>
          {/* //   "Stray Cat NFT Collection",
            //   "Made with Love.",
            //   "by EEZEE",
            // ]}
            // elementID="text"
            // textColorArray={["tomato", "rebeccapurple", "lightblue"]}
           */}
          <FrontPageText
            textArray={[
              "Stray Cat NFT Collection",
              "Made with Love.",
              "by EEZEE",
            ]}
            elementID="text"
            textColorArray={["tomato", "rebeccapurple", "lightblue"]}
          />
        </p>
        <div className="self-end flex">
          <img src={catGif1} alt="catGif1" />
          <img src={catGif2} alt="catGif2" />
          <img src={catGif3} alt="catGif3" />
          <img src={catGif4} alt="catGif4" />
          <img src={catGif5} alt="catGif5" />
          <img src={catGif6} alt="catGif6" />
          <img src={catGif7} alt="catGif7" />
          <img src={catGif8} alt="catGif8" />
          <img src={catGif9} alt="catGif9" />
          <img src={catGif10} alt="catGif11" />
          <img src={catGif11} alt="catGif11" />
        </div>
        {/* <div className="flex flex-row-reverse">
          <img src={catGif1} alt="catGif1" />
          <img src={catGif2} alt="catGif2" />
          <img src={catGif3} alt="catGif3" />
          <img src={catGif4} alt="catGif4" />
          <img src={catGif5} alt="catGif5" />
          <img src={catGif6} alt="catGif6" />
          <img src={catGif7} alt="catGif7" />
          <img src={catGif8} alt="catGif8" />
          <img src={catGif9} alt="catGif9" />
          <img src={catGif10} alt="catGif11" />
          <img src={catGif11} alt="catGif11" />
        </div> */}
      </div>
    </div>
  );
};

export default Title;
