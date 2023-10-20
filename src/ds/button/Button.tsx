import React, { FunctionComponent, ReactNode, useState } from 'react'
import { defaultProps } from '..'
import './styles.css'

interface ButtonProps extends defaultProps {
	size: string
}

type stateType = ReactNode

const Button: FunctionComponent<ButtonProps> = (props) => {
	const [textContent, setTextContent] = useState<stateType>(props.children)

	const color = `action-${props.variation}`
	const bgColor = `bg-action-${props.variation}`
	const bColor = `b--action-${props.variation}`
	const bSize = `bSize-action-${props.size}`

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms))

	const handleClick = async () => {
		setTextContent('Carregando...')
		await delay(3000)
		setTextContent('Enviado!')
	}

	return (
		<button
			onClick={handleClick}
			className={`${color} ${bgColor} ${bColor} ${bSize} btn br2 pv1 ph3`}>
			{textContent}
		</button>
	)
}

export default Button
