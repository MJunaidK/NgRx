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