import React from "react"
import { Outlet } from "react-router-dom"
import GlobalHeader from "../GlobalHeader/GlobalHeader"

const AppLayout = () => {
  return (
    <>
      <GlobalHeader />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
