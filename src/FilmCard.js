import React from 'react';
import { Card } from 'react-bootstrap';

const FilmCard = ({ film }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={film.posterURL} alt={film.title} />
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text>{film.description}</Card.Text>
        <Card.Text>Note: {film.note}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
