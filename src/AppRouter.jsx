import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./pages/HomePage"
import List from "./pages/List"
import Post from "./pages/Post"
import PostId from "./pages/PostId"
import PostIdEdit from "./pages/PostIdEdit"
import PostIDMessage from "./pages/PostIDMessage"
import NotFoundPage from "./pages/NotFoundPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="list" element={<List />} />
        <Route path="post" element={<Post />}>
          <Route path=":id" element={<PostId />} />
          <Route path=":id/edit" element={<PostIdEdit />} />
          <Route path=":id/message" element={<PostIDMessage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
