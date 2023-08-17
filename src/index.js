import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import {store} from './store'

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
        <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);