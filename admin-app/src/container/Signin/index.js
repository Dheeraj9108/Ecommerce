import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'

const Signin = () => {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,password
    }
    dispatch(login(user))
  }



  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input lable='Email' placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input lable='Password' placeholder='Password' type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
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
