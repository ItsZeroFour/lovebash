import React, { useState } from "react";
import style from "./style.module.scss";
import logo2 from "../../assets/logo_2.svg";
import { Link } from "react-router-dom";

const Signin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      😧 Валидация полей
    */ 
    const errors = {
      login: "Введите имя пользователя или email",
      password: "Введите пароль",
      shortPassword: "Пароль должен содержать минимум 6 символов",
    };

    if (!login.trim()) return setError(errors.login);
    if (!password.trim()) return setError(errors.password);
    if (password.length < 6) return setError(errors.shortPassword);

    setError("");
    console.log("Отправка данных", { login, password });
  };

  return (
    <section className={style.signin}>
      <div className="container">
        <div className={style.signin__wrapper}>
          <div className={style.signin__main__form}>
            <img src={logo2} alt="logo" />

            <form>
              <input
                type="text"
                placeholder="Имя пользователя или электронная почта"
                onChange={(event) => setLogin(event.target.value)}
                value={login}
                style={
                  error
                    ? { border: "1px solid red" }
                    : { border: "1px solid #68686B" }
                }
              />

              <input
                type="password"
                placeholder="Пароль"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                style={
                  error
                    ? { border: "1px solid red" }
                    : { border: "1px solid #68686B" }
                }
              />
            </form>

            {error && (
              <div className={style.signin__error}>
                <p className={style.error}>{error}</p>
              </div>
            )}

            <div className={style.signin__link}>
              <Link to="/register">Зарегистрироваться</Link>
            </div>

            <button onClick={handleSubmit} type="submit">
              Войти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
