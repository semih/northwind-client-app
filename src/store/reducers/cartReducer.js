import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);

      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}

/*
başlangıç değeri initialValues kısmında tutulur.
payload: aksiyon ile gönderilen eklemek veya silmek istenen ürün.

ADD_TO_CART
reducer: gönderdiğin aksiyona göre sepetin son halini tuttuğumuz yer.
reducer 2 tane parametre alır. state(initialState set edilir) ve action(actions'ta gönderilen değer -> type ve payload içeren bir nesne)
reducer içinde gelecek olan type'a göre state değiştirilir.

state = sepet
redux, sepet elemanlarının değiştiğini referansına bakarak anlar. referans değiştiyse sepet değişti demektir, bu durumda aboneleri bilgilendirir.
örneğin array'in push metodu referansı değiştirmez. return { ...state } ifadesi referansı değiştirir. bir sınıfı new'lemek gibidir. yeni bir nesne oluşur.
sepette gönderilen ürün varsa, sepetteki adedini 1 artırsın, yoksa sepete sıfırdan eklesin.

REMOVE_FROM_CART
Elemanı silsin, quantity'yi azaltmasın.
yeni bir nesne içinde ...state'i al, cartItems'ları ezeceğiz.
filter metodu referansı değiştirir. referans değişince sayfa güncellenir.
*/
