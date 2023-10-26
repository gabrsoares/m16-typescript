import React, { FunctionComponent, ReactNode, useState } from 'react'

const StyleButton: FunctionComponent = () => {
	type stateType = ReactNode

	const [style, setStyle] = useState<stateType>('')

	interface Styles {
		textStyle: 'primary' | 'secondary'
	}

	type Style = Required<Styles>

	const buttonStyle1: Style = {
		textStyle: 'primary',
	}

	const buttonStyle2: Style = {
		textStyle: 'secondary',
	}

	const bgColor = `bg-action-${style}`

	return (
		<div>
			<button
				onClick={() => setStyle(buttonStyle1.textStyle)}
				className={`${bgColor} btn br2 pv1 ph3 btn`}>
				Primary
			</button>
			<button
				onClick={() => setStyle(buttonStyle2.textStyle)}
				className={`${bgColor} btn br2 pv1 ph3 btn`}>
				Secondary
			</button>
		</div>
	)
}

export default StyleButton
