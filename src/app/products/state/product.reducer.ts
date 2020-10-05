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

export const prodcutReducer =  createReducer<ProductState>(
    { showProductCode: true} as ProductState,
    on(createAction('[Product] Toggle Product Code'),(state: ProductState) =>{
        console.log('oriignal state: ' + JSON.stringify(state));
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);