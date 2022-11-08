import React from 'react'
import './product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating) 
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>  
                            //1. Array(rating) creates an array of rating empty elements, 
                            //so if rating is 3, then your Array(rating) returns [empty, empty, empty].
                            //2. [empty, empty, empty].fill() returns [undefined, undefined, undefined], 
                            //because in JavaScript, you can't map() an empty value. That's a bit 
                            //quirky part of JavaScript, but it is what it is.
                            //3. Now, [undefined, undefined, undefined].map((_, i) => ( <p>⭐</p> )) 
                            //converts your array to [<p>⭐</p>, <p>⭐</p>, <p>⭐</p>], 
                            //which is not a valid JavaScript, but I'm assuming you're using React and JSX. 
                            //It will be compiled to an array of HTML paragraph elements with a ⭐ as its text, each.
                        ))} 
                </div>
            </div>
            <img src={image}
                alt='' />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product