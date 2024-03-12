import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import {
  Products,
  ToggleCount,
  add,
  productLength,
  remove,
  totalPrice,
} from "./reducer/product-reducer";
import { saveState } from "../services/storage";
import { Qualifier, QualifierLength, addQualifier, removeQualifier } from "./reducer/qualifiers-reducer";

const StoraMiddleWere = createListenerMiddleware();

StoraMiddleWere.startListening({
  matcher: isAnyOf(add, remove, ToggleCount, addQualifier, removeQualifier),
  effect: (_, api) => {
    api.dispatch(productLength());
    api.dispatch(totalPrice());
    api.dispatch(QualifierLength())
  },
});

export const store = configureStore({
  reducer: {
    product: Products,
    qualifier: Qualifier
  },
  middleware: (middleware) => middleware().prepend(StoraMiddleWere.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});

store.subscribe(() => {
  saveState("qualifier", store.getState().qualifier);
});
