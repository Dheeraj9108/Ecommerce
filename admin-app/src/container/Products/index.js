import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.action';
import Modal from '../../components/UI/Modal';
import './style.css';
import { generatePublicUrl } from '../../urlconfig';

const Products = () => {
  const [name, setName] = useState('');
  const [description, setDiscription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [price, setPrice] = useState('');
  const [productPictures, setProductPictures] = useState([]);
  const [productDeatils, setProductDeatils] = useState(null);
  const [show, setShow] = useState(false);
  const [productDetailsModal, setProductDetailModal] = useState(false);
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();

  const category = useSelector(state => state.category)

  const handleClose = () => {
    const form = new FormData();
    form.append('name', name);
    form.append('quantity', quantity);
    form.append('price', price);
    form.append('description', description);
    form.append('category', categoryId);
    for (let pic of productPictures) {
      form.append('productPicture', pic)
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
  const renderAddProductModal = () => {
    return (
      <Modal show={show} handleClose={handleClose} modalTitle={"Add New Product"}>
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
          productPictures.length > 0 ? productPictures.map((pic, index) => <div key={index}>{(pic.name)}</div>) : []
        }
        <input type='file' name="productPicture" onChange={handleProductPictures}></input>
      </Modal>
    )
  }
  const handleCloseProductDetailModal = () => {
    setProductDetailModal(false);
  }
  const showProductDetailsModal = (product) => {
    setProductDeatils(product)
    setProductDetailModal(true)
    console.log(product)
  }
  const renderProductDetailsModal = () => {
    if (!productDeatils) { return null }
    return (
      <Modal show={productDetailsModal} handleClose={handleCloseProductDetailModal} modalTitle={"Product Details"} size="lg">
        <p>Product Details Modal</p>
        <Row>
          <Col md='6'>
            <label className='key' >Name</label>
            <p className='value'>{productDeatils.name}</p>
          </Col>
          <Col md='6'>
            <label className='key' >Price</label>
            <p className='value'>{productDeatils.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <label className='key' >Quantity</label>
            <p className='value'>{productDeatils.quantity}</p>
          </Col>
          <Col md='6'>
            <label className='key' >Category</label>
            <p className='value'>{productDeatils.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <label className='key' >Description</label>
            <p className='value'>{productDeatils.description}</p>
          </Col>
        </Row>
        <Row>
          <Col >
            <label className='key'>Product Pictures</label>
            <div style={{ display: 'flex' }}>
              {productDeatils.productPicture.map(picture => {
                return (
                  <div className='productImgContainer'>
                    <img src={generatePublicUrl(picture.img)} alt="" />
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Modal>
    )
  }

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            product.products.length > 0 ? product.products.map((product, index) =>
              <tr onClick={() => showProductDetailsModal(product)} key={product._id}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category.name}</td>
              </tr>
            ) : null
          }

        </tbody>
      </Table>
    )
  }

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
        <Row>
          <Col>
            {renderProducts()}
          </Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
    </Layout>
  )
}

export default Products
