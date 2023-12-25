import React from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import { cleanObject, useDebounce, useMount } from 'utils';
import qs from 'qs';
import { useHttp } from 'utils/http';
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debouncedParam = useDebounce(param, 1000);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client('users').then(setUsers);
  });

  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list} />
    </div>
  );
};
