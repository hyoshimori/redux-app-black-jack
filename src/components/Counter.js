import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { useSelector } from "react-redux"
import CasinoIcon from '@mui/icons-material/Casino';

const Counter = () => {

  const finish = useSelector(state => state.counter.finish)

  return (
    <>
      <header className="counter__title">
        <CasinoIcon className="counter__icon"/>
        <h1 className="title__counter">WELCOME TO <br/>SIMPLE BLACK JACK</h1>
        <CasinoIcon className="counter__icon"/>
      </header>
      <CounterResult />
      <div className="counter__buttons">
        <CounterButton className="counter__button__restart" calcType="restart"/>
        {finish ? (
            <CounterButton calcType="finish"/>
          ) : (
            <>
              <CounterButton calcType="finish"/>
            </>
        )}

        {finish ? (
            <>
              <CounterButton calcType="player"/>
              <CounterButton calcType="bank"/>
            </>
          ) : (
            <>
              <CounterButton calcType="player"/>
              <CounterButton calcType="bank"/>
            </>
        )}
      </div>

    </>
  )
}
export default Counter;
