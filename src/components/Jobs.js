import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa";
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"
import jobLinks from "../constants/jobs";
import { Link } from "gatsby";

const Jobs = () => {
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container"></div>
        {/* job info */}

        <article className="job-info">
          <h3>Cat Robot</h3>
          <h4>Full Stack Developer</h4>
          <p className="job-date">Feb 2018 - Present</p>

          <div key="01" className="job-desc">
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>
              Lomo YOLO try-hard, kinfolk venmo hashtag paleo cardigan crucifix
              cold-pressed meggings succulents poutine jianbing.
            </p>
          </div>

          <div key="02" className="job-desc">
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>
              Gluten-free master cleanse ramps hell of seitan crucifix af trust
              fund.
            </p>
          </div>

          <div key="03" className="job-desc">
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>
              Shaman dreamcatcher brooklyn, stumptown direct trade beard cliche
              wolf readymade ramps lumbersexual next level vinyl.
            </p>
          </div>

          <div key="04" className="job-desc">
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>
              You probably haven't heard of them YOLO +1 tilde edison bulb echo
              park craft beer, knausgaard hexagon mustache sartorial
              post-ironic.
            </p>
          </div>

          <div key="05" className="job-desc">
            <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
            <p>
              Chillwave raw denim activated charcoal echo park, slow-carb lyft
              ugh kickstarter flexitarian.
            </p>
          </div>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
