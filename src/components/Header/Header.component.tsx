import { Box, HStack, Link, Image, Flex, Text, Center } from '@chakra-ui/react';

function Header() {
	const height = { base: '6rem', md: '7.5rem' };
	return (
		<Box
			position="sticky"
			top="0"
			zIndex="sticky"
			as="header"
			height={height}
			flex="0 0 auto"
			color="yellow.500"
			bgColor="black"
		>
			<Flex justifyContent={'flex-start'} gap="5">
				<Link href="/">
					<Box bgColor="white">
						<Image height={height} src="/logo.svg"></Image>
					</Box>
				</Link>
				<Flex></Flex>
				<Center>
					<Text color={'yellow.500'} size={{ base: 'md' }}>
						Lenny's Star Wars Space
					</Text>
				</Center>

				{/* <Link href="Thoughts">Thoughts</Link>
				<Link href="About">Podcast</Link> */}
			</Flex>
		</Box>
	);
}

export default Header;
