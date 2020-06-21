import React, { useState } from "react";
import "./editor-form.scss";

function EditorForm(props) {
  const { data } = props;

  const [title, setTitle] = useState(data.meta.title);
  const [description, setDescription] = useState(data.meta.description);
  const [isDataSaved, changeDataStatus] = useState(false)

  const submitEdit = async (e) => {
    e.preventDefault();
    const changedData = {
      ...data,
      meta: {
        title,
        description,
      },
    };

    await fetch(
      "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/service",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(changedData),
      }
    );
    changeDataStatus(true);
    setTimeout(() => {
      props.togglePopup("editor");
      props.getSectionsData()
    }, 2000);
  };

  return (
    <form className="editor d-flex flex-column">
      <div className="d-flex flex-column">
        <input
          type="text"
          placeholder="Title"
          className="editor__input base-text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          className="editor__input base-text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex justify-between">
        <button
          type="button"
          className="btn-accent"
          onClick={(e) => submitEdit(e)}
        >
          Ok
        </button>
        <button
          className="btn-main"
          onClick={() => props.togglePopup("editor")}
        >
          Cancel
        </button>
      </div>
      {isDataSaved && (
        <span className="editor__notification base-heading-sm">Data Saved</span>
      )}
    </form>
  );
}

export default EditorForm;
