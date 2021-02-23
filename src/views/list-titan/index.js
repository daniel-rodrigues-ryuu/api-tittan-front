import React, { Component } from 'react';
import api from '../../services/api.js';

import { Link } from 'react-router-dom';

import './style.css';

export default class ListTitan extends Component {

  state = {
    titans: [],
  };

  componentDidMount() {
    this.loadTitans();
  }

  loadTitans = async () => {
    const response = await api.get("/users");

    this.setState({titans: response.data['titans']});

  }

  render() {

    const { titans } = this.state;
    return (
      <div className="list">
        <h2>Lista de Titans</h2>
        <p>quatidade de titans {titans.length}</p>
        <div className="titans-list">
          {titans.map(titan => (
            <article key={titan.id} id="titan-article">
              <p>
                Codigo {titan.id} <br />
                <strong>Nome {titan.name} {titan.lastName} </strong> <br />
                Titan {titan.titan} <br />
                Idade {titan.age} <br />
                Altura {titan.height} <br />
                Altura do Titan {titan.heightTitan}
              </p>
              <Link className="titan-link" to={`/detail-titan/${titan.id}`}>Detalhes do titan </Link>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
