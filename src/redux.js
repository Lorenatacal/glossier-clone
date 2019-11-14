export const initiatState = {
    data: [],
    basketProducts: [],
    totalQuantity: 0,
}

export const reducer = (state = initiatState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload
            }
            case 'ADD_TO_BASKET':
                return {
                    ...state,
                    basketProducts: [...state.basketProducts, action.payload || []],
                }
        case 'DELETE_FROM_BASKET':
            const newBasketState = state.basketProducts.filter( val => val.id !== action.payload);
            return {
                ...state,
                basketProducts: newBasketState
            }
        case 'INCREASE_QUANTITY':

            const i = state.basketProducts.findIndex((element) => {
                return element.id === action.payload.id;
            })

            const updatedProduct = {
                ...state.basketProducts[i],
                quantity: state.basketProducts[i].quantity + 1
            }

            const newProducts = [...state.basketProducts.slice(0,i), updatedProduct, ...state.basketProducts.slice(i+1)]

            return {
                ...state,
                
                basketProducts: newProducts
            }
        case 'DECREASE_QUANTITY':
            const e = state.basketProducts.findIndex((element) => {
                return element.id === action.payload.id;
            })
            const decreasedProduct = {
                ...state.basketProducts[e],
                quantity: state.basketProducts[e].quantity - 1
            }
            const decreasedProducts = [...state.basketProducts.slice(0,e), decreasedProduct, ...state.basketProducts.slice(e+1)]
            return {
                ...state,
                basketProducts: decreasedProducts
            }
        case 'INCREASE_NAV_BAR':
            const newQuantityObject = state.basketProducts.map(obj=> {
                return obj.quantity
            })
            const productQuantity = newQuantityObject.reduce((a,b) => a + b, 0)
            return{
                ...state,
                totalQuantity: productQuantity
            }
            
        default: return state
    }
}

export const createUpdateData = apiData => {
    return {
        type: 'UPDATE_DATA',
        payload: apiData
    }
}

export const addToBasket = object => {
    return {
        type: 'ADD_TO_BASKET',
        payload: object
    }
}

export const deleteFromBasket = object => {
    return {
        type: 'DELETE_FROM_BASKET',
        payload: object
    }
}
export const increaseQuantity = ({id, quantity}) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: {
            id,
            quantity
        }
    }
}

export const decreaseQuantity = ({id, quantity}) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: {
            id,
            quantity
        }
    }
}

export const increaseNavBar = () => {
    return {
        type: 'INCREASE_NAV_BAR',
    }
}