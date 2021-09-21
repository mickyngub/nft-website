import roadmapCat from "assets/roadmap.jpeg";
import upcomingCat from "assets/upcoming.jpeg";
const Content = () => {
  return (
    <div className="bg-red-500">
      <img className="w-screen h-auto" src={roadmapCat} alt="roadmapCat" />
      <img
        className="w-screen h-auto mx-auto"
        src={upcomingCat}
        alt="upcomingCat"
      />
    </div>
  );
};

export default Content;
