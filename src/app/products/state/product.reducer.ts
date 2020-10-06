import { createAction, createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State{
    products: ProductState;
}

export interface ProductState{
    showProductCode: boolean;
    currentProduct: Product;
    prodcuts: Product[]
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    prodcuts: []
}

export const prodcutReducer =  createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'),(state): ProductState =>{
        console.log('oriignal state: ' + JSON.stringify(state));
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);