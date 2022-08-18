import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ title, service='car' }) {
  return (
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/models">Models</a></li>
        <li><a href="/brands">Brands</a></li>
        <li><a href="/cars">Cars</a></li>
      </ul>
      <h1>{title}</h1>
      <Link class="button" to={{pathname: `/${service}s/create`}}>Create new {service}</Link>
    </header>
  );
}