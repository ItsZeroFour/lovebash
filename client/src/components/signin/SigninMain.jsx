import React, { useState } from "react";
import style from "./style.module.scss";
import logo2 from "../../assets/logo_2.svg";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      😧 Валидация полей
    */
    const errors = {
      login: "Введите имя пользователя или email",
      password: "Введите пароль",
      shortPassword: "Пароль должен содержать минимум 6 символов",
      spaceInPassword: "Пароль не должен содержать пробелы",
    };

    const trimmedLogin = login.trim();
    const trimmedPassword = password.trim();

    if (!trimmedLogin) return setError(errors.login);
    if (!trimmedPassword) return setError(errors.password);
    if (trimmedPassword.includes(" ")) return setError(errors.spaceInPassword);
    if (trimmedPassword.length < 6) return setError(errors.shortPassword);

    setError("");
    console.log("Отправка данных", {
      login: trimmedLogin,
      password: trimmedPassword,
    });

    navigate("/user/main");
  };

  const handleLoginChange = (event) => {
    const value = event.target.value.replace(/\s/g, ""); // Удаляем пробелы
    setLogin(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value.replace(/\s/g, ""); // Удаляем пробелы
    setPassword(value);
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
                onChange={handleLoginChange}
                value={login}
                style={
                  error
                    ? { border: "1px solid red" }
                    : { border: "1px solid #68686B" }
                }
              />

              <div className={style.signin__password}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  onChange={handlePasswordChange}
                  value={password}
                  style={
                    error
                      ? { border: "1px solid red" }
                      : { border: "1px solid #68686B" }
                  }
                />
                <button
                  type="button"
                  className={style.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} color="#001A72" />
                  ) : (
                    <Eye size={20} color="#001A72" />
                  )}
                </button>
              </div>
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
