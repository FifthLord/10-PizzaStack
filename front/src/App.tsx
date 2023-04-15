import { Footer } from "./common/components/footer/footer.component";
import { Header } from "./common/components/header/header.component";
import pizzaMenu from './mocks/pizza.json'
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";

export const App = () => {
   return (
      <div>
         <Header />
         <div className="mx-12 mb-24">
            <MenuList items={pizzaMenu} />
         </div>
         <Footer />
      </div>
      // <h1 className="font-bold text-3xl text-red-500">PizzaStack</h1>
   );
}