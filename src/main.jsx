import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PortfolioPage />,
		children: [
			{
				index: true,
				element: <PortfolioPage />,
			},
			{
				path: 'about',
				element: <AboutMePage />,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
			{
				path: 'resume',
				element: <ResumePage />,
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
