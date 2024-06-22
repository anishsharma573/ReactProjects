import { useCallback, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let string = "NMSNSDJOISDHJIOEWHRHHEHREEJSJDSJopeifoeijihjfdi";

    if (numbers) {
      string += '1234567890';
    }
    if (character) {
      string += '!@#$%%^&*(){}[]';
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, character]);

  useEffect(() => {
    passwordGenerator();
  }, [numbers, character, length, passwordGenerator]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className='bg-gray-900 text-white h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-6'>
        Password Generator
      </h1>
      <div className='w-96 p-6 bg-gray-800 rounded-lg shadow-lg'>
        <div className='flex items-center mb-4'>
          <input
            type="text"
            placeholder='password'
            readOnly
            className='w-full p-2 text-black rounded-lg'
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPassword} className='ml-2 p-2 bg-blue-500 rounded-lg text-white'>
            Copy
          </button>
        </div>
        <div className='mb-4'>
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={8}
            max={20}
            className='w-full'
          />
          <label htmlFor="" className='block mt-2 text-sm'>
            Length: {length}
          </label>
        </div>
        <div className='mb-4'>
          <label className='inline-flex items-center'>
            <input
              onChange={() => setNumbers(!numbers)}
              type="checkbox"
              className='form-checkbox h-5 w-5 text-blue-600'
            />
            <span className='ml-2 text-sm'>Include Numbers</span>
          </label>
        </div>
        <div>
          <label className='inline-flex items-center'>
            <input
              onChange={() => setCharacter(!character)}
              type="checkbox"
              className='form-checkbox h-5 w-5 text-blue-600'
            />
            <span className='ml-2 text-sm'>Include Characters</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
