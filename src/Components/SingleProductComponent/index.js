import React from 'react';
import './SingleProductComponent.scss';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {formatPrice} from '../../CommonUtils/commonUtils';

const SingleProductComponent = ({product}) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-12" key={product?.id}>
            <div className="product-wrapper">
                <Link className='singleProduct' to={`/product/${product?.id}`}>
                    <Card>
                        <Card.Img variant="top" src={product?.images[0]} alt ={product.title} />
                        <Card.Body>
                            <Card.Title>{product?.title}</Card.Title>
                            <div className='productItem'>
                            
                                {product?.category}
                                <div className='brand'>
                                    <span>Brand: </span>
                                    <span className='brandInfo'>{product?.brand}</span>
                                </div>
                                <div className='discount mb-2'>
                                <span>Discount: </span>
                                ({product?.discountPercentage}% Off)
                                </div>
                                <div className="updated-price">
                                    <div className='old-price'>
                                    {formatPrice(product?.price)}
                                    </div>
                                    <div className='new-price'>
                                        {formatPrice(product?.discountedPrice)}
                                    </div>
                                </div>                   
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
                
            </div>      
            )
        }
        
  export default SingleProductComponent