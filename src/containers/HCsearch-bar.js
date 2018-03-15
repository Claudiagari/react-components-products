import {connect} from  'react-redux';
import SearchBar from '../components/search-bar';
import {bindActionCreators} from 'redux';
import { filterTextChanged, inStockOnlyChanged } from '../actions';


  function mapStateToProps(state) {
    const {
      filterText,
      inStockOnly
    } = state.AppReducer;

     return {
      filterText,
      inStockOnly
    };
  };
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText));
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue));
      }
    };
  }


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
