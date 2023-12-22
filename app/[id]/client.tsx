// "use client";
// commenting this directive out will NOT cause a linting error (incorrect)
// commenting this directive out will NOT cause a build error (incorrect)

import { useCallback } from "react";

export default function ClientComponent() {
  const aFunction = useCallback(() => {
    // empty
  }, []);
  return (
    <>
      <img
        src="https://example.com/fail"
        onError={aFunction}
        alt="broken image"
      />
      <button onClick={aFunction}>clickable</button>
    </>
  );
}
