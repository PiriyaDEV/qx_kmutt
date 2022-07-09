import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/project.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Project() {
  // const [activityFilter, setActivityFilter] = useState([false, false]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);

  // const selectFilter = (type) => {
  //   let temp = [...activityFilter];
  //   if (type === "project") {
  //     temp[0] = !temp[0];
  //   } else {
  //     temp[1] = !temp[1];
  //   }
  //   setActivityFilter(temp);
  // };

  useEffect(() => {
    dispatch(fetchActivity(3));
  }, [dispatch]);

  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="project" className="section">
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
        {/* <div id="project-tag" className="section">
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
            </div> */}
        <div>
          {/* List */}
          <div id="project-list">
            {activities &&
              activities.map((activity, index) => (
                <div
                  key={index}
                  onClick={() =>
                    linkPath("/activity-post/" + activity.slug)
                  }
                >
                  <ArticleLongFlex data={activity} page="activity" />
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

        <div className="showmore blue-text sm-text w500 pointer">
          แสดงเพิ่ม ...
        </div>
      </div>
    </div>
  );
}
