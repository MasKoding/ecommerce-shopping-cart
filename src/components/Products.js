import React, { Component } from 'react';

export default class Products extends Component {
    render() {
     const productItems=this.products.map(product=>(
         <div className="col-md-4">
             <div className="thumbnail text-center">
            <a href={'#${product.product_id}'} onClick={this.props.handleAddToCard}>
                <img src={`/products/${product.thumbnail}.gif`} alt={product.title}/>
                <p>
                    {product.title}
                </p>
            </a>
             </div>
         </div>
         )
     )
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
