import {useState} from 'react';

function Showcase() {
  const [name, setName] = useState('Brad');
  return <div>Hello {name}</div>;
}

export default Showcase;