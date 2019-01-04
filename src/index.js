import React from 'react';
import ReactDOM from 'react-dom';
import {RouterExample} from './component/router';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<RouterExample />, document.getElementById('root'));

serviceWorker.unregister();
