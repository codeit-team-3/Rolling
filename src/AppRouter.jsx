import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import PostMessage from "./pages/PostMessage/PostMessage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* <Route index element={} />
        <Route path="list" element={} />
        <Route path="post" element={}>
          <Route path=":id" element={} />
          <Route path=":id/edit" element={} /> */}
        <Route path=":id/message" element={<PostMessage />} />
        {/* </Route> */}
        {/* <Route path="*" element={} /> */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
