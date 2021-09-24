import { useEffect } from "react";
const FrontPageText = (props) => {
  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }

  useEffect(() => {
    consoleText(
      props.textArray,
      // ["Stray Cat NFT Collection", "Made with Love.", "by EEZEE"],
      props.elementID,
      // "text",
      props.textColorArray
      // ["tomato", "rebeccapurple", "lightblue"]
    );
  }, [props.textArray, props.elementID, props.textColorArray]);

  return (
    <div className="console-container">
      <span className="text-3xl lg:text-7xl" id="text"></span>
      <span
        style={{
          // fontSize: "3rem" /* 36px */,
          // lineHeight: "1rem" /* 40px */,
          display: !props.showUnderScore ? "none" : "",
        }}
        className="console-underscore text-3xl"
        id="console"
      >
        <p className="text-xl lg:text-3xl inline">&#95;</p>
      </span>
    </div>
  );
};

export default FrontPageText;
