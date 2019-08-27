import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';

const DisplayRemoteData = () => {
  const { error, data } = useFetch('http://...');
  if (error) return <span>Error:{error.message}</span>;
  if (!data) return null; // 非空判断 很重要 
  return <span>RemoteData:{data}</span>;
};

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
);
export default App;