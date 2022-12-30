import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { useSelector } from "react-redux"

const Counter = () => {

  const finish = useSelector(state => state.counter.finish)

  return (
    <>
      <h2 className="title__counter">Welcom to Simple Black Jack</h2>
      <div className="counter__buttons">
        <CounterButton className="counter__button__reset" calcType="reset"/>
        {finish ? (
            <h3>{finish}</h3>
          ) : (
            <>
              <CounterButton calcType="finish"/>
            </>
        )}

        {finish ? (
            <h3>{finish}</h3>

          ) : (
            <>
              <CounterButton calcType="player"/>
              <CounterButton calcType="bank"/>
            </>
        )}
      </div>
      <CounterResult />
    </>
  )
}
export default Counter;
