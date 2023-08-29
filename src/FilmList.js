import React from 'react';
import FilmCard from './FilmCard';
import { Card, Form, Button } from 'react-bootstrap';

const FilmList = ({ films, onAddFilm }) => {
  return (
    <div className="film-list">
      <Card className="add-film-card">
        <Card.Body>
          <h3>Ajouter un nouveau film</h3>
          <Form onSubmit={onAddFilm}>
            <Form.Group controlId="title">
              <Form.Label>Titre</Form.Label>
              <Form.Control type="text" name="title" required />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" cols={20} rows={3} required />
            </Form.Group>
            <Form.Group controlId="posterURL">
              <Form.Label>URL de l'affiche</Form.Label>
              <Form.Control type="url" name="posterURL" required />
            </Form.Group>
            <Form.Group controlId="note">
              <Form.Label>Note</Form.Label>
              <Form.Control type="number" name="note" min="1" max="10" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ajouter le film
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {films.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
    </div>
  );
};

export default FilmList;