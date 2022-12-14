import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
	fontFamily: 'body',
	color: 'black',
};

const sizes: Record<string, SystemStyleObject> = {
	lg: {
		fontSize: ['md', null, null, 'lg', 'xl'],
		lineHeight: ['base', null, null, '1.33333333333', '1.4'],
	},
	md: {
		fontSize: 'md',
		lineHeight: 'base',
	},
	sm: {
		fontSize: 'sm',
		lineHeight: '1.71428571429',
	},
	xs: {
		fontSize: 'xs',
		lineHeight: '1',
	},
};

const defaultProps = {
	size: 'md',
};

export default {
	baseStyle,
	sizes,
	defaultProps,
};
