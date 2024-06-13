const initialState = {
  totalProducts: 0,
  totalCost: 0,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return state.items.find(item => item.code === action.product.code) ? {
        totalProducts: state.totalProducts + 1,
        totalCost: state.totalCost + action.product.cost,
        items: state.items.map(item => item.code === action.product.code ? {...item, quantiy: item.quantity + 1} : item)
      } : {
        totalProducts: state.totalProducts + 1,
        totalCost: state.totalCost + action.product.cost,
        items: [...state.items, {...action.product, quantity: 1}]
      }
    }
    
    case "SET_QUANTITY": {
      let revisedItems = state.items.map(item => item.code === action.code ? {...item, quantiy: action.quantity} : item)

      let revisedTotalProducts = revisedItems.reduce((prev, curr) => prev + curr.quantity, 0)
      
      let revisedTotalCost = revisedItems.reduce((prev, curr) => prev + curr.quantity * curr.cost, 0)

      return {
        totalProducts: revisedTotalProducts,
        totalCost: revisedTotalCost,
        items: revisedItems
      }
    }

    case "REMOVE_ITEM": {
      let findItem = state.items.find(item => item.code === action.code)

      return findItem ? {
        totalProducts: state.totalProducts - findItem.quantity,
        totalCost: state.totalCost - findItem.quantity * findItem.cost,
        items: state.items.filter(item => item.code !== action.code)
      } : state
    }

    default:{
      return state
    }
  }
}