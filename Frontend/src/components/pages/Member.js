import React, { useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { fetchMember } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/member.css";

import MemberLongFlex from "../elements/MemberLongFlex";

export default function Member() {
  const members = useSelector(state => state.members.members);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchMember(10));
  }, [dispatch]);


  const linkPath = (path) => {
    window.location.href = path;
  };
  return (
    <div id="member-page" className="section">
      <div>
        <div className="section">
          <div className="page-container">
            {/* Header */}
            <div>
              <h1 className="vbg-text w700">{t('Member.Member')}</h1>
              <hr className="small-blue-hr" />
            </div>

            {/* Choice */}
            <div id="member-choice-section">
              <div>
                <p className="sm-text w500 small-ls sarabun">
                {t('Member.MemberDescription')}{" "}
                </p>
              </div>
              <div>
                <h1 className="sm-text w500 member-choice red-choice white-text sarabun">
                  {t('Member.Researcher')}
                </h1>
                <h1 className="sm-text w500 member-choice blue-choice white-text sarabun">
                  {t('Member.CurrentMember')}
                </h1>
                <h1 className="sm-text w500 member-choice grey-choice white-text sarabun">
                  {t('Member.OldMember')}
                </h1>
              </div>
            </div>

            <hr className="small-grey-hr member-grey-hr" />
          </div>
        </div>
        <div className="post-container">
          <div id="member-long-list">
            {
              members.map((member,index)=> 
              <div onClick={() => linkPath("/member-info/" + member.attributes.slug)}>
              <MemberLongFlex data={member} color="red" />
            </div>
              )
            }
            {/* <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="red" />
            </div>
            <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="red" />
            </div>
            <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="red" />
            </div>
            <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="blue" />
            </div>
            <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="blue" />
            </div>
            <div onClick={() => linkPath("/member-info")}>
              <MemberLongFlex color="grey" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
