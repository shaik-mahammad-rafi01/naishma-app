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
      case '2': {
        const filterType:string | number = await ask('Filter by (price/category/rating): ');
        if (filterType === 'price') {
          const max:number = parseFloat(await ask('Enter max price: '));
          console.table(products.filter(p => p.price <= max));
        } 
        else if (filterType === 'category') {
          console.log(`categiries : clothing(shirts,pants) , electronic(laptop) `)
          const category:string = await ask('Enter category: ');
          console.table(products.filter(p => p.category.toLowerCase() === category.toLowerCase()));
        } 
        else if (filterType === 'rating') {
          const min:number = parseFloat(await ask('Enter min rating: '));
          console.table(products.filter(p => p.rating >= min));
        } 
        else {
          console.log('Invalid filter type.');
        }
        break;
      }
    }
    await loop();
  };
  await loop();
};
