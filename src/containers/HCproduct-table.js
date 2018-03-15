import { connect } from 'react-redux';
import ProductTable from '../components/product-table';
  function mapStateToProps(state) {
    
    return {
      
      products:state.filteredProducts
    };
  }


export default connect(mapStateToProps)(ProductTable)
