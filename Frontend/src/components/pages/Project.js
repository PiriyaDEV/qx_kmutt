import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/project.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Project() {
  const [projectFilter, setProjectFilter] = useState([false, false]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  const selectFilter = (type) => {
    let temp = [...projectFilter];
    if (type === "activity") {
      temp[0] = !temp[0];
    } else {
      temp[1] = !temp[1];
    }
    setProjectFilter(temp);
  };

  useEffect(() => {
    dispatch(fetchProject(3));
  }, [dispatch]);

  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="project" className="section">
      <div>
        <div className="section">
          <div className="page-container">
            {/* Header */}
            <div id="project-header">
              {/* Temp Pic */}
              <div>
                <div className="pj-blue-temp" />
                <div className="pj-grey-temp" />
              </div>
              <div id="project-header-text">
                <div>
                  <h1 className="vbg-text w700">{t("Project.Project")}</h1>
                  <hr className="small-blue-hr" />
                  <p className="sm-text w500 small-ls sarabun">
                    {t("Project.ProjectDescription")}{" "}
                  </p>
                </div>

                <div>
                  <hr className="small-grey-hr" />
                </div>
              </div>
            </div>

            {/* Choice */}
            <div id="project-tag" className="section">
              <h1
                onClick={() => selectFilter("activity")}
                className={`sm-text w500 tag blue-text sarabun ${
                  projectFilter[0] ? "active-tag" : null
                }`}
              >
                {t("Project.Activity")}
              </h1>
              <h1
                onClick={() => selectFilter("project")}
                className={`sm-text w500 tag blue-text sarabun ${
                  projectFilter[1] ? "active-tag" : null
                }`}
              >
                {t("Project.ProjectTH")}
              </h1>
            </div>
          </div>
        </div>
        <div className="post-container">
          {/* List */}
          <div id="project-list">
            {projects &&
              projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() =>
                    linkPath("/project-post/" + project.attributes.slug)
                  }
                >
                  <ArticleLongFlex data={project} />
                </div>
              ))}
            {/* <div onClick={() => linkPath("/project-post")}>
              <ArticleLongFlex />
            </div>
            <div onClick={() => linkPath("/project-post")}>
              <ArticleLongFlex />
            </div>
            <div onClick={() => linkPath("/project-post")}>
              <ArticleLongFlex />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
