import React from "react";
import style from "./recipe.module.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Recipe = ({ label, calories, image, ingredients }) => {
  const convertCalories = actualCalories => {
    const input = parseFloat(actualCalories);
    if (Number.isNaN(input)) {
      return "";
    }
    
    return (input).toFixed(2);
  };

  return (
    <Card className={style.recipe}>
      <Card.Img variant="top" src={image} rounded/>
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Text>Calories: {convertCalories(calories)} kcal</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {ingredients.map(ingredient => (
          <ListGroupItem key={ingredient.text}>{ingredient.text}</ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Recipe;
