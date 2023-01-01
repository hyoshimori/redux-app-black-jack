import { useDispatch } from "react-redux";
import { player, bank, restart, finish, reset } from "../store/modules/counter"

const CounterButton = ({calcType}) => {

    const dispatch = useDispatch();
    const clickHandler = () => {
      let action = '';
      if(calcType === 'player'){
        action = player()
      } else if(calcType === 'bank'){
        action = bank()
      } else if(calcType === 'finish'){
        action = finish()
      } else if(calcType === 'reset'){
        action = reset()
      } else {
        action = restart()
      }
        dispatch(action);
    }

    return <button onClick={clickHandler} className="counter__button">{calcType.toUpperCase()}</button>
}
export default CounterButton;
