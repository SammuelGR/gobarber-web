import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

const Button = ({
	children,
	...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
	<Container type="button" {...rest}>
		{children}
	</Container>
);

export default Button;
