import './styles.css'
import React, { FunctionComponent } from 'react'
import { defaultProps } from '..'

interface Flex extends defaultProps {
	direction: string
	align: string
	justify: string
}

type flexProps = Partial<Flex>

const Flex: FunctionComponent<flexProps> = (props) => {
	const direction = `direction-action-${props.direction}`
	const align = `align-action-${props.align}`
	const justify = `justify-action-${props.justify}`

	return (
		<div className={`ds-flex ${direction} ${align} ${justify}`}>
			{props.children}
		</div>
	)
}

export default Flex
