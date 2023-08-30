import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductListItem.scss";
import SingleProductComponent from "../SingleProductComponent";

const ProductListItemComponents = ({products, category}) => {
  return (
        <div className="productSection">
          <Container>
            <Row>
              <Col>
                <div className="wrapTitle">
                  <h3 className="sectionTitle">{category}</h3>
                </div>
                <div className='productLists row'>
                  
                {
                  products.map(product => {
                    let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

                    return (
                      <div className='col-lg-3 col-md-4 col-sm-6 col-12' key={product.id}>
                      <SingleProductComponent product={{...product, discountedPrice}} />
                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default ProductListItemComponents