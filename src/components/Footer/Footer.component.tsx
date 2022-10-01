import { Box, Center, Text } from '@chakra-ui/react';

function Footer() {
	return (
		<Center
			as="footer"
			position="fixed"
			bottom="0"
			h="2.5rem"
			bgColor="white"
			width="100%"
		>
			<Text size="xs">Made with love by Uncle Bradley</Text>
		</Center>
	);
}

export default Footer;
