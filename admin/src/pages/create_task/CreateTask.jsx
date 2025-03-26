import React, { useState } from "react";
import style from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import plus from "../../assets/icons/create_task/plus.svg";
import cross from "../../assets/icons/create_task/cross.svg";

const CreateTask = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectCheckResult, setSelectCheckResult] = useState(false);
  const [status, setStatus] = useState("active"); // Установка значения по умолчанию
  const [validity, setValidity] = useState("true"); // Установка значения по умолчанию
  const [terminalUsage, setTerminalUsage] = useState("on"); // Установка значения по умолчанию
  const [commandUsage, setCommandUsage] = useState("on"); // Стейт для использования терминала
  const [commandRestriction, setCommandRestriction] = useState("on"); // Стейт для ограничения команд
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    correctAnswer: "",
  });

  const [fileCount, setFileCount] = useState(0);
  const [files, setFiles] = useState([]); // Стейт для хранения файлов

  const navigate = useNavigate();

  /* 🤩 Тут мы получаем id модуля. От этого можно понимать, создаем ли мы новый модуль или редактируем уже существующий */
  const { state } = useLocation();

  console.log(state);

  const addFile = () => {
    setFiles([...files, { type: "", count: 0 }]); // Добавляем новый файл с пустыми значениями
  };

  const handleFileTypeChange = (index, value) => {
    const newFiles = [...files];
    newFiles[index].type = value;
    setFiles(newFiles);
  };

  const handleFileCountChange = (index, value) => {
    const newFiles = [...files];
    newFiles[index].count = value;
    setFiles(newFiles);
  };

  const validateFields = () => {
    const newErrors = {
      title: title.trim() ? "" : "Поле не может быть пустым",
      description: description.trim() ? "" : "Поле не может быть пустым",
      correctAnswer: correctAnswer.trim() ? "" : "Поле не может быть пустым",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSave = () => {
    if (validateFields()) {
      navigate("/tasks");
    }
  };

  return (
    <aside className={style.create_task}>
      <div className="container__inner">
        <div className={style.create_task__wrapper}>
          <div className={style.create_task__top}>
            <h2>Создание задания</h2>

            <div className={style.create_task__top__buttons}>
              <button onClick={handleSave}>Сохранить</button>
              <button onClick={() => navigate("/tasks")}>Отмена</button>
            </div>
          </div>

          <div className={style.create_task__main}>
            <aside className={style.create_task__main__left}>
              <div className={style.create_task__title}>
                <label htmlFor="title">Тематика задания</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Введите тему задания..."
                />
                {errors.title && <p className={style.error}>{errors.title}</p>}
              </div>

              <div className={style.create_task__text}>
                <p>Текст задания</p>
                <MDEditor value={description} onChange={setDescription} />
                {errors.description && (
                  <p className={style.error}>{errors.description}</p>
                )}
              </div>

              <div className={style.create_task__correct}>
                <p>Эталонный ответ</p>
                <textarea
                  onChange={(event) => setCorrectAnswer(event.target.value)}
                  value={correctAnswer}
                  placeholder="Введите правильный ответ к заданию..."
                ></textarea>
                {errors.correctAnswer && (
                  <p className={style.error}>{errors.correctAnswer}</p>
                )}
              </div>

              <div className={style.create_task__status__inputs}>
                <p>Тип проверки задания</p>

                <div className={style.create_task__status__inputs__main}>
                  <div>
                    <input
                      type="radio"
                      id="commands"
                      name="type_task"
                      checked={!selectCheckResult}
                      onChange={() => setSelectCheckResult(false)}
                    />
                    <label htmlFor="commands">проверка команды</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="result"
                      checked={selectCheckResult}
                      onChange={() => setSelectCheckResult(true)}
                      name="type_task"
                    />
                    <label htmlFor="result">
                      проверка результата выполнения
                    </label>
                  </div>
                </div>
              </div>

              {selectCheckResult ? (
                <React.Fragment>
                  {/* Inputs radio */}
                  <div className={style.create_task__status__inputs}>
                    <p>Использование терминала: включено (по умолчанию)</p>
                  </div>

                  <div className={style.create_task__status__inputs}>
                    <p>Тип задания</p>

                    <div className={style.create_task__status__inputs__main}>
                      <div>
                        <input
                          type="radio"
                          id="on"
                          name="terminalUsage"
                          checked={terminalUsage === "on"}
                          onChange={() => setTerminalUsage("on")}
                        />
                        <label htmlFor="on">Вывод в консоль</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="off"
                          name="terminalUsage"
                          checked={terminalUsage === "off"}
                          onChange={() => setTerminalUsage("off")}
                        />
                        <label htmlFor="off">
                          Изменение структуры и содержимого каталогов/файлов
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={style.create_task__status__inputs}>
                    <p>Ограничение на использование конкретных команд</p>

                    <div className={style.create_task__status__inputs__main}>
                      <div>
                        <input
                          type="radio"
                          id="commandOn"
                          name="commandRestriction"
                          checked={commandRestriction === "on"}
                          onChange={() => setCommandRestriction("on")}
                        />
                        <label htmlFor="commandOn">Включено</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="commandOff"
                          name="commandRestriction"
                          checked={commandRestriction === "off"}
                          onChange={() => setCommandRestriction("off")}
                        />
                        <label htmlFor="commandOff">Отключено</label>
                      </div>
                    </div>
                  </div>

                  {/* !- Inputs radio */}

                  <div className={style.create_task__commands}>
                    <input
                      type="text"
                      placeholder="Введите список команд через запятую..."
                    />
                  </div>

                  {/* Files */}
                  <div className={style.create_task__file}>
                    <div className={style.create_task__file__top}>
                      <div className={style.create_task__file__top__button}>
                        <p>Файлы</p>
                        <button onClick={addFile}>
                          <img src={plus} alt="plus" />
                        </button>
                      </div>

                      <p>
                        Выборка файлов производится в рандомно порядке из
                        “Хранилища файлов” (по умолчанию)
                      </p>
                    </div>

                    <ul>
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className={style.create_task__file__item}
                        >
                          <select
                            value={file.type}
                            onChange={(e) =>
                              handleFileTypeChange(index, e.target.value)
                            }
                          >
                            <option value="" disabled hidden>
                              Выберите тип файла
                            </option>
                            <option value="Тип 1">Тип файла 1</option>
                            <option value="Тип 2">Тип файла 2</option>
                            <option value="Тип 3">Тип файла 3</option>
                            <option value="Тип 4">Тип файла 4</option>
                          </select>

                          <div className={style.create_task__file__item__count}>
                            <p>кл-во</p>
                            <input
                              type="number"
                              value={file.count}
                              onChange={(e) =>
                                handleFileCountChange(index, e.target.value)
                              }
                            />
                          </div>

                          <button
                            className={style.create_task__file__item__delete}
                          >
                            <img src={cross} alt="cross" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    {files.length > 0 && (
                      <div className={style.create_task__file__item__path}>
                        <p>
                          Укажите путь, куда будет производиться загрузка
                          выбранных типов файлов.
                        </p>
                        <div
                          className={
                            style.create_task__file__item__path__default
                          }
                        >
                          <p>Каталог по умолчанию: /home/$USER/Tasks.</p>
                          <p>
                            Путь указывается относительно /home/$USER/Tasks.
                          </p>
                        </div>

                        <input type="text" placeholder="dir1/dir2" />
                      </div>
                    )}
                  </div>
                  {/* !- Files */}
                </React.Fragment>
              ) : (
                <div className={style.create_task__status__inputs}>
                  <p>Использование терминала</p>

                  <div className={style.create_task__status__inputs__main}>
                    <div>
                      <input
                        type="radio"
                        id="terminalOn"
                        name="terminalUsage"
                        checked={terminalUsage === "on"}
                        onChange={() => setTerminalUsage("on")}
                      />
                      <label htmlFor="terminalOn">включено</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="terminalOff"
                        name="terminalUsage"
                        checked={terminalUsage === "off"}
                        onChange={() => setTerminalUsage("off")}
                      />
                      <label htmlFor="terminalOff">отключено</label>
                    </div>
                  </div>
                </div>
              )}
            </aside>
            <aside className={style.create_task__main__right}>
              <div className={style.create_task__status}>
                <div className={style.create_task__status__inputs}>
                  <p>Статус задания</p>

                  <div className={style.create_task__status__inputs__main}>
                    <div>
                      <input
                        type="radio"
                        id="active"
                        name="status"
                        checked={status === "active"}
                        onChange={() => setStatus("active")}
                      />
                      <label htmlFor="active">доступно</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="notactive"
                        name="status"
                        checked={status === "notactive"}
                        onChange={() => setStatus("notactive")}
                      />
                      <label htmlFor="notactive">не доступно</label>
                    </div>
                  </div>
                </div>

                <div className={style.create_task__status__inputs}>
                  <p>Статус валидности задания</p>

                  <div className={style.create_task__status__inputs__main}>
                    <div>
                      <input
                        type="radio"
                        id="true"
                        name="bool"
                        checked={validity === "true"}
                        onChange={() => setValidity("true")}
                      />
                      <label htmlFor="true">true</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="false"
                        name="bool"
                        checked={validity === "false"}
                        onChange={() => setValidity("false")}
                      />
                      <label htmlFor="false">false</label>
                    </div>
                  </div>
                </div>

                <div className={style.create_task__tasks}>
                  <p>Задания</p>

                  <select>
                    <option value="" selected disabled hidden>
                      Выберите модуль из списка
                    </option>
                    <option value="Модуль 1">Модуль 1</option>
                    <option value="Модуль 2">Модуль 2</option>
                    <option value="Модуль 3">Модуль 3</option>
                    <option value="Модуль 4">Модуль 4</option>
                  </select>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CreateTask;
