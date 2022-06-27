import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'

const Signin = () => {

  
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email: 'dheeraj@gmail.com',
      password: "dheeraj@123"
    }
    dispatch(login(user))
  }



  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input lable='Email' placeholder='Email' type="text" value="" onChange={() => { }} />
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

export default Signin
