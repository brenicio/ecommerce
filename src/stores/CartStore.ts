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
        case CartConstants.INCREASE_PRODUCT_QUANTITY:
            this.increaseProductQuantity(action.product);
            this.emit(CHANGE_EVENT);
        break;
        case CartConstants.DECREASE_PRODUCT_QUANTITY:
            this.decreaseProductQuantity(action.product);
            this.emit(CHANGE_EVENT);
        break;
    }

    return true;
  }

  addProduct(product:any) {
    const pIndex = _products.findIndex((p) => p.id === product.id)
    if(pIndex < 0) {
      _products.push({
        ...product,
        quantity: 1
      });
    } else {
      this.increaseProductQuantity(_products[pIndex]);
    }

    this.updateProductsInLocalStorage(_products);
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

  increaseProductQuantity(product:any) {
    const pIndex = _products.findIndex((p) => p.id === product.id);
    _products[pIndex].quantity++;

    this.updateProductsInLocalStorage(_products);
  }

  decreaseProductQuantity(product:any) {
    const pIndex = _products.findIndex((p) => p.id === product.id);
    _products[pIndex].quantity--;

    if(_products[pIndex].quantity > 0) {
      this.updateProductsInLocalStorage(_products);
    } else {
      this.removeProduct(product);
    }
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

  getTotal() {
    return _products.reduce((r:number, p:any) => r + p.quantity * p.valor, 0)
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
