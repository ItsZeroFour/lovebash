import React, { useState } from "react";
import style from "./style.module.scss";
import deleteIcon from "../../assets/icons/users/delete.svg";
import paper from "../../assets/icons/modules/list.svg";
import paper2 from "../../assets/icons/user_main/list.svg";
import { useNavigate, Link } from "react-router-dom";

const FileStorage = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const navigate = useNavigate();

  const filesData = [
    {
      id: 1,
      title: "Название файла 1",
      url: "месторасположение",
      type: "Тип 2",
    },
    {
      id: 2,
      title: "Название файла 2",
      url: "месторасположение",
      type: "Тип 1",
    },
  ];

  const filteredFiles = filesData.filter((file) => {
    const matchesSearch = file.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType && selectedType !== "" ? file.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <aside className={style.file_storage}>
      {openModalSuccess && (
        <div className={style.file_storage__modal}>
          <div className={style.file_storage__modal__container}>
            <div className={style.file_storage__modal__top}>
              <img src={paper2} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.file_storage__modal__buttons}>
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
                  window.location.reload();
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container__inner">
        <div className={style.file_storage__wrapper}>
          <div className={style.file_storage__top}>
            <h1>Хранилище файлов</h1>

            <input type="file" hidden id="file" />

            <label htmlFor="file">Загрузить</label>
          </div>

          <div className={style.file_storage__filter}>
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Типы файлов</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 2">Тип 2</option>
            </select>
          </div>

          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Название</th>
              <th>URL</th>
              <th>Тип файла</th>
              <th></th>
            </tr>
            {filteredFiles.map((file) => (
              <tr
                key={file.id}
                onClick={() =>
                  navigate(`/module/create`, { state: { id: file.id } })
                }
              >
                <td>
                  <img src={paper} alt="paper" />
                </td>
                <td>{file.id}</td>
                <td>{file.title}</td>
                <td>{file.url}</td>
                <td>{file.type}</td>
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
            ))}
          </table>
        </div>
      </div>
    </aside>
  );
};

export default FileStorage;
