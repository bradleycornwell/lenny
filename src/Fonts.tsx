import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      /* TODO: have I got the unicode range correct */
      @font-face {
        font-family: 'RussoOne';
        src: url('./RussoOne-Regular.ttf') format('truetype');
      }
      `}
	/>
);

export default Fonts;
