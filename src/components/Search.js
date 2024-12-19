import { useState } from 'react';
import './Search.css';
import RecipesResults from './RecipesResults';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const handleClick = async() => {
        const response =await fetch(`https://api.spoonacular.com/recipes/complexSearch`+
            `?apiKey=b38584a2913b4237b5565a64bc93c1fe&query=${searchQuery}`)
        const responseJson= await response.json();
        setSearchResults(responseJson.results)
    }

    return (
       <>
            <div className="search-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by ingredients..."
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button onClick={handleClick}>Search</button>
            </div>
            {searchResults && <RecipesResults recipes={searchResults}/>}
        </>
        );
}

export default Search;