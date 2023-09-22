'use client';
import { useState } from 'react';

const page = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <div>Count - {state}</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '0px',
            backgroundColor: 'blue',
            color: 'white',
          }}
          disabled={state == 10}
          onClick={() => setState((prev) => prev + 1)}
        >
          ADD NUM
        </button>
        <button
          style={{
            padding: '10px',
            borderRadius: '10px',
            border: '0px',
            backgroundColor: 'red',
            color: 'white',
          }}
          disabled={state == 0}
          onClick={() => setState((prev) => prev - 1)}
        >
          {' '}
          Subtract
        </button>
      </div>
    </div>
  );
};

export default page;
