import {
	Heading,
	Image,
	Text,
	HStack,
	Flex,
	Button,
	Link,
	Box,
	Container,
} from '@chakra-ui/react';

export function Index() {
	return (
		<>
			<Box as="main" flexGrow={1}>
				<Flex
					bgColor="gray.100"
					flexDir={{ base: 'column', md: 'row' }}
					justifyContent="flex-start"
				>
					<Flex flexDir={'column'} gap="1" p="10">
						<Heading as="h1" size="sm">
							A long time ago in a galaxy far far away
						</Heading>
						<Heading as="h2" size="xs">
							Lenny discovered the incredible world of Star
							Wars...
						</Heading>
						<Text size="lg">
							He had so many thoughts and ideas...
						</Text>
						<Text size="lg">
							And here he can share some with you...
						</Text>
					</Flex>
					<Image
						h={{ base: '50%', md: '100%' }}
						src="/starwars.jpeg"
					></Image>
				</Flex>
				<Flex
					bgColor="black"
					mt="0"
					p="2rem"
					gap="5"
					flexDir={{ base: 'column', md: 'row' }}
				>
					<Link href="/podcast" m="auto">
						<Image src="/podcast.jfif"></Image>
					</Link>
					<Flex flexDir="column" gap="5" color="yellow.500">
						<Text color="white">
							You can listen to Lenny's latest episodes of the
							Force podcast featuring his Dad, Paul
						</Text>
						<Text color="white">
							They will cover all kinds of Star Wars topics
						</Text>
						<Link href="/thoughts">
							<Button
								variant={'secondary'}
								size={{ base: 'xs', md: 'md' }}
							>
								Click here to listen
							</Button>
						</Link>
					</Flex>
				</Flex>
				<Flex
					bgColor="gray.100"
					minH="300px"
					background={{
						base: "url('/sm_stormtropper.jpg')",
						md: "url('/lg_stormtropper.jpg')",
					}}
					backgroundPosition={{ base: 'top', md: 'top' }}
					p={5}
					gap={5}
					flexDir={{ base: 'column', md: 'column' }}
				>
					<Text size={{ base: 'sm', md: 'md' }} w={{ base: '80%' }}>
						If you want to know more about Star Wars, why don't you
						explore this page where Lenny shares some of his
						thoughts
					</Text>
					<Link href="/thoughts">
						<Button size={{ base: 'xs', md: 'md' }}>
							Click here for Lenny's thoughts
						</Button>
					</Link>
				</Flex>
			</Box>
		</>
	);
}
