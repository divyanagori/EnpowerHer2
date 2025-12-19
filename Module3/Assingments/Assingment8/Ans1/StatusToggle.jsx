import { useState } from "react";

function ComponentA() {
  return <h3>Status is TRUE</h3>;
}

function ComponentB() {
  return <h3>Status is FALSE</h3>;
}

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
