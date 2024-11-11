import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "nprogress/nprogress.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import "react-awesome-lightbox/build/style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// Nếu bạn muốn bắt đầu đo lường hiệu suất trong ứng dụng, truyền một hàm
// để ghi log kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một endpoint phân tích. Tìm hiểu thêm tại https://bit.ly/CRA-vitals
reportWebVitals();
