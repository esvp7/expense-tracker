import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import { SpeechProvider } from "@speechly/react-client";

import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="8c02940a-5dad-4eb0-a6e2-d841fd7a4d98" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);