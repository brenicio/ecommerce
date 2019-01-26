import { EventEmitter } from "events";
import CartDispatcher from 'src/dispatchers/CartDispatcher';
import CartConstants from 'src/constants/CartConstants';

const CHANGE_EVENT = 'CHANGE';

const _products:any = [];

class CartStore extends EventEmitter {
    constructor() {
        super();
        CartDispatcher.register(this.registerActions.bind(this));
    }

    registerActions(action:any) {
        console.log(action);
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
        _products.push(product);
    }
    removeProduct(product:any) {
        _products.remove(product);
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
