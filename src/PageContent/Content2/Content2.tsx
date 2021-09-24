import durianCat from "assets/durian.gif";
import pinkblackCat from "assets/pinkblack.gif";
import pinkCat from "assets/pink.gif";
import richCat from "assets/rich.gif";
import huskyCat from "assets/huskycat.gif";
import zombieCat from "assets/zombie.gif";
import coolCat from "assets/cool.gif";
import cat001 from "assets/cat001.gif";
import cat002 from "assets/cat002.gif";
import cat008 from "assets/cat008.gif";
import cat009 from "assets/cat009.gif";
import cat011 from "assets/cat011.gif";
import cat013 from "assets/cat013.gif";
import cat019 from "assets/cat019.gif";
import cat020 from "assets/cat020.gif";
import cat022 from "assets/cat022.gif";
import cat025 from "assets/cat025.gif";
import cat026 from "assets/cat026.gif";
import cat028 from "assets/cat028.gif";
import cat030 from "assets/cat030.gif";
import cat031 from "assets/cat031.gif";
import cat032 from "assets/cat032.gif";
import cat034 from "assets/cat034.gif";
import cat038 from "assets/cat038.gif";
import cat040 from "assets/cat040.gif";
import cat041 from "assets/cat041.gif";
import cat043 from "assets/cat043.gif";
import cat044 from "assets/cat044.gif";
import cat045 from "assets/cat045.gif";
import cat048 from "assets/cat048.gif";
import cat050 from "assets/cat050.gif";
import cat051 from "assets/cat051.gif";
import cat052 from "assets/cat052.gif";
import cat053 from "assets/cat053.gif";
import cat055 from "assets/cat055.gif";
import cat057 from "assets/cat057.gif";
import cat058 from "assets/cat058.gif";
import catdog2 from "assets/catdog2.gif";
import catdurian2 from "assets/catdurian2.gif";
import catenchanted from "assets/catenchanted.gif";

import TextAnimation from "PageContent/TextAnimation/TextAnimation";

const Content2 = () => {
  return (
    <>
      <p className="text-2xl lg:text-6xl text-center h-24 lg:h-32 mt-16 text-blue-900">
        Our Collection
        <span className="text-2xl lg:text-6xl" id="!"></span>
        <TextAnimation
          textArray={["!"]}
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
      <a
        href="https://opensea.io/collection/straycat-collection"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-screen h-auto flex flex-wrap content-around justify-evenly">
          <img className="catGif" src={durianCat} alt="durianCat" />
          <img className="catGif" src={pinkblackCat} alt="pinkblackCat" />
          <img className="catGif" src={pinkCat} alt="pink" />
          <img className="catGif" src={richCat} alt="rich" />
          <img className="catGif" src={huskyCat} alt="huskyCat" />
          <img className="catGif" src={zombieCat} alt="zombieCat" />
          <img className="catGif" src={coolCat} alt="coolCat" />
          <img className="catGif" src={cat001} alt="cat001" />
          <img className="catGif" src={cat008} alt="cat008" />
          <img className="catGif" src={cat009} alt="cat009" />
          <img className="catGif" src={cat011} alt="cat011" />
          <img className="catGif" src={cat013} alt="cat013" />
          <img className="catGif" src={cat019} alt="cat019" />
          <img className="catGif" src={cat022} alt="cat022" />
          <img className="catGif" src={cat025} alt="cat025" />
          <img className="catGif" src={cat026} alt="cat026" />
          <img className="catGif" src={cat028} alt="cat028" />
          <img className="catGif" src={cat030} alt="cat030" />
          <img className="catGif" src={cat002} alt="cat002" />
          <img className="catGif" src={cat031} alt="cat031" />
          <img className="catGif" src={cat032} alt="cat032" />
          <img className="catGif" src={cat034} alt="cat034" />
          <img className="catGif" src={cat038} alt="cat039" />
          <img className="catGif" src={cat040} alt="cat040" />
          <img className="catGif" src={cat041} alt="cat041" />
          <img className="catGif" src={cat043} alt="cat043" />
          <img className="catGif" src={cat044} alt="cat044" />
          <img className="catGif" src={cat045} alt="cat045" />
          <img className="catGif" src={cat048} alt="cat048" />
          <img className="catGif" src={cat050} alt="cat050" />
          <img className="catGif" src={cat051} alt="cat051" />
          <img className="catGif" src={cat052} alt="cat052" />
          <img className="catGif" src={cat053} alt="cat053" />
          <img className="catGif" src={cat055} alt="cat055" />
          <img className="catGif" src={cat057} alt="cat057" />
          <img className="catGif" src={cat058} alt="cat058" />
          <img className="catGif" src={catdog2} alt="catdog2" />
          <img className="catGif" src={catdurian2} alt="catdurain2" />
          <img className="catGif" src={catenchanted} alt="catenchanted" />
          <img className="catGif" src={cat020} alt="cat020" />
        </div>
      </a>
    </>
  );
};

export default Content2;
