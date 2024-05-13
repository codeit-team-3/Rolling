import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css" // Quill의 스타일을 import합니다.
import styles from "./TextEditor.module.css"

const fontStyle = {
  Pretendard: "fontStyle__Pretendard",
  나눔명조: "fontStyle__NanumMyungjo",
  Gaegu: "fontStyle__Gaegu",
  신디나루: "fontStyle__SindiNaru",
}

const Editor = ({ onBlur, selectedFont }) => {
  const [value, setValue] = useState("")

  const handleBlurEditor = () => {
    onBlur && onBlur(value)
  }

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  }

  return (
    <div className={styles.textEditor}>
      <ReactQuill
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
        onBlur={handleBlurEditor}
        className={styles[fontStyle[selectedFont]]}
      />
    </div>
  )
}
export default Editor
