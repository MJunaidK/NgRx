import { createAction, createReducer, on } from '@ngrx/store';
import { Product } from '../product';

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