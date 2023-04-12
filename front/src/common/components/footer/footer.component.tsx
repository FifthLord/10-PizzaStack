import { FooterLink } from "../footer-link/footer-link.component"

export const Footer = () => {
   return <div className="bg-gray-900 pt-12 px-12 pb-8">
      <div>
         <div className="mb-4">
            <span className="uppercase font-bold text-sm text-zinc-500">Контакти</span>
         </div>
         <div>
            <ul>
               <li>
                  <FooterLink href="tel:+38044123456*">044 123 45 67</FooterLink>
                  <FooterLink href="mailto:info@pizzastack.app">info@pizzastack.app</FooterLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
}