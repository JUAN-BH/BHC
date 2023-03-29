import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { EducationDataContextProvider } from "./contexts/EducationDataContext";
import { LangContextProvider } from "./contexts/LangContext";
import { ProjectDataContextProvider } from "./contexts/ProjectDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangContextProvider>
      <EducationDataContextProvider>
        <ProjectDataContextProvider>
          <App />
        </ProjectDataContextProvider>
      </EducationDataContextProvider>
    </LangContextProvider>
  </React.StrictMode>
);
