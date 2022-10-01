import { Box, Button, Heading, Link } from '@chakra-ui/react';

export default function Podcast() {
	return (
		<>
			<Box as="main" flexGrow={1} p={2}>
				<Heading size={'sm'}>Coming soon...</Heading>
			</Box>
			<Link href="/">
				<Button size={{ base: 'xs', md: 'md' }}>Home</Button>
			</Link>
			<audio controls>
				<source src="pod.mp4" type="audio/mp4" />
				Your browser does not support the audio element.
			</audio>
		</>
	);
}
