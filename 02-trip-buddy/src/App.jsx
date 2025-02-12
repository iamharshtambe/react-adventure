import { useState } from 'react';
import './index.css';

const initialItems = [
   { id: 1, description: 'Passports', quantity: 2, packed: false },
   { id: 2, description: 'Socks', quantity: 12, packed: false },
   { id: 3, description: 'Bags', quantity: 12, packed: true },
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

// CONTROLLED ELEMENTS -> 1. create piece of state 2. use state as value of input field 3. onchange

function Form() {
   const [description, setDescription] = useState('');
   const [quantity, setQuantity] = useState(1);

   function handleSubmit(e) {
      e.preventDefault();

      if (!description) return;

      const newItem = { description, quantity, packed: false, id: Date.now() };

      setDescription('');
      setQuantity(1);
   }

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your 😍 trip ?</h3>
         <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
         >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
               <option value={num} key={num}>
                  {num}
               </option>
            ))}
         </select>
         <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <button>Add</button>
      </form>
   );
}

function PackingList() {
   return (
      <div className="list">
         <ul>
            {initialItems.map((item) => (
               <Item itemObject={item} key={item.id} />
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
