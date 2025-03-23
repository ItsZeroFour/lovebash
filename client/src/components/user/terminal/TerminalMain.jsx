import React from "react";
import style from "./style.module.scss";

const TerminalMain = () => {
  return (
    <aside className={style.terminal}>
      <div className="container__inner">
        <div className={style.terminal__wrapper}>
          <h1>Эмулятор терминала</h1>

          <div className={style.terminal__main}>
            <p>Эмулятор терминала (назначение блока)</p>
          </div>

          <div className={style.terminal__buttons}>
            <button>Завершить работу</button>
            <button>Запустить сессию</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TerminalMain;
