import React from 'react'
import FullStar from './FullStar'
import HalfStar from './HalfStar'
import OutlineStar from './OutlineStar'
const Star = ({ rating }) => {
    const AllStar = Array.from({ lenght: 5 }, (elem, rating) => {
        let Starrating = rating + 0.5;
        return (
            Starrating >= index + 1 ? <FullStar /> : Starrating >=
                index ? <HalfStar /> : <OutlineStar />
        )

    })
    return (
        <>
            {/* {rating} */}
            {AllStar}
            {/* <FullStar /> */}
        </>
    )
};

export default Star
