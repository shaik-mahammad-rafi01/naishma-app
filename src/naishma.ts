import { Product } from "./interfaces/product";
import { fetchProducts } from "./api/api";
import { ask } from "./utils/utils";
import { adminMenu } from "./admin/admin";
const start = async () => {
    let products:Product[] = await fetchProducts();
  
    const mainMenu = async () => {
      console.log('\nWho are you?\n1. Admin\n2. Customer\n3. Exit');
      const choice:string = await ask('Select option (1-3): ');
  
      if (choice === '1') {
        products= await adminMenu(products);
        await mainMenu();
      }
    }
    mainMenu();
}
start();