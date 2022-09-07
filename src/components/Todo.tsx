import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useRequest } from 'ahooks';

export const Todo = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTodos] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data);
    }
    load();
  }, []);

  return <div data-testid="hello">hello todo</div>;
};
