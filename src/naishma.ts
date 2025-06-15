import { Product } from "./interfaces/product";
import { fetchProducts } from "./api/api";
import { ask } from "./utils/utils";
import { adminMenu } from "./admin/admin";
import { customerMenu } from "./customer/customer";
const start = async () => {
    let products:Product[] = await fetchProducts();
  
    const mainMenu = async () => {
      console.log('\nWho are you?\n1. Admin\n2. Customer\n3. Exit');
      const choice:string = await ask('Select option (1-3): ');
  
      if (choice === '1') {
        products= await adminMenu(products);
        await mainMenu();
      }
      else if (choice === '2') {
        await customerMenu(products);
        await mainMenu();
      } 
      else if (choice === '3') {
        console.log('Goodbye!');
        close();
      }
       else {
        console.log('Invalid option.');
        await mainMenu();
      }
    }
    await mainMenu();
}
start();