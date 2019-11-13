export const initiatState = {
    data: [],
    basketProducts: []
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
                    basketProducts: [...state.basketProducts, action.payload || []]
                }
        case 'DELETE_FROM_BASKET':
            const newBasketState = state.basketProducts.filter( val => val.id !== action.payload);
            return {
                ...state,
                basketProducts: newBasketState
            }
        case 'EDIT_QUANTITY':
            // const product = state.basketProducts.filter( val => val.id === action.payload.id);
            // const quantityOfProduct = product[0].quantity;

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
                
            //const quantityOfProduct = product[0].quantity;
                basketProducts: newProducts
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
export const editQuantity = ({id, quantity}) => {
    return {
        type: 'EDIT_QUANTITY',
        payload: {
            id,
            quantity: quantity
        }
    }
}