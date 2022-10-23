import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage";
import json from "./articles.json"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
  redirect
} from "react-router-dom";
import Content from './Content/Content';
// const root = ReactDOM.createRoot(document.getElementById('root'));
function loader({ params }){
  
  return params
}
const articleList=json.articles
const first = articleList[0].content[0].article
console.log(process.env.NODE_ENV)
const router = createBrowserRouter([
  {
    path: "/~hanya/wes_blog/",
    element:  <App articleList={articleList}  />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/~hanya/wes_blog/",
        element: <Content/>,
        loader:()=>{
          return redirect("/~hanya/wes_blog/"+first)
        }
      },
     
      {
        path: "/~hanya/wes_blog/:article",
        element: <Content/>,
        loader
      },
      // {
      //   path: "/"+articleList[0].content[0].article.replace(' ','_'),
      //   element: <Content />
      // }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
