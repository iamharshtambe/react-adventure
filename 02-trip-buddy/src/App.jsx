import './index.css';

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
   return <div className="list">List</div>;
}

function Stats() {
   return <div className="stats">Stats</div>;
}
