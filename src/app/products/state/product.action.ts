import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction(
    '[Product] Toggle product Code'
);

export const setCurrentProduct = createAction(
    '[Product] Set current Code',
    props<{ product: Product}>()
);

export const clearCurrentProduct = createAction(
    '[Product] Clear CUrrent Product'
);

export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current product'
);

export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[]}>()
);

export const loadProductsFailure = createAction(
    '[Product] Load fail',
     props<{ error: string}>()   
);