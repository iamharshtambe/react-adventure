import './index.css';

const initialItems = [
   { id: 1, description: 'Passports', quantity: 2, packed: false },
   { id: 2, description: 'Socks', quantity: 12, packed: false },
   { id: 2, description: 'Bags', quantity: 12, packed: true },
];

export default function App() {
   return (
      <div className="app">
         <Logo />
         <Form />
         <PackingList />
         <Stats />
      </div>
   );
}

function Logo() {
   return <h1>🏖 Trip Buddy 🧳</h1>;
}

function Form() {
   return <div className="add-form">What do you need for your 😍 trip ?</div>;
}

function PackingList() {
   return (
      <div className="list">
         <ul>
            {initialItems.map((item) => (
               <Item key={item.id} itemObject={item} />
            ))}
         </ul>
      </div>
   );
}

function Item({ itemObject }) {
   return (
      <li>
         <span
            style={itemObject.packed ? { textDecoration: 'line-through' } : {}}
         >
            {itemObject.quantity} {itemObject.description}
         </span>

         <button>❌</button>
      </li>
   );
}

function Stats() {
   return <div className="stats">Stats</div>;
}
