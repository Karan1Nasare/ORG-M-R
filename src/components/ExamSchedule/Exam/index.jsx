import React, { useState } from 'react';
import Card from './components/card';
import Header from './components/header';

const Index = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Card search={search} />
    </div>
  );
};

export default Index;
