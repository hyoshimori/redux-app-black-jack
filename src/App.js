import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  return (
    <main className="casino">
      <div className="counter">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </main>
  );
};

export default App;
