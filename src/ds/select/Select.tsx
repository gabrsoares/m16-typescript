import React, { FunctionComponent } from 'react'
import Flex from '../flex/Flex'
import './styles.css'
import { defaultProps } from '..'

interface selectProps extends defaultProps {
	size?: string
	fSize?: string
	labelText?: string
	setId?: string
	direction?: string
}

const Select: FunctionComponent<selectProps> = (props) => {
	const color = `color-action-${props.variation}`
	const size = `size-action-${props.size}`
	const fSize = `fSize-action-${props.fSize}`

	return (
		<Flex direction={props.direction}>
			<label className={`${color} ${fSize} selectLabel`} htmlFor={props.setId}>
				{props.labelText}
			</label>
			<select className={`${color} ${size} ${fSize} w4 br2`} id={props.setId}>
				<option value=''></option>
				{props.children}
			</select>
		</Flex>
	)
}

export default Select
