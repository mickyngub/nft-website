import durianCat from "assets/durian.gif";
import pinkblackCat from "assets/pinkblack.gif";
import pinkCat from "assets/pink.gif";
import richCat from "assets/rich.gif";
import huskyCat from "assets/huskycat.gif";
import zombieCat from "assets/zombie.gif";
import coolCat from "assets/cool.gif";

const Content2 = () => {
  return (
    <div className="w-screen h-64 flex-wrap">
      <img className="catGif" src={durianCat} alt="durianCat" />
      <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
      <img className="catGif" src={pinkCat} alt="pink" />
      <img className="catGif" src={richCat} alt="rich" />
      <img className="catGif" src={huskyCat} alt="huskyCat" />
      <img className="catGif" src={zombieCat} alt="zombieCat" />
      <img className="catGif" src={coolCat} alt="coolCat" />
    </div>
  );
};

export default Content2;
