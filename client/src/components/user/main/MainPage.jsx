import React from "react";
import style from "./style.module.scss";
import paper from "../../../assets/icons/user_main/paper.svg";
import list from "../../../assets/icons/user_main/list.svg";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const MainPage = () => {
  const data = {
    labels: ["Модуль №1", "Модуль №2", "Модуль №3", "Модуль №4"],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 75, 18, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: window.innerWidth <= 400 ? "top" : "right",
        align: "center",
      },
    },
  };

  return (
    <aside className={style.user_main}>
      <div className={style.user_main__container}>
        <div className={style.user_main__wrapper}>
          <div className={style.user_main__stats}>
            <div className={style.user_main__stats__item}>
              <img src={paper} alt="paper" />
              <h3>XXXX</h3>
              <p>пройденных модулей</p>
            </div>

            <div className={style.user_main__stats__item}>
              <img src={list} alt="list" />
              <h3>XXXX</h3>
              <p>пройденных заданий</p>
            </div>
          </div>

          <div className={style.user_main__graph}>
            <div className={style.user_main__graph__container}>
              <div className={style.user_main__graph__top}>
                <h3>Статистика по пройденным модулям</h3>
                <button>Весь период</button>
              </div>

              <div className={style.user_main__graph__main}>
                <PolarArea data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MainPage;
