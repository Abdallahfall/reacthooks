import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ onFilterChange }) => {
  return (
    <Form className="filter-form">
      <Form.Control
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      <Form.Control
        type="number"
        min="1"
        max="10"
        placeholder="Filter by rating"
        onChange={(e) => onFilterChange('rating', e.target.value)}
      />
    </Form>
  );
};

export default Filter;