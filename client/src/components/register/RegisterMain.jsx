import React, { useState } from "react";
import style from "./style.module.scss";
import logo2 from "../../assets/logo_2.svg";
import { Link } from "react-router-dom";

const RegisterMain = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  /*
    🧐 Валидация ввода E-main
  */
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      ⚙️ Выводим конкретные сообщения под каждый тип
      ошибки заполнения
    */
    const errors = {
      login: "Введите имя пользователя",
      email: "Введите корректный email",
      password: "Введите пароль",
      shortPassword: "Пароль должен содержать минимум 6 символов",
      mismatchPassword: "Пароли не совпадают",
    };

    /*
      😶‍🌫️ Валидируем ошибки
    */
    if (!login.trim()) return setError(errors.login);
    if (!email.trim() || !validateEmail(email)) return setError(errors.email);
    if (!password.trim()) return setError(errors.password);
    if (password.length < 6) return setError(errors.shortPassword);
    if (password !== confirmPassword) return setError(errors.mismatchPassword);

    setError("");
    console.log("Отправка данных", { login, email, password });
  };

  return (
    <section className={style.register}>
      <div className="container">
        <div className={style.register__wrapper}>
          <div className={style.register__main__form}>
            <img src={logo2} alt="logo" />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Имя пользователя"
                onChange={(event) => setLogin(event.target.value)}
                value={login}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              <input
                type="text"
                placeholder="Адрес электронной почты"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              <input
                type="password"
                placeholder="Пароль"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              <input
                type="password"
                placeholder="Подтвердите пароль"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              {error && (
                <div className={style.register__error}>
                  <p className={style.error}>{error}</p>
                </div>
              )}

              <button type="submit">Зарегистрироваться</button>
            </form>

            <div className={style.register__link}>
              <p>Имеете аккаунт? </p>
              <Link to="/signin">Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterMain;
