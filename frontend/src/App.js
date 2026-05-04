import logo from './logo.svg';
import './App.css';


import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App;

// import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


// function App() {
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//      return (
//     <>
//       <header>
//         <Show when="signed-out">
//           <SignInButton />
//           <SignUpButton />
//         </Show>
//         <Show when="signed-in">
//           <UserButton />
//         </Show>
//       </header>
//     </>
//   )
  
// }

// export default App;
