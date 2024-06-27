import {useRef} from 'react';
import { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import ReduxAddToCart from '../ReduxAddToCart';
import './ProductCard.css';

function ProductCard({product}){
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    const [inputValue, setInputValue] = useState('class');
    function printTitle(){
        pRef.current.style.display = 'block';
    }

    function changeText(e){
        setInputValue(e.target.value);
    };
    console.log("product " + product.id);
    return(
        <div>
            <div className='card'>
                <p onClick={printTitle}><span id='text'> Name : </span> {product.title}</p>
                <p ref={pRef}><span id='text'> Brand : </span> {product.brand}</p>
                <p ><span id='text'> Price : </span>{product.price.value}</p>
                <p ><span id='text'> Category : </span> {product.category}</p>
                <ReduxAddToCart product={product} />
            </div>

            {}
            {}
            
        </div>
    )
}

export default ProductCard;