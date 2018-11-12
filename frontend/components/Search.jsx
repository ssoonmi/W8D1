import React from 'react';
import BenchMap from './BenchMap';
import BenchIndex from './BenchIndex';

const Search = (props) => {
  return (
    <div>
      <BenchMap {...props}/>
      <BenchIndex {...props}/>
    </div>
  );
};

export default Search;
