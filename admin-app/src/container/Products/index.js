import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.action';

const Products = () => {
  const [name, setName] = useState('');
  const [description, setDiscription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [price, setPrice] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const category = useSelector(state => state.category)

  const handleClose = () => {
    const form = new FormData();
    form.append('name',name);
    form.append('quantity',quantity);
    form.append('price',price);
    form.append('description',description);
    form.append('category',categoryId);
    for(let pic of productPictures){
      form.append('productPicture',pic)
    }
    dispatch(addProduct(form))
    setShow(false);
  }

  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }
  const handleProductPictures = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }
  console.log(productPictures);

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input lable="Name" value={name} placeholder={'Product Name'} onChange={(e) => setName(e.target.value)} />
          <Input lable="Quality" value={quantity} placeholder={'Quantity'} onChange={(e) => setQuantity(e.target.value)} />
          <Input lable="Price" value={price} placeholder={'Price'} onChange={(e) => setPrice(e.target.value)} />
          <Input lable="Description" value={description} placeholder={'Description'} onChange={(e) => setDiscription(e.target.value)} />
          <select className='form-select' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option>Select category</option>
            {
              createCategoryList(category.categories).map(option => <option key={option.value} value={option.value}>{option.name}</option>)
            }
          </select>
          {
            productPictures.length > 0 ? productPictures.map((pic,index) => <div key={index}>{(pic.name)}</div>) : []
          }
          <input type='file' name="productPicture" onChange={handleProductPictures}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Products
