import React, { FC } from 'react'
import imgStyl from '../assets/img/styl.jpeg';
import svgHearth from '../assets/img/heart.svg';
import svgCart from '../assets/img/cart.svg';
import Ratings from './Ratings';

export interface ICardProps {
   title: string;
   rating: number;
   price:{
       new: number;
       old: number;
       hot?: boolean;
   };
   color: string;
   material: string;
   size: string;
   vendorcode: string;
   seller: string;
} 

const formatPrice = (price: number): string =>
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')



const Card: FC<ICardProps> = ({
    title,
    rating,
    color, 
    material,
    vendorcode,
    price,
    seller,
    size,
}) => {
    return (
        <div className='card'>
            <div className='card__imposition'></div>
            <ul className='columns columns--card'> 
                <li>
                        <div className='columns__preview'>
                            <div className='columns__preview-img'>
                                <img src={imgStyl} alt="" />
                            </div>
                            <h4>{title}</h4>
                        </div>
                </li>
                <li className='columns__rating'>
                    <Ratings count={Math.floor(rating)} />
                    <b>{rating}</b>
                </li>
                <li className={`columns__price ${price.hot ? 'columns__price--hot' : ''}`}>
                        <span>{formatPrice(price.new)} P</span>
                        <s>{formatPrice(price.old)} P</s>
                </li>
                <li>{color}</li>
                <li>{material}</li>
                <li>{size}</li>
                <li>{vendorcode}</li>
                <li>
                    <a href="/">{seller}</a>
                </li>
                <button className='button button--cart'> 
                    <img src={svgCart} alt="cart" />
                    <span>Купить</span>
                </button>
                <button className='button button--like'>
                    <img src={svgHearth} alt="hearth" />
                </button>
            </ul>
           
        </div>
    )
}

export default Card
