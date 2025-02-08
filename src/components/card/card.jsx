import React from "react";

import { Row, Col } from "antd";

export default function card() {
  return (
    <>
      <div className="Card">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div className="text-content">

            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="ImageContent">
                
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
