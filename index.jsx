const ATMDeposit = ({ onChange, isDeposit }) => {
  let choice = ["Withdrawal", "Deposit"];
  let display = choice[Number(isDeposit)];
  return (
    <label className="label huge">
      {display}
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

const Account = () => {
  const [accountBal, setAccountBal] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [deposit, setDeposit] = React.useState(0);

  const handleChange = (event) => {
    setDeposit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTotal = isDeposit
      ? accountBal + Number(deposit)
      : accountBal - Number(deposit);
    if (newTotal >= 0) {
      setAccountBal(newTotal);
      return;
    }
    alert("Cannot withdrawal more than account balance.");
  };

  return (
    <>
      <figure className="position-relative">
        <img src="./atm-clipart.png" />
        <figcaption>
          <button
            onClick={() => {
              setIsDeposit(true);
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              setIsDeposit(false);
            }}
          >
            Withdrawal
          </button>
          <form onSubmit={handleSubmit}>
            <h2>Account Balance ${accountBal}</h2>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>
              {" "}
              Deposit
            </ATMDeposit>
          </form>
        </figcaption>
      </figure>
    </>
  );
};
// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Account />);
