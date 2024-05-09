import React from "react"

function ButtonBase({ children, ...restProps }) {
  return <button {...restProps}>{children}</button>
}

export default ButtonBase
