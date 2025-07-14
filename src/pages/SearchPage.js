import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
    //useSearchParams query
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') || 1;
    const q = searchParams.get('keyword') || '';
    console.log(page, q);
    //useEffect

    return (
        <div>SearchPage</div>
    )
}

export default SearchPage


//react redux toolkit