import CartDispatcher from 'src/dispatchers/CartDispatcher';
import CartConstants from 'src/constants/CartConstants';

class CartActions {
    public addProduct(product:any) {
        CartDispatcher.dispatch({
            actionType: CartConstants.ADD_PRODUCT,
            product: {product}
        });
    }

    public removeProduct(product:any) {
        CartDispatcher.dispatch({
            actionType: CartConstants.REMOVE_PRODUCT,
            product: {product}
        });
    }
}

export default new CartActions();
