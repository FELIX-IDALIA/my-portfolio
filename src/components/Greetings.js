import React, { useEffect } from "react";
import { greetings } from "../configs";
import { Button, Container, Row, Col } from "reactstrap";
//import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

import dynamic from 'next/dynamic';

const GreetingLottie = dynamic(() => import('../components/DisplayLottie'), { ssr: false });

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="7">
                  <h2 className="display-3 text-white">
                    {greetings.title + " "}
                  </h2>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">VIEW MY CV</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="5">
                  <GreetingLottie />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
