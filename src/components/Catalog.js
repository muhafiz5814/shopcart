import React from "react";
import Product from "./Product";
import {connect} from "react-redux"
import { setFilter, clearFilter } from "../store/actions/catalogActions";
import { addToCart } from "../store/actions/cartActions";

const Catalog = ({departments, products, onSetFilter, onClearFilter, onAddToCart}) => {
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
        {products && products.map(product => <Product key={product.id} {...product} onClickAddButton={() => onAddToCart(product)}/>)}
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
    onClearFilter: () => dispatch(clearFilter()),
    onAddToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Catalog)

