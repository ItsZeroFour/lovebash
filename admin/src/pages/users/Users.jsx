import React, { useState } from "react";
import style from "./style.module.scss";
import deleteIcon from "../../assets/icons/users/delete.svg";
import userPlus from "../../assets/icons/users/user-plusx.svg";
import { useNavigate, useParams } from "react-router-dom";
import paper from "../../assets/icons/user_main/user-check.svg";

const Users = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  /* 🫨 Тут мы получаем id из параметра в url */
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <aside className={style.users}>
      {openModalSuccess && (
        <div className={style.users__modal}>
          <div className={style.users__modal__container}>
            <div className={style.users__modal__top}>
              <img src={paper} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.users__modal__buttons}>
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
        <div className={style.users__wrapper}>
          <h1>Пользователи системы</h1>

          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Имя пользователя</th>
              <th>Последняя активность</th>
              <th>Дата регистрации</th>
              <th></th>
            </tr>

            <tr onClick={() => navigate("/user/123")}>
              <td>
                <img src={userPlus} alt="user plus" />
              </td>
              <td>xxxxxxx</td>
              <td>Имя пользователя</td>
              <td>гггг-мм-дд чч-мм-сс</td>
              <td>гггг-мм-дд</td>
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

            <tr onClick={() => navigate("/user/123")}>
              <td>
                <img src={userPlus} alt="user plus" />
              </td>
              <td>xxxxxxx</td>
              <td>Имя пользователя</td>
              <td>73872837</td>
              <td>гггг-мм-дд</td>
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

            <tr onClick={() => navigate("/user/123")}>
              <td>
                <img src={userPlus} alt="user plus" />
              </td>
              <td>xxxxxxx</td>
              <td>Имя пользователя</td>
              <td>гггг-мм-дд чч-мм-сс</td>
              <td>гггг-мм-дд</td>
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

            <tr onClick={() => navigate("/user/123")}>
              <td>
                <img src={userPlus} alt="user plus" />
              </td>
              <td>xxxxxxx</td>
              <td>Имя пользователя</td>
              <td>гггг-мм-дд чч-мм-сс</td>
              <td>гггг-мм-дд</td>
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

export default Users;
