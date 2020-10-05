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

export const prodcutReducer =  createReducer(
    { showProductCode: true },
    on(createAction('[Product] Toggle Product Code'),state =>{
        console.log('oriignal state: ' + JSON.stringify(state));
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);