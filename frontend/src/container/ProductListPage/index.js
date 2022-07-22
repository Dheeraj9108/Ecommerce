import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import { useParams } from 'react-router-dom'

const ProductListPage = () => {

    const { slug } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsBySlug(slug))
    }, [])
    return (
        <Layout>

        </Layout>
    )
}

export default ProductListPage
