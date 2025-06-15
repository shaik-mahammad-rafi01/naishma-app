import { CartItem } from "../interfaces/cartItem";
import { Product } from "../interfaces/product";
import { ask } from "../utils/utils";


export const customerMenu = async (products: Product[]) => {
  const cart: CartItem[] = [];

  const loop = async () => {
    console.log('\nCustomer Menu:\n1. Search Products\n2. Filter Products\n3. Add to Cart\n4. View Cart\n5. Back');
    const choice = await ask('Select an option (1-5): ');

    switch (choice) {
      case '1': {
        const keyword:string = await ask('Enter keyword: ');
        const found:Product[] = products.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
        console.table(found);
        break;
      }
    }
    await loop();
  };
  await loop();
};
