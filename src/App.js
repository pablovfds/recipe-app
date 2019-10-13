import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, ButtonToolbar, Form, Col } from "react-bootstrap";

const App = () => {
  const APP_ID = "73807f54";
  const APP_KEY = "c4417d823131ed2927b9b61784755a76";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    // console.log("Effect has been run!");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Form onSubmit={getSearch} className="search-form">
        <Form.Row>
          <Col>
            <Form.Control
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Search"
            />
          </Col>
          <ButtonToolbar>
            <Button variant="info" type="submit">
              Search
            </Button>
          </ButtonToolbar>
        </Form.Row>
      </Form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
