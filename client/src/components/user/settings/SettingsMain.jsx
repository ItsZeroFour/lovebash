import React, { useState } from "react";
import style from "./style.module.scss";
import user1 from "../../../assets/icons/settings/user.svg";
import password from "../../../assets/icons/settings/password.svg";
import removeAccount from "../../../assets/icons/settings/remove.svg";
import remove2 from "../../../assets/icons/settings/remove-2.svg";
import { useNavigate } from "react-router-dom";

const SettingsMain = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [infoErrors, setInfoErrors] = useState({});
  const [securityErrors, setSecurityErrors] = useState({});

  const navigate = useNavigate();

  /* ✈️ Валидация полей */
  const validateInfo = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Имя пользователя обязательно";
    if (!formData.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email не корректен";
    }
    setInfoErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSecurity = () => {
    const newErrors = {};
    if (!formData.currentPassword)
      newErrors.currentPassword = "Текущий пароль обязателен";
    if (!formData.newPassword)
      newErrors.newPassword = "Новый пароль обязателен";
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }
    setSecurityErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (validateInfo()) {
      // Здесь можно добавить логику для сохранения данных
      console.log("Данные успешно сохранены", formData);
    }
  };

  const handleSubmitSecurity = (e) => {
    e.preventDefault();

    if (validateSecurity()) {
      // Здесь можно добавить логику для сохранения данных
      console.log("Данные успешно сохранены", formData);
    }
  };

  return (
    <aside className={style.settings}>
      <div className="container__inner">
        {openModal && (
          <div className={style.settings__modal}>
            <div className={style.settings__modal__container}>
              <div className={style.settings__modal__top}>
                <img src={remove2} alt="remove" />
                <h4>Подтверждение удаления</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sequi ullam necessitatibus, in mollitia ex minus, corrupti,
                temporibus nostrum ratione eos! Odio modi similique explicabo.
                Ducimus nostrum est facilis aliquid ullam! Laboriosam, autem,
                doloribus tempora voluptates dolore fugiat officia,
                necessitatibus vero impedit recusandae corrupti. Accusantium
                aliquam nesciunt ad quae! Deserunt.
              </p>
              <div className={style.settings__modal__buttons}>
                <button onClick={() => setOpenModal(false)}>Отмена</button>
                <button
                  onClick={() => {
                    setOpenModal(false);
                    navigate("/");
                  }}
                >
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={style.settings__wrapper}>
          <h1>Настройки учетной записи пользователя</h1>
          <div className={style.settings__main}>
            <div className={style.settings__item}>
              <div className={style.settings__top}>
                <img src={user1} alt="user" />
                <p>Информация о пользователе</p>
              </div>
              <div className={style.settings__item__main}>
                <form>
                  <div className={style.settings__form__item}>
                    <label htmlFor="name">Имя пользователя</label>
                    <div className={style.settings__input__container}>
                      <input
                        type="text"
                        id="name"
                        placeholder="<Имя пользователя>"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    {infoErrors.name && <span>{infoErrors.name}</span>}
                  </div>

                  <div className={style.settings__form__item}>
                    <label htmlFor="email">Email</label>

                    <div className={style.settings__input__container}>
                      <input
                        type="email"
                        id="email"
                        placeholder="<email>"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {infoErrors.email && <span>{infoErrors.email}</span>}
                  </div>
                </form>

                <div className={style.settings__form__buttons}>
                  <button>Отмена</button>
                  <button onClick={handleSubmitInfo}>Сохранить</button>
                </div>
              </div>
            </div>

            <div className={style.settings__item}>
              <div className={style.settings__top}>
                <img src={password} alt="password" />
                <p>Безопасность</p>
              </div>
              <div className={style.settings__item__main}>
                <form>
                  <div className={style.settings__form__item}>
                    <label htmlFor="current-password">Текущий пароль</label>
                    <div className={style.settings__input__container}>
                      <input
                        type="password"
                        id="current-password"
                        placeholder="<Текущий пароль>"
                        value={formData.currentPassword}
                        onChange={handleChange}
                      />
                    </div>

                    {securityErrors.currentPassword && (
                      <span>{securityErrors.currentPassword}</span>
                    )}
                  </div>

                  <div className={style.settings__form__item}>
                    <label htmlFor="new-password">Новый пароль</label>
                    <div className={style.settings__input__container}>
                      <input
                        type="password"
                        id="new-password"
                        placeholder="<Новый пароль>"
                        value={formData.newPassword}
                        onChange={handleChange}
                      />
                    </div>
                    {securityErrors.newPassword && (
                      <span>{securityErrors.newPassword}</span>
                    )}
                  </div>

                  <div className={style.settings__form__item}>
                    <label htmlFor="confirm-password">
                      Новый пароль (ещё раз)
                    </label>
                    <div className={style.settings__input__container}>
                      <input
                        type="password"
                        id="confirm-password"
                        placeholder="<Новый пароль>"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>

                    {securityErrors.confirmPassword && (
                      <span>{securityErrors.confirmPassword}</span>
                    )}
                  </div>
                  <div className={style.settings__form__buttons}>
                    <button type="button" onClick={() => setOpenModal(true)}>
                      <img src={removeAccount} alt="remove" /> Удалить аккаунт
                    </button>
                    <div className={style.settings__form__buttons__con}>
                      <button>Отмена</button>
                      <button onClick={handleSubmitSecurity}>Сохранить</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SettingsMain;
