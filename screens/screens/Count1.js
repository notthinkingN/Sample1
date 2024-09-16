import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};



// Store
const store = createStore(counterReducer);

// Component
const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const [res, setRes] = useState(0);

    const reset = () => {
        setRes(0);
      };

    return (
        <View style={{alignItems:"center", justifyContent:"center", marginTop: 150}}>
            <Text style={{ alignItems:"center"}}>Count: {count}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginBottom: 10,}}>
                <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
                <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
            </View>
            <Button title='Reset' onPress={reset}/>
        </View>
    );
};

// App
const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;