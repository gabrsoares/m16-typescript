import { ReactNode } from 'react'
import Button from './button/Button'
import Flex from './flex/Flex'
import Input from './input/input'
import Select from './select/Select'
import StyleButton from './styleButton/StyleButton'

export { Button }
export { Flex }
export { Input }
export { Select }
export { StyleButton }

export interface defaultProps {
	variation?: string
	children?: ReactNode
}
