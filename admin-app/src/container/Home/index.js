import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css'

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Sidebar</Col>
          <Col md={10} style={{marginLeft:"auto"}}>container</Col>
        </Row>

      </Container>
      {/* <div className="jumbotron text-center" style={{margin:"6rem",background:"#fff"}}>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo tenetur maxime vero illum, nihil incidunt, fuga ipsum amet, quod voluptate libero porro earum eius nesciunt. Minima veritatis quibusdam rerum, tenetur vitae deleniti perferendis ab inventore atque nulla, quisquam dignissimos suscipit aperiam necessitatibus voluptatibus omnis, fugiat tempora? Doloribus suscipit nam eum optio numquam enim nemo? Harum praesentium perspiciatis, dicta assumenda pariatur quisquam eveniet tempore aspernatur facilis doloremque, suscipit inventore. Ab nobis voluptatum sed nemo officia quasi nisi nihil vero nam, eum officiis et atque, sunt recusandae! Veritatis odio itaque eum, laborum dolor ab, ducimus, culpa fuga aliquid eveniet possimus. Expedita, culpa.</p>
      </div> */}
    </Layout>
  )
}

export default Home
