import durianCat from "assets/durian.gif";
import pinkblackCat from "assets/pinkblack.gif";
import pinkCat from "assets/pink.gif";
import richCat from "assets/rich.gif";
import huskyCat from "assets/huskycat.gif";
import zombieCat from "assets/zombie.gif";
import coolCat from "assets/cool.gif";
import TextAnimation from "PageContent/TextAnimation/TextAnimation";

const Content2 = () => {
  return (
    <>
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        Our Collection
        <span className="text-7xl " id="!"></span>
        <TextAnimation
          textArray={["!", "!!", "!!!"]}
          elementID="!"
          textColorArray={[
            "aqua",
            "rebeccapurple",
            "deepPink",
            "Pink",
            "Gold",
            "GreenYellow",
            "Indigo",
            "PaleGreen",
            "Yellow",
            "Wheat",
            "Teal",
            "Violet",
          ]}
        />
      </p>
      <div className="w-screen h-auto flex flex-wrap content-around justify-evenly">
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
        <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
        <img className="catGif" src={pinkCat} alt="pink" />
        <img className="catGif" src={richCat} alt="rich" />
        <img className="catGif" src={huskyCat} alt="huskyCat" />
        <img className="catGif" src={zombieCat} alt="zombieCat" />
        <img className="catGif" src={coolCat} alt="coolCat" />
        <img className="catGif" src={durianCat} alt="durianCat" />
      </div>
    </>
  );
};

export default Content2;
