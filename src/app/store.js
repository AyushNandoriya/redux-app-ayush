import { createStore } from 'redux';
import reducer from '../features/reducer';

let INITIAL_STATE = [
        {
          id: 1,
          name: "Jay",
          description: "study in B.ca"
        },
        {
          id: 2,
          name: "Roy",
          description: "study in B.com"
        },
        {
          id: 3,
          name: "Raj",
          description: "study in Deploma"
        },
        {
          id: 4,
          name: "Yug",
          description: "study in computer science"
        }
];

const store = createStore(reducer, INITIAL_STATE);

store.subscribe(() => {
  console.log("Store", store);
  console.log("Store State", store.getState());
});

export default store;