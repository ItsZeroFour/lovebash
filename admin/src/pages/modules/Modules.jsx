import React, { useState } from "react";
import style from "./style.module.scss";
import deleteIcon from "../../assets/icons/users/delete.svg";
import paper from "../../assets/icons/modules/list.svg";
import paper2 from "../../assets/icons/user_main/list.svg";
import { useNavigate, Link } from "react-router-dom";

const Modules = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const navigate = useNavigate();

  return (
    <aside className={style.modules}>
      {openModalSuccess && (
        <div className={style.modules__modal}>
          <div className={style.modules__modal__container}>
            <div className={style.modules__modal__top}>
              <img src={paper2} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.modules__modal__buttons}>
              <button
                onClick={() => {
                  setOpenModalSuccess(false);
                }}
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  setOpenModalSuccess(false);
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container__inner">
        <div className={style.modules__wrapper}>
          <div className={style.modules__top}>
            <h1>Модули</h1>
            <Link to="/module/create">Создать новый модуль</Link>
          </div>

          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Модуль</th>
              <th>Дата создания</th>
              <th>Статус</th>
              <th>Кол-во заданий</th>
              <th></th>
            </tr>

            <tr onClick={() => navigate("/module/123")}>
              <td>
                <img src={paper} alt="paper" />
              </td>
              <td>xxxxxxx</td>
              <td>Наименование модуля...</td>
              <td>гггг-мм-дд чч-мм-сс</td>
              <td>доступен/ не доступен</td>
              <td>xxx</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenModalSuccess(true);
                  }}
                >
                  <img src={deleteIcon} alt="delete" />
                </button>
              </td>
            </tr>

            <tr onClick={() => navigate("/module/123")}>
              <td>
                <img src={paper} alt="paper" />
              </td>
              <td>xxxxxxx</td>
              <td>Наименование модуля...</td>
              <td>гггг-мм-дд чч-мм-сс</td>
              <td>доступен/ не доступен</td>
              <td>xxx</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenModalSuccess(true);
                  }}
                >
                  <img src={deleteIcon} alt="delete" />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </aside>
  );
};

export default Modules;
