import React from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRecipies } from './redux/actions';
import Header from './components/Header';
import RecipiesList from './components/RecipiesListPage';



function App({ recipies, getRecipies }) {

  React.useEffect(() => {
    getRecipies()
  }, [])

  return (
    <div>
      <Header />

      <RecipiesList data={recipies} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    recipies: state.reducer.recipies
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRecipies
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
