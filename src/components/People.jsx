import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person';

const fetchData = async () => {
    const res = await fetch('https://swapi.dev/api/people');
    const json = await res.json();
    return json;
}
const People = () => {
    const { data: people, isLoading, error } = useQuery('people', fetchData);
    if(isLoading) return <div className='loading'>loading...</div>
    if(error) return <div className='error'>an error occured { error.message }</div>
    return (
        <div className='people'>
            <h2>People</h2>
            {people && people.results.map(person => <Person key={person.name} person={person} />)}
        </div>
    )
}

export default People