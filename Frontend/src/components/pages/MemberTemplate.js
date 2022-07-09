import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchMemberBySlug } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/memberTemplate.css";

// import ArticleFlex from "../elements/ArticleFlex";
// import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function MemberTemplate() {
  const member = useSelector((state) => state.members.member);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchMemberBySlug(slug));
  }, [dispatch, slug]);

  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="member-template" className="section">
      <div className="post-container">
        {/* Header */}
        <div id="member-info-header">
          <div>
            <div id="member-info-img" />
          </div>
          <div>
            <h1 className="w700 vbg-text small-ls">
              {t("MemberTemplate.MemberTitle")}
            </h1>
            <hr className="small-blue-hr" />
            <div id="member-name">
              <h1 className="w700 bg-text small-ls sarabun">{member.firstname} {member.lastname}</h1>
              <p className="w500 sm-text small-ls member-choice red-choice white-text sarabun">
              {member.role}
              </p>
            </div>

            <hr className="small-blue-hr" />

            <div id="member-info-contact">
              <p className="w500 vsm-text small-ls sarabun">{member.position}</p>
              <p className="w500 vsm-text small-ls blue-text">
              {member.email}
              </p>
              <p className="w500 vsm-text small-ls">
              {member.description}
              </p>
            </div>
          </div>
        </div>

        {/* Research */}
        <div className="member-info-work">
          <h1 className="w700 nm-text small-ls">
            {t("MemberTemplate.Research")}
          </h1>
          <div
            id="mb-info-long-flex"
            onClick={() => linkPath("/research-post")}
          >
            {/* <ArticleLongFlex />
            <ArticleLongFlex /> */}
          </div>
        </div>

        {/* Research */}
        <div className="member-info-work">
          <h1 className="w700 nm-text small-ls sarabun">
            {t("MemberTemplate.Article")}
          </h1>
          <div id="mb-info-flex" onClick={() => linkPath("/article-post")}>
            {/* <ArticleFlex />
            <ArticleFlex />
            <ArticleFlex /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
