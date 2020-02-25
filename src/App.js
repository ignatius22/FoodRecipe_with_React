import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Col, Form ,Button, Card } from 'react-bootstrap'
import Recipes from './components/Recipes';
import SearchRecipe from './components/SearchRecipe';

const App = () => {
   

    return ( 
                    
            <div className = "App" >
            <SearchRecipe/>
            
        </div>
    );
}

export default App;