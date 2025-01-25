import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../configs";

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center section-lg">
        <h3 className="h3">{skillsSection.title}</h3>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          {skillsSection.data.map((section, index) => {
            return (
              <Col lg="6" className="order order-lg-2" key={index}>
                <Fade right duration={2000}>
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon
                              icon={skill.iconifyTag}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    )
  );
};

export default Skills;
