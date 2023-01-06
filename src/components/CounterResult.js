import { useSelector } from "react-redux"
import StarIcon from '@mui/icons-material/Star';


const CounterResult = () => {

  const player = useSelector(state => state.counter.playerPoints)
  const bank = useSelector(state => state.counter.bankpoints)
  const isGameEndMessage = useSelector(state => state.counter.isGameEndMessage)
  const win = useSelector(state => state.counter.win)
  const lose = useSelector(state => state.counter.lose)

  return(
    <>
      <div className="counter__result__info">
        {isGameEndMessage ? (
          <>
            <h3>RULES</h3>
            <h3>● Click on "BANK" once to start playing.</h3>
            <h3>● Now, click on "PLAYER" to start the game.</h3>
            <h3>● You can only click once for the Bank's score.</h3>
          </>
          ) : (
          <>
            <h3>RULES</h3>
            <h3>● Click on "BANK" once to start playing.</h3>
            <h3>● Now, click on "PLAYER" to start the game.</h3>
            <h3>● You can only click once for the Bank's score.</h3>
          </>
        )}
      </div>
      <div className="casino__table">
        <div>
          <div className="card__point">
            <h3>Bank's Score:</h3><h3 className="accumulated__point">{bank}</h3>
          </div>
          <div className="display__result">
            <StarIcon />
            <span>{lose}</span>
          </div>
        </div>
        <h3 className="counter__result__status">{isGameEndMessage}</h3>
        <div>
          <div className="display__result">
            <StarIcon />
            <span>{win}</span>
          </div>
          <div className="card__point">
            <h3>Player Score:</h3><h3 className="accumulated__point">{player}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterResult;
