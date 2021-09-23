import roadmapCat from "assets/roadmap.jpeg";
import upcomingCat from "assets/upcoming.jpeg";
import upcomingCatGif from "assets/upcomingCatGif.gif";

const Content = () => {
  return (
    <div>
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">Roadmap</p>

      <img className="w-screen h-auto" src={roadmapCat} alt="roadmapCat" />
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        Upcoming...
      </p>

      <img
        className="w-screen h-auto mx-auto"
        src={upcomingCatGif}
        alt="upcomingCatGit"
      />
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        Our Collection!
      </p>
      {/* <img
        className="w-screen h-auto mx-auto"
        src={upcomingCat}
        alt="upcomingCat"
      /> */}
    </div>
  );
};

export default Content;
