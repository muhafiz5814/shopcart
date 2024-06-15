import { getDepartments, getProducts } from "../../services/catalog"

// This is a thunk function
export const initCatalog = () => async dispatch => {
  // fetch data from external service
  try {
    const data = await Promise.all([getDepartments(), getProducts()])

    dispatch({
      type: "INITIALIZE_CATALOG",
      departments: data[0],
      products: data[1]
    })

  } catch (error) {
    dispatch({
      type: "INITIALIZE_CATALOG",
      departments: [],
      products: [],
    })
  }
}

export const setFilter = department => {
  return {
    type: "SET_FILTER",
    filter: department
  }
}

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER"
  }
}