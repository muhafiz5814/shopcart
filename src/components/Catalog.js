import React from "react";
import Product from "./Product";
import {connect} from "react-redux"
import { setFilter, clearFilter } from "../store/actions/catalogActions";

const Catalog = ({departments, products, onSetFilter, onClearFilter}) => {
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      {departments && 
        departments.map(department => (
          <button key={department.id} className="department-filters" onClick={() => onSetFilter(department.title)}>
            {department.title}
          </button>
        ))
      }
      <button className="department-filters clear-btn" onClick={() => onClearFilter()}>
        Clear Filter
      </button>
      <div className="product-units">
        {products && products.map(product => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
};

const filterProducts = (products, filter) => filter ? products.filter(product => product.department === filter) : products

const mapStateToProps = (state) => {
  return {
    departments: state.catalog.departments,
    products: filterProducts(state.catalog.products, state.catalog.filter)
  }
}

const mapDispathToProps = dispatch => {
  return {
    onSetFilter: departnent => dispatch(setFilter(departnent)),
    onClearFilter: () => dispatch(clearFilter())
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Catalog)

