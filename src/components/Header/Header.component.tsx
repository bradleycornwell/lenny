import {
	Box,
	Link,
	Image,
	Flex,
	Text,
	Center,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
			<Flex justifyContent={'space-between'} gap="5">
				<Link href="/">
					<Box bgColor="white">
						<Image height={height} src="/logo.svg"></Image>
					</Box>
				</Link>
				<Text color={'yellow.500'} size={{ base: 'md' }}>
					Lenny's Star Wars Space
				</Text>
				<Menu>
					<MenuButton
						paddingBottom={0}
						height={'50%'}
						as={IconButton}
						aria-label="Navigation"
						icon={<HamburgerIcon />}
					/>
					<MenuList>
						<Link href="/podcast">
							<MenuItem color={'black'}>Podcasts</MenuItem>
						</Link>
						<Link href="/drawings">
							<MenuItem color={'black'}>Drawings</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Flex>
		</Box>
	);
}

export default Header;
