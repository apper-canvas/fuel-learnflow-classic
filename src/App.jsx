import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import React from "react";
import PromptPassword from "@/components/pages/PromptPassword";
import Callback from "@/components/pages/Callback";
import ErrorPage from "@/components/pages/ErrorPage";
import LessonViewer from "@/components/pages/LessonViewer";
import Certificate from "@/components/pages/Certificate";
import Profile from "@/components/pages/Profile";
import Signup from "@/components/pages/Signup";
import Login from "@/components/pages/Login";
import CourseCatalog from "@/components/pages/CourseCatalog";
import MyLearning from "@/components/pages/MyLearning";
import ResetPassword from "@/components/pages/ResetPassword";
import CourseDetail from "@/components/pages/CourseDetail";
import Layout from "@/components/organisms/Layout";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;