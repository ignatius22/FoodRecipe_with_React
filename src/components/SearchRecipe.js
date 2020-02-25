import React, {useEffect, useState} from 'react';
import { Col, Form ,Button, Card, Container, Row } from 'react-bootstrap'
import Recipes from '../components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css'



const SearchRecipe = () => {
    const APP_ID = "4e80d906";
    const APP_KEY = "90d9ed76fe22d477f1c7c3676ed9f686";
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(()=>{
        getRecipes()
    },[query]);

    const getRecipes = async() =>{
        const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits);
        console.log(data)
    }

    const updateSearch =  e =>{
        setSearch(e.target.value)
    }
    const submit = e =>{
        e.preventDefault()
        setQuery(search)
        setSearch("");
    }


    return ( 
                    
            <div className = "App" >
                <div className="input-group">
                <form onSubmit={submit}>
                <div class="input-group-append" id="button-addon4">
                    <input type='text' className="form-control" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" value={search} onChange={updateSearch}/>
                    <button  className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </form>
                </div>  
           
            {recipes.map(recipe =>(
                <Recipes
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                ingredientLines={recipe.recipe.ingredientLines}
                 image={recipe.recipe.image}
                 ingredients={recipe.recipe.ingredients}/>
            ))}
        
            
        </div>
    );
}

export default SearchRecipe;