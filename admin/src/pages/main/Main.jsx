import React, { useState } from "react";
import style from "./style.module.scss";
import userPlus from "../../assets/icons/user_main/user-plus.svg";
import userCheck from "../../assets/icons/user_main/user-check.svg";
import list from "../../assets/icons/user_main/list.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const [activePeriod, setActivePeriod] = useState("День");

  const labels = [
    "Название модуля 1",
    "Название модуля 2",
    "Название модуля 3",
    "Название модуля 4",
    "Название модуля 5",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 34, 56, 64, 72],
        backgroundColor: "rgba(11, 49, 69, 0.8)",
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: window.innerWidth <= 400 ? "top" : "right",
  //       align: "center",
  //     },
  //   },
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Пользователи",
        position: "left",
      },
    },
  };

  return (
    <aside className={style.user_main}>
      <div className={style.user_main__container}>
        <div className={style.user_main__wrapper}>
          <div className={style.user_main__stats}>
            <div className={style.user_main__stats__item}>
              <Link to="/users">
                <div className={style.user_main__stats__item__icon}>
                  <img src={userPlus} alt="paper" />
                </div>
                <h3>XXXX</h3>
                <p>пользователей системы</p>
              </Link>
            </div>

            <div className={style.user_main__stats__item}>
              <div className={style.user_main__stats__item__icon}>
                <img src={userCheck} alt="list" />
              </div>

              <h3>XXXX</h3>
              <p>пользователей, прошедших все модули</p>
            </div>

            <div className={style.user_main__stats__item}>
              <Link to="/modules">
                <div className={style.user_main__stats__item__icon}>
                  {" "}
                  <img src={list} alt="list" />
                </div>

                <h3>XXXX</h3>
                <p>модулей системы</p>
              </Link>
            </div>
          </div>

          <div className={style.user_main__graph}>
            <div className={style.user_main__graph__container}>
              <div className={style.user_main__graph__top}>
                <h3>Статистика по пройденным модулям</h3>
                <ul className={style.user_main__buttons}>
                  {["День", "Неделя", "Месяц", "Весь период"].map((item) => (
                    <li>
                      <button
                        style={
                          activePeriod === item
                            ? { background: "#fff" }
                            : { background: "none" }
                        }
                        onClick={() => setActivePeriod(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={style.user_main__graph__main}>
                <Bar options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Main;
