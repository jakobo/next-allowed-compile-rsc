// A missing use client directive here should cause a linting error
// you cannot use browser APIs or hooks in a server component

import { useCallback, useState } from "react";

export default function ClientComponent() {
  const [state, setState] = useState(0);
  const aFunction = useCallback(() => {
    // empty
  }, []);
  return (<button onClick={aFunction}>clickable</button>);
}