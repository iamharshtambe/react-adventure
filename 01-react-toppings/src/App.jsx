import './index.css';

const pizzaData = [
   {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: 'pizzas/focaccia.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: 'pizzas/margherita.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: 'pizzas/spinaci.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: 'pizzas/funghi.jpg',
      soldOut: false,
   },
   {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: 'pizzas/salamino.jpg',
      soldOut: true,
   },
   {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price: 18,
      photoName: 'pizzas/prosciutto.jpg',
      soldOut: false,
   },
];

function App() {
   return (
      <div className="container">
         <Header />
         <Menu />
         <Footer />
      </div>
   );
}

function Header() {
   return (
      <header className="header">
         <h1>React Toppings</h1>
      </header>
   );
}

function Menu() {
   return (
      <main className="menu">
         <h2>Our Menu</h2>

         {pizzaData ? (
            <>
               <p>
                  Authentic Italian cuisine. 6 creative dishes to choose from.
                  All from our stone oven, all organic, all delicious.
               </p>

               <ul className="pizzas">
                  {pizzaData.map((pizza) => (
                     <Pizza key={pizza.name} pizzaObject={pizza} />
                  ))}
               </ul>
            </>
         ) : (
            <p>We are still working on our menu</p>
         )}
      </main>
   );
}

function Pizza({ pizzaObject }) {
   return (
      <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
         <img src={pizzaObject.photoName} alt={pizzaObject.name} />
         <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
         </div>
      </li>
   );
}

function Footer() {
   const currentHour = new Date().getHours();
   const openHour = 12;
   const closeHour = 22;
   const isOpen = currentHour >= openHour && currentHour <= closeHour;

   return (
      <footer className="footer">
         {isOpen ? (
            <Order openHour={openHour} closeHour={closeHour} />
         ) : (
            <p>
               We are happy to welcome you between {openHour}:00 and {closeHour}
               :00
            </p>
         )}
      </footer>
   );
}

function Order({ openHour, closeHour }) {
   return (
      <div className="order">
         <p>
            We are open from {openHour}:00 to {closeHour}:00. Come visit us or
            order online.
         </p>
         <button className="btn">Order Now</button>
      </div>
   );
}

export default App;
