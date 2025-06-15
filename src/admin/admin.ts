import { Product } from "../interfaces/product";
import { ask } from "../utils/utils";

export const adminMenu = async (products: Product[]): Promise<Product[]> => {
  console.log('\nAdmin Menu:\n1. Add Product\n2. Remove Product\n3. Back');
  const choice:string = await ask('Select an option (1-3): ');

  switch (choice) {
    case '1':
      const title:string = await ask('Product Name: ');
      const price:number = parseFloat(await ask('Price: '));
      const category:string = await ask('Category: ');
      const rating:number = parseFloat(await ask('Rating (0-5): '));
      const lastItem=products[products.length-1];

      const id:number =lastItem.id+1;
      products.push({ id, title, price, category, rating });
      console.log('Product added!');
      return adminMenu(products);

  }
    return adminMenu(products);
};
