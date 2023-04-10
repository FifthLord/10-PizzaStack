export const Footer = () => {
   return <div className="bg-gray-900 pt-12 px-12 pb-8">
      <div>
         <div className="mb-4">
            <span className="uppercase font-bold text-sm text-zinc-500">Контакти</span>
         </div>
         <div>
            <ul>
               <li>
                  <a href="tel:+38044123456*"
                     className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">
                     044 123 45 67</a>
               </li>
               <li>
                  <a href="email:info@pizzastack.app"
                     className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">
                     info@pizzastack.app</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
}