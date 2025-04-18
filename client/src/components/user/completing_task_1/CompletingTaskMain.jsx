import React, { useState } from "react";
import style from "./style.module.scss";
import book from "../../../assets/icons/completing_task/book.svg";
import answer from "../../../assets/icons/completing_task/answer.svg";
import { useNavigate, useLocation } from "react-router-dom";
import paper from "../../../assets/icons/completing_task/paper.svg";
import MonacoEditor from "@monaco-editor/react";

const CompletingTaskMain = () => {
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModalFailed2, setOpenModalFailed2] = useState(false);
  const [answers, setAnswers] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleFinish = () => {
    if (answers === "") {
      setOpenModalFailed2(true);
      return;
    }

    setOpenModalFailed(true);
  };

  const handleEditorChange = (value) => {
    setAnswers(value);
  };

  return (
    <aside className={style.completing_task}>
      <div className={style.completing_task__container}>
        {/* === Modals === */}
        {openModalFailed && (
          <div className={style.completing_task__modal}>
            <div className={style.completing_task__modal__container}>
              <div className={style.completing_task__modal__top}>
                <img src={paper} alt="paper" />
                <h4>Результат выполнения</h4>
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

              <div className={style.completing_task__modal__buttons}>
                <button
                  onClick={() => {
                    setOpenModalFailed(false);
                    navigate(`/user/modules/${state?.id || 1}`);
                  }}
                >
                  Вернуться к заданиям
                </button>
                <button onClick={() => window.location.reload()}>
                  Попробовать еще раз
                </button>
              </div>
            </div>
          </div>
        )}

        {openModalFailed2 && (
          <div className={style.completing_task__modal}>
            <div className={style.completing_task__modal__container}>
              <div className={style.completing_task__modal__top}>
                <img src={paper} alt="paper" />
                <h4>Ошибка</h4>
              </div>

              <p>Пожалуйста, заполните все поля</p>

              <div className={style.completing_task__modal__buttons}>
                <button
                  onClick={() => {
                    setOpenModalFailed(false);
                    navigate(`/user/modules/${state?.id || 1}`);
                  }}
                >
                  Вернуться к заданиям
                </button>
                <button onClick={() => setOpenModalFailed2(false)}>
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}

        {openModalSuccess && (
          <div className={style.completing_task__modal}>
            <div className={style.completing_task__modal__container}>
              <div className={style.completing_task__modal__top}>
                <img src={paper} alt="paper" />
                <h4>Результат выполнения</h4>
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

              <div className={style.completing_task__modal__buttons}>
                <button
                  onClick={() => {
                    setOpenModalSuccess(false);
                    navigate(-1);
                  }}
                >
                  Вернуться к заданиям
                </button>
                <button
                  onClick={() => {
                    setOpenModalSuccess(false);
                    navigate("/");
                  }}
                >
                  Следующее задание
                </button>
              </div>
            </div>
          </div>
        )}

        {/* !=== Modals === */}

        <div className={style.completing_task__wrapper}>
          <div className={style.completing_task__left}>
            <div className={style.completing_task__left__item}>
              <div className={style.completing_task__left__item__top}>
                <img src={book} alt="book" />
                <p>Информация по заданию</p>
              </div>

              <h3>Модуль “Название модуля”</h3>
              <h4>N. Тема задания</h4>

              <div className={style.completing_task__left__item__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis enim esse cumque. Enim, ipsa aliquam similique culpa
                  alias amet deleniti non corporis aut nobis rerum unde ad
                  doloribus illum aperiam saepe est et voluptatum hic assumenda
                  quam! Sed veniam perspiciatis cum iusto eius fugiat pariatur
                  nesciunt repellat esse laborum voluptates illum est nisi
                  temporibus praesentium aut, nobis debitis tempora facere odit!
                  Blanditiis similique debitis ullam vero sunt molestias,
                  perferendis quidem quis suscipit id hic esse deleniti
                  accusantium fuga doloremque quam eum veniam quod! Sequi quae
                  libero id repellат repellendus. Laborum, totam itaque
                  dignissimos mollitia eos quas rem veniam omnis numquam!
                </p>
              </div>
            </div>

            <div className={style.completing_task__left__item}>
              <div className={style.completing_task__left__item__top}>
                <img src={book} alt="book" />
                <p>Теория</p>
              </div>

              <div className={style.completing_task__left__item__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis enim esse cumque. Enim, ipsa aliquam similique culpa
                  alias amet deleniti non corporis aut nobis rerum unde ad
                  doloribus illum aperiam saepe est et voluptatum hic assumenda
                  quam! Sed veniam perspiciatis cum iusto eius fugiat pariatur
                  nesciunt repellat esse laborum voluptates illum est nisi
                  temporibus praesentium aut, nobis debitis tempora facere odit!
                  Blanditiis similique debitis ullam vero sunt molestias,
                  perferendis quidem quis suscipit id hic esse delenити
                  accusantium fuga doloremque quam eum veniam quod! Sequi quae
                  libero id repellat repellendus. Laborum, totam itaque
                  dignissimos mollitia eos quas rem veniam omnis numquam!
                </p>
              </div>
            </div>
          </div>

          <div className={style.completing_task__terminal}>терминал</div>

          <div className={style.completing_task__right}>
            <div className={style.completing_task__top}>
              <img src={answer} alt="answer" />
              <p>Поле для ответа</p>
            </div>

            <MonacoEditor
              height="70vh"
              defaultLanguage="plaintext"
              value={answers}
              onChange={handleEditorChange}
              theme="vs-gray"
              options={{
                minimap: { enabled: false },
                lineNumbers: "on",
                wordWrap: "on",
                fontSize: 14,
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>

        <div className={style.completing_task__bottom}>
          {/* 🎧 Кнопка возвращения на предыдущую страницу */}
          <button onClick={() => navigate(-1)}>Отмена</button>
          <button onClick={handleFinish}>Завершить выполнение</button>
        </div>
      </div>
    </aside>
  );
};

export default CompletingTaskMain;
