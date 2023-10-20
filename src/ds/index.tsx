import { ReactNode } from 'react'
import Button from './button/Button'
import Flex from './flex/Flex'
import Input from './input/input'
import Select from './select/Select'

export { Button }
export { Flex }
export { Input }
export { Select }

export interface defaultProps {
	variation?: string
	children?: ReactNode
}
