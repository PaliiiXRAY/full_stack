import { useState } from 'react';

function App() {
  const [inr, setInr] = useState('');
  const [usd, setUsd] = useState('');

  function changeInr(event) {
    let inrValue = event.target.value;
    setInr(inrValue);

    let usdValue = inrValue / 86;
    setUsd(usdValue);
  }

  function changeUsd(event) {
    let usdValue = event.target.value;
    setUsd(usdValue);

    let inrValue = usdValue * 86;
    setInr(inrValue);
  }

  return (
    <div>
      <h1>Currency Converter</h1>

      <div>
        <label>INR: </label>
        <input
          type="number"
          value={inr}
          onChange={changeInr}
        />
      </div>

      <br />

      <div>
        <label>USD: </label>
        <input
          type="number"
          value={usd}
          onChange={changeUsd}
        />
      </div>
    </div>
  );
}

export default App;
