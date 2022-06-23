import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from '../../components/UI/Input'

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input lable='First Name' placeholder='First Name' type="text" value="" onChange={() => { }} />
                </Col>
                <Col md={6}>
                  <Input lable='Last Name' placeholder='Last Name' type="text" value="" onChange={() => { }} />
                </Col>
              </Row>
              <Input lable='Email' placeholder='Email' type="email" value="" onChange={() => { }} />
              <Input lable='Password' placeholder='Password' type="password" value="" onChange={() => { }} />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signup
