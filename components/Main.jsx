import React from 'react';
import Boton from './Boton';
import axios from 'axios';
import _ from 'lodash';
import LineStatus from './LineStatus';
import Loading from './Loading';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [],
      selectedSubte: {},
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    this.setState({ loading: true });
    axios
      .get('/info')
      .then(res => res.data)
      .then(info =>
        this.setState({
          selectedSubte: info.find(function(subte) {
            return subte.LineName === evt;
          }),
          loading: false,
        }),
      );
  }
  componentDidMount() {
    axios
      .get('/info')
      .then(res => res.data)
      .then(info => {
        this.setState({ info });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Estado de las Lineas</h1>
        {this.state.info.length == 0 ? (
          <Loading />
        ) : (
          <div>
            {_.map(this.state.info, subte => {
              return (
                <div style={{ display: 'inline-block' }} key={subte.LineName}>
                  <Boton
                    selectedLine={this.state.selectedSubte}
                    onClick={() => {
                      if (!this.state.loading) {
                        this.handleSubmit(subte.LineName);
                      }
                    }}
                    LineName={subte.LineName}
                  />
                </div>
              );
            })}
            <div>
              <LineStatus
                selectedSubte={this.state.selectedSubte}
                loading={this.state.loading}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
