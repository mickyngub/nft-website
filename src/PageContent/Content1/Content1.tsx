import roadmapCat from "assets/roadmap.jpeg";
import upcomingCatGif from "assets/upcomingCatGif.gif";
import TextAnimation from "PageContent/TextAnimation/TextAnimation";

const Content = () => {
  return (
    <div>
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        Roadmap
        <span className="text-7xl " id="dot1"></span>
        <TextAnimation
          textArray={["...", "...", "..."]}
          elementID="dot1"
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

      <img className="w-screen h-auto" src={roadmapCat} alt="roadmapCat" />
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        Upcoming
        <span className="text-7xl " id="dot2"></span>
        <TextAnimation
          textArray={["...", "...", "..."]}
          elementID="dot2"
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

      <img
        className="w-screen h-auto mx-auto"
        src={upcomingCatGif}
        alt="upcomingCatGit"
      />
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
    </div>
  );
};

export default Content;
