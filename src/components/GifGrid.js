import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifs';
import { GidGridItem } from './GidGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])



    const {data:images, loading} = useFetchGifs(category);


    return (
        <>
            <h3> { category } </h3>

            {loading && <p>loading</p>}
            
            <div className="card-grid">

                {
                    images.map( img => (
                        <GidGridItem 
                        key = {img.id}
                        {...img}
                        />   
                    ))
                }
            </div>
        </>
    )
}
