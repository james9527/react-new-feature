import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle
} from 'react';

const ContextComp = forwardRef((props, ref) => {
  // 此hooks是专为ref挂方法使用的
  useImperativeHandle(ref, () => ({
    method() {
      console.log("ref方法执行");
    }
  }));

  return <p>子组件</p>;
});

export default function RefHooks() {
  const ref = useRef();
  useEffect(() => {
    console.log("component update");
    ref.current.method();
    return () => {
      console.log("unbind");
    };
  }, []); // []表示只执行一次
  return (
    <>
      <ContextComp ref={ref} />
    </>
  );
}
