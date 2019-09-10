import React from 'react';

function ChildComponent({ componentType }) {
  return (
    <p>
      This is <code>{componentType}</code> with State as Props.
        </p>
  );
}

export default ChildComponent;
