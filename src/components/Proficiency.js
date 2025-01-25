import React from "react";
import { SkillBars } from "../configs";
import { Container, Row, Progress, Col } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="mb-40">
        <Fade bottom duration={1000}>
          <Row>
            <h1 className="h2">Proficiency</h1>
            {SkillBars.map((skill) => {
              return (
                <Col lg="6" key={skill.Stack}>
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
