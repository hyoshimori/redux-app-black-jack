import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  return (
    <div className="counter">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
