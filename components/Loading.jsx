import React from 'react';
import { BeatLoader } from 'react-spinners';

export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <BeatLoader color={'#1E90FF'} loading={this.state.loading} />
      </div>
    );
  }
}
