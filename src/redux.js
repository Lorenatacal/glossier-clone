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
        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basketProducts: [...state.basketProducts, action.payload || []]
            }
        }
        case 'DELETE_FROM_BASKET': {
            const newBasketState = state.basketProducts.filter( val => val.id !== action.payload);
            return {
                ...state,
                basketProducts: newBasketState
            }
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