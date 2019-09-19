import React from 'react';
import { connect } from 'react-redux';

import { getData } from './actions';


class Index extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <h2>Hello</h2>
    )
  }
}

const mapStateToProps = ({ articles }) => {
  return { isLoading: articles.loading };
};


export default connect(
  mapStateToProps,
  { getData }
)(Index);