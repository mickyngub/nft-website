import durianCat from "assets/durian.gif";
import pinkblackCat from "assets/pinkblack.gif";
import pinkCat from "assets/pink.gif";
import richCat from "assets/rich.gif";
import huskyCat from "assets/huskycat.gif";
import zombieCat from "assets/zombie.gif";
import coolCat from "assets/cool.gif";

const Content2 = () => {
  return (
    <div className="bg-yellow-400 w-screen h-64">
      <img className="inline w-32 h-32" src={durianCat} alt="durianCat" />
      <img className="inline w-32 h-32" src={pinkblackCat} alt="pinkblackCat" />
      <img className="inline w-32 h-32" src={pinkCat} alt="pink" />
      <img className="inline w-32 h-32" src={richCat} alt="rich" />
      <img className="inline w-32 h-32" src={huskyCat} alt="huskyCat" />
      <img className="inline w-32 h-32" src={zombieCat} alt="zombieCat" />
      <img className="inline w-32 h-32" src={coolCat} alt="coolCat" />
    </div>
  );
};

export default Content2;
