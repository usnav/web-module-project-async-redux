import React from 'react';
import { connect } from 'react-redux';
import { getGifs } from '../actions/index';
import { useState } from 'react';


const SearchForm = (props) => {
    const { getGifs } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        getGifs(searchTerm);
    }

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <form >

            <input type="text" value={searchTerm} onChange={handleChange} />
            <button onSubmit={handleSubmit}> Search </button>
        </form>
    )
}

export default connect(null, {getGifs})(SearchForm);