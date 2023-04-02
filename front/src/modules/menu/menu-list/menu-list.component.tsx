import pizzaMenu from '../../../mocks/pizza.json'
import { MenuItem } from '../menu-item/menu-item.component'

export const MenuList = () => {
   return <div>
      {pizzaMenu.map(({ image, ...pizza }) => (
         <MenuItem {...pizza} imagePath={image} />
      ))}
   </div>
}