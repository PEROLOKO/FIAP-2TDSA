import React, {createContext, useEffect, useState} from 'react';

import axios from 'axios';

const TodoContext = createContext<{tasks: Task[]}>({tasks:[]});

type Task = {
  name:string,
  id:number
}

const TodoProvider = () => {
  const [tasks, setTasks] = useState<Array<Task>>();

  const client = axios.create({
    baseURL: 'https://6414e8c38dade07073cb2a6a.mockapi.io',
    url: '/api/v1'
  });

  const fetchTodos = async () => {
    const {data} = await client.get('/todos');
    setTasks(data);
  };

  const add = async (newTask:string) => {
    const {data} = await client.post('/todos', {
      name: newTask,
    });
    setTasks([data, ...tasks]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{tasks, add}}></TodoContext.Provider>
  );
};

export {TodoContext, TodoProvider};
