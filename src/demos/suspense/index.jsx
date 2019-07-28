import React, { Suspense, lazy } from 'react';
import './suspense.css';
import { useFetch } from "react-hooks-fetch";

const LazyComp = lazy(() => import('./lazy'));

function fetchApi() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('响应成功')
      resolve();
    }, 3000);
  })
  return promise;
}

let cached = {}
const createFetcher = promiseTask => {
  let ref = cached;
  return () => {
    const task = promiseTask();
    task.then(res => {
      ref = res;
    }).catch(e => {
      console.log('catch:::', e);
    })

    if (ref === cached) {
      // throw '⚠️出异常了'
      throw task;
    }

    console.log('🍎结果', ref);
    return ref;
  }
}

const fetchData = createFetcher(fetchApi);

function SuspenseComp() {
  const resData = fetchData();
  return <p>{ resData }</p>
}

export default () => (
  <Suspense fallback={<div className="text-danger">loading<i></i></div>}>
    <LazyComp/>
    <SuspenseComp/>
  </Suspense>
)