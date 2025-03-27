import React, { useState } from "react";
import style from "./style.module.scss";
import logo2 from "../../assets/logo_2.svg";
import { Link, useNavigate } from "react-router-dom";
import paper from "../../assets/icons/user_main/list.svg";
import { Eye, EyeOff } from "lucide-react";

const RegisterMain = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();

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
      spaceInPassword: "Пароль не должен содержать пробелы",
    };

    /*
      😶‍🌫️ Валидируем ошибки
    */
    const trimmedLogin = login.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedLogin) return setError(errors.login);
    if (!trimmedEmail || !validateEmail(trimmedEmail))
      return setError(errors.email);
    if (!trimmedPassword) return setError(errors.password);
    if (trimmedPassword.includes(" ")) return setError(errors.spaceInPassword);
    if (trimmedPassword.length < 6) return setError(errors.shortPassword);
    if (trimmedPassword !== trimmedConfirmPassword)
      return setError(errors.mismatchPassword);

    setError("");
    console.log("Отправка данных", {
      login: trimmedLogin,
      email: trimmedEmail,
      password: trimmedPassword,
    });

    navigate("/user/main");
  };

  return (
    <section className={style.register}>
      {openModal && (
        <div className={style.register__modal}>
          <div className={style.register__modal__container}>
            <div className={style.register__modal__top}>
              <img src={paper} alt="paper" />
              <h4>Ошибка</h4>
            </div>

            <p>Пользователь с указанным email уже зарегистрирован в системе</p>

            <div className={style.register__modal__buttons}>
              <button
                onClick={() => {
                  setOpenModal(false);
                  navigate(-1);
                }}
              >
                Отмена
              </button>
              <button onClick={() => setOpenModal(false)}>
                Попробовать еще раз
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className={style.register__wrapper}>
          <div className={style.register__main__form}>
            <img src={logo2} alt="logo" />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Имя пользователя"
                onChange={(event) => setLogin(event.target.value.trim())}
                value={login}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              <input
                type="text"
                placeholder="Адрес электронной почты"
                onChange={(event) => setEmail(event.target.value.trim())}
                value={email}
                style={{
                  border: error ? "1px solid red" : "1px solid #68686B",
                }}
              />

              <div className={style.register__password}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  onChange={(event) => setPassword(event.target.value)}
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

              <div className={style.register__password}>
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Подтвердите пароль"
                  onChange={(event) =>
                    setConfirmPassword(event.target.value.trim())
                  }
                  value={confirmPassword}
                  style={{
                    border: error ? "1px solid red" : "1px solid #68686B",
                  }}
                />

                <button
                  type="button"
                  className={style.togglePassword}
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? (
                    <EyeOff size={20} color="#001A72" />
                  ) : (
                    <Eye size={20} color="#001A72" />
                  )}
                </button>
              </div>

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
