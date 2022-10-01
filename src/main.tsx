import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Thoughts } from './routes/thoughts';
import './index.css';
import Root from './routes/root';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Index } from './routes';
import Fonts from './Fonts';
import StarWarsTheme from './theme';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import Podcast from './routes/podcast';

const router = createBrowserRouter([
	{
		element: <Root />,
		loader: async () => {
			return 'home';
		},
	},
	{
		path: '/',
		element: <Index />,
		loader: async () => {
			return 'home';
		},
	},
	{
		path: '/podcast',
		element: <Podcast />,
		loader: async () => {
			return 'podcast';
		},
	},
	{
		path: '/thoughts',
		element: <Thoughts />,
		loader: async () => {
			return 'thoughts';
		},
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={StarWarsTheme}>
			<Flex direction="column" minH="100vh">
				<SkipNavLink zIndex="skipLink">Skip to content</SkipNavLink>
				<Fonts />
				<Header />
				<SkipNavContent flexGrow={1}>
					<RouterProvider router={router} />
				</SkipNavContent>
				<Footer />
			</Flex>
		</ChakraProvider>
	</React.StrictMode>
);
