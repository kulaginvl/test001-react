import React, { FC } from 'react'
import imgStar from '../assets/img/star.png';

interface IRatingsProps {
    count?: number;
}

const Ratings: FC<IRatingsProps> = ({ count }) => {
    return (
        <div className='ratings'>
            {Array(count)
            .fill(count)
            .map((_,key) => (
                <img key={key} src={imgStar} alt="raiting" />
            ))
            }
        </div>
    )
}
Ratings.defaultProps= {
    count: 5,
}

export default Ratings
