import React from 'react';
import UserProvider from './components/providers/UserProvider';
import FilterProvider from './components/providers/FilterProvider';
import FilterButtons from './components/Filter/FilterButtons';
import UserTable from './components/User/UserTable';
import UserForm from './components/User/UserForm';

function App() {
  return (
    <FilterProvider>
      <UserProvider>
        <FilterButtons />
        <UserTable />
        <UserForm />
      </UserProvider>
    </FilterProvider>
  );
}

export default App;
