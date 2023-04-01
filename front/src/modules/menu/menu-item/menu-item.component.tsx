interface MenuItemProps {

}


export const MenuItem = ({ }) => {
   return (
      <div className="w-96 shadow-xl rounded-2xl bg-white">
         <div className="relative">
            <img className="object-cover object-center w-full h-[15rem] rounded-t-2xl"
               src="/assets/pizza/manhattan.jpeg"
            />
            <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
               555 г
            </span>
         </div>
         <div className="p-8">
            <h2 className="text-xl font-semibold mb-2">
               Піца Мангеттен
            </h2>
            <p className="mb-8">
               (подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо
            </p>
            <span className="text-xl font-semibold">
               215 грн.
            </span>
         </div>
      </div>
   )
}