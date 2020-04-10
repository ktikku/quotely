import React from 'react';
import { render } from 'react-dom';
import AppRouter from '../src/routers/AppRouter'

const rootElement = document.getElementById('react-app');

render(<div> <AppRouter /> Placeholder for quotely App </div>, rootElement);