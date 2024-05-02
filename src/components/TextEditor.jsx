import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css" // Quill의 스타일을 import합니다.
import styles from "./TextEditor.module.css"

const Editor = () => {
  const [value, setValue] = useState("")

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
      />
    </div>
  )
}
export default Editor
