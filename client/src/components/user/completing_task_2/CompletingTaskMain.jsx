import React, { useState } from "react";
import style from "./style.module.scss";
import book from "../../../assets/icons/completing_task/book.svg";
import answer from "../../../assets/icons/completing_task/answer.svg";
import { useNavigate } from "react-router-dom";
import paper from "../../../assets/icons/completing_task/paper.svg";
import MonacoEditor from "@monaco-editor/react";

const CompletingTaskMain = () => {
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [answers, setAnswers] = useState("");
  const navigate = useNavigate();

  const handleFinish = () => {
    if (answers.some((answer) => answer === "")) {
      alert("Пожалуйста, заполните все поля ответа."); // Уведомление о незаполненных полях
    } else {
      setOpenModalFailed(true);
    }
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
                    navigate(-1);
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
        {/* === Modals === */}

        <div className={style.completing_task__wrapper}>
          <div className={style.completing_task__top}>
            <div className={style.completing_task__top__item}>
              <div className={style.completing_task__top__item__top}>
                <img src={book} alt="book" />
                <p>Информация по заданию</p>
              </div>

              <h3>Модуль “Название модуля”</h3>
              <h4>N. Тема задания</h4>

              <div className={style.completing_task__top__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  assumenda pariatur sed omnis eius ipsum temporibus debitis
                  ipsa vero animi repellat minus non eum doloremque, deleniti
                  libero corporis nisi asperiores aut. Officia, sit pariatur
                  iure delectus incidunt asperiores temporibus laborum aut optio
                  praesentium nihil consequuntur enim animi accusamus sequi
                  voluptates facere ipsam eligendi quibusdam architecto cumque,
                  sapiente dolor ullam! Molestiae autem enim harum minus vitae
                  labore commodi consectetur ab rem quas aut similique non
                  veniam modi perferendis provident, magni atque impedit cum
                  veritatis. Quidem labore porro pariatur. Libero, praesentium
                  inventore dolorum quis a id quos odio ducimus explicabo ipsam
                  esse.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est assumenda pariatur sed omnis eius ipsum temporibus debitis
                  ipsa vero animi repellat minus non eum doloremque, deleniti
                  libero corporis nisi asperiores aut. Officia, sit pariatur
                  iure delectus incidunt asperiores temporibus laborum aut optio
                  praesentium nihil consequuntur enim animi accusamus sequi
                  voluptates facere ipsam eligendi quibusdam architecto cumque,
                  sapiente dolor ullam! Molestiae autem enim harum minus vitae
                  labore commodi consectetur ab rem quas aut similique non
                  veniam modi perferendis provident, magni atque impedit cum
                  veritatis. Quidem labore porro pariatur. Libero, praesentium
                  inventore dolorum quis a id quos odio ducimus explicabo ipsam
                  esse.
                </p>
              </div>
            </div>

            <div className={style.completing_task__top__item}>
              <div className={style.completing_task__top__item__top}>
                <img src={book} alt="book" />
                <p>Теория</p>
              </div>

              <div className={style.completing_task__top__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  assumenda pariatur sed omnis eius ipsum temporibus debitis
                  ipsa vero animi repellat minus non eum doloremque, deleniti
                  libero corporis nisi asperiores aut. Officia, sit pariatur
                  iure delectus incidunt asperiores temporibus laborum aut optio
                  praesentium nihil consequuntur enim animi accusamus sequi
                  voluptates facere ipsam eligendi quibusdam architecto cumque,
                  sapiente dolor ullam! Molestiae autem enim harum minus vitae
                  labore commodi consectetur ab rem quas aut similique non
                  veniam modi perferendis provident, magni atque impedit cum
                  veritatis. Quidem labore porro pariatur. Libero, praesentium
                  inventore dolorum quis a id quos odio ducimus explicabo ipsam
                  esse.
                </p>
              </div>
            </div>
          </div>

          <div className={style.completing_task__top__answer}>
            <div className={style.completing_task__top__answer__top}>
              <img src={answer} alt="answer" />
              <p>Поле для ответа</p>
            </div>

            <MonacoEditor
              height="35vh"
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

          <div className={style.completing_task__bottom}>
            {/* 🎧 Кнопка возвращения на предыдущую страницу */}
            <button onClick={() => navigate(-1)}>Отмена</button>
            <button onClick={handleFinish}>Завершить выполнение</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CompletingTaskMain;
