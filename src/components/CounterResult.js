import { useSelector } from "react-redux"
const CounterResult = () => {

  const player = useSelector(state => state.counter.countPlayer)
  const bank = useSelector(state => state.counter.countBank)
  const finish = useSelector(state => state.counter.finish)
  const endGame = useSelector(state => state.counter.endGame)

  return(
    <>
      <h3>Bank's Score: {bank}</h3>

      <h3>Your Score: {player}</h3>
      {endGame ? (
          <h3>{endGame}</h3>
        ) : (
          <>
            <h3>Click finish to stop playing!</h3>
            <h3>You can only click once for the Bank's score.</h3>
          </>
      )}
      {finish ? (
          <h3>{finish}</h3>
        ) : (
          <h3>{finish}</h3>
      )}
    </>
  );
};

export default CounterResult;
