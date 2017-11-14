import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import RootApp from './containers/RootApp';
import {AppContainer} from 'react-hot-loader';
import { getCategories, getCities } from './actions';

import './styles/main.scss'

let store = configureStore();

store.dispatch(getCategories());
store.dispatch(getCities())
    .then(() => {
        render(RootApp);
    },
    () => {
        render(RootApp);
    }
);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

if (module.hot) {
    module.hot.accept('./containers/RootApp', () => {
        render(RootApp)
    });
}