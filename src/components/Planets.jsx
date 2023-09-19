import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet';

const fetchData = async (page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const data = await res.json();

    return data;
} 
const Planets = () => {
    const [page, setPage] = useState(1)
    const { data: planets, isLoading, error } = useQuery(['planets', page], () => fetchData(page), { keepPreviousData : true });
    if(isLoading) return <div className='loading'>Loading...</div>
    
    if(error) return <div className='error'>an error occured {error.message}</div>
    
    return (
        <div>
            <h2>Planets</h2>
            <button onClick={() => setPage(1)} >page 1</button>
            <button onClick={() => setPage(2)} >page 2</button>
            <button onClick={() => setPage(3)} >page 3</button>
            {planets && planets.results.map(planet => <Planet planet={planet} key={planet.name} /> )}
        </div>
    )
}

export default Planets