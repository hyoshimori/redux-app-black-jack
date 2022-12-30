import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { useSelector } from "react-redux"

const Counter = () => {

  const finish = useSelector(state => state.counter.finish)

  return (
    <>
        <CounterButton calcType="reset"/>
        {finish ? (
            <h3>{finish}</h3>
          ) : (
            <>
              <CounterButton calcType="finish"/>
            </>
        )}
        <CounterResult />
        {finish ? (
            <h3>{finish}</h3>

          ) : (
            <>
              <CounterButton calcType="player"/>
              <CounterButton calcType="bank"/>
            </>
        )}
    </>
  )
}
export default Counter;
