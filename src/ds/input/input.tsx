import React, { FunctionComponent } from 'react'
import './styles.css'
import Flex from '../flex/Flex'
import { defaultProps } from '..'

interface inputProps extends defaultProps {
	fSize?: string
	size?: string
	setId?: string
	direction?: string
	type: string
	placeholder?: string
	label?: string
}

const Input: FunctionComponent<inputProps> = (props) => {
	const fSize = `fSize-action-${props.fSize}`
	const size = `size-action-${props.size}`

	return (
		<Flex direction={props.direction}>
			<label className={`${fSize} inputLabel`} htmlFor={props.setId}>
				{props.label}
			</label>
			<input
				className={`${fSize} ${size}`}
				id={props.setId}
				type={props.type}
				placeholder={props.placeholder}></input>
		</Flex>
	)
}

export default Input
