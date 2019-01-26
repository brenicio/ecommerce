import { EventEmitter } from "events";
import CartDispatcher from '../dispatchers/CartDispatcher';
import CartConstants from '../constants/CartConstants';

const CHANGE_EVENT = 'CHANGE';

const _products:any[] = [];

class CartStore extends EventEmitter {
  constructor() {
    super();
    CartDispatcher.register(this.registerActions.bind(this));
  }

  registerActions(action:any) {
    switch(action.actionType) {
        case CartConstants.ADD_PRODUCT:
            this.addProduct(action.product);
            this.emit(CHANGE_EVENT);
        break;
        case CartConstants.REMOVE_PRODUCT:
            this.removeProduct(action.product);
            this.emit(CHANGE_EVENT);
        break;
    }

    return true;
  }

  addProduct(product:any) {
    if(!_products.find((p) => p.id === product.id)) {
      _products.push(product);
    }
  }

  removeProduct(product:any) {
    const index = _products.findIndex((p) => p.id === product.id);
    _products.splice(index, index + 1);
  }

  addChangeListener(callback:any) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback:any) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getProducts() {
    return _products;
  }
}

export default new CartStore();
