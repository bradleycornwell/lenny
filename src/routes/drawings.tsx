import { Box, Image, Heading } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';

export function Drawings() {
	const images = [
		{
			original: '/chewie.jpeg',
			thumbnail: '/chewie.jpeg',
		},
		{
			original: '/starwars.jpeg',
			thumbnail: '/starwars.jpeg',
		},
	];

	return (
		<Box as="main" flexGrow={1} p={2} textAlign="center">
			<Heading as={'h2'} py={5} size={'sm'}>
				Gallery
			</Heading>
			<ImageGallery items={images} />;
		</Box>
	);
}
