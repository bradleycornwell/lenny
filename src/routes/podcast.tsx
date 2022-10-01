import { Box, Image, Center, Flex, Heading } from '@chakra-ui/react';

export default function Podcast() {
	return (
		<>
			<Box as="main" flexGrow={1} pt={2} textAlign="center">
				<Flex flexDir={'column'}>
					<Heading pt={5} as="h2" size={'md'}>
						The Force Podcast
					</Heading>
					<Heading py={3} as="h3" size={'sm'}>
						ft. Paul (aka Daddy)
					</Heading>
					<Flex
						flexDir={{ base: 'column', md: 'row' }}
						textAlign="center"
						bgColor={'gray.100'}
						gap={2}
						justifyContent={'space-between'}
					>
						<Flex
							m={'auto'}
							flexDir={'column'}
							justifyContent={'center'}
							gap={'5'}
						>
							<Heading as="h3" size={{ base: 'sm', md: 'md' }}>
								Episode I: Gredo
							</Heading>
							<Center>
								<audio controls>
									<source src="pod.mp4" type="audio/mp4" />
									Your browser does not support the audio
									element.
								</audio>
							</Center>
						</Flex>
						<Image src="greedo.jpg"></Image>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
