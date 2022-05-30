import axios from "axios";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Main = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [presentUsername, setPresentUsername] = useState("");
  const [languages, setLanguages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const renderLoading = () => {
    if (isLoading) {
      return (
        <img src={process.env.PUBLIC_URL + "/loading.gif"} alt="loading"></img>
      );
    } else {
      return <div></div>;
    }
  };

  const renderDounut = () => {
    const langKeys = Object.keys(languages);
    const langVals = Object.values(languages);
    const data = {
      labels: langKeys,
      datasets: [
        {
          label: "Languages",
          data: langVals,
          backgroundColor: [],
          borderWidth: 1,
        },
      ],
    };
    for (let i = 0; i < langKeys.length; i++) {
      const RGB_1 = Math.floor(Math.random() * (255 + 1));
      const RGB_2 = Math.floor(Math.random() * (255 + 1));
      const RGB_3 = Math.floor(Math.random() * (255 + 1));
      const strRGBA = "rgba(" + RGB_1 + "," + RGB_2 + "," + RGB_3 + ",0.3)";

      data.datasets[0].backgroundColor.push(strRGBA);
    }

    return <Doughnut data={data}></Doughnut>;
  };

  return (
    <div id="main">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (usernameInput !== presentUsername) {
            setIsLoading(true);
            setLanguages({});
            setPresentUsername(usernameInput);
            const d = await axios.get(
              `https://git-visualization.herokuapp.com/languages?username=${usernameInput}`
            );
            setLanguages(d.data);
            setIsLoading(false);
          }
        }}
      >
        <input
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <button type="submit">submit</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLanguages({});
            setPresentUsername("");
          }}
        >
          X
        </button>
      </form>
      <div id="content">
        {renderLoading()}
        {Object.keys(languages).length !== 0 ? renderDounut() : "no user!"}
      </div>
    </div>
  );
};

export default Main;
