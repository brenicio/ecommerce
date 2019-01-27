import { EventEmitter } from "events";
import CartDispatcher from '../dispatchers/CartDispatcher';
import CartConstants from '../constants/CartConstants';

const CHANGE_EVENT = 'CHANGE';

const _products:any[] = [];

class CartStore extends EventEmitter {
  constructor() {
    super();
    CartDispatcher.register(this.registerActions.bind(this));

    this.findProductsInLocalStorage();
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
        case CartConstants.REMOVE_ALL:
            this.removeAll();
            this.emit(CHANGE_EVENT);
        break;
    }

    return true;
  }

  addProduct(product:any) {
    if(!_products.find((p) => p.id === product.id)) {
      _products.push(product);
      this.updateProductsInLocalStorage(_products);
    }
  }

  removeProduct(product:any) {
    const index = _products.findIndex((p) => p.id === product.id);
    _products.splice(index, index + 1);

    this.updateProductsInLocalStorage(_products);
  }

  removeAll() {
    _products.splice(0, _products.length);
    
    this.updateProductsInLocalStorage(_products);
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

  private findProductsInLocalStorage() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || "[]");
    cartProducts.forEach((p:any) => {
      _products.push(p);
    })
  }

  private updateProductsInLocalStorage(products:any[]) {
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }
}

export default new CartStore();
