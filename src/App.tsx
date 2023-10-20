import React, { FunctionComponent } from 'react'
import './App.css'
import { Button, Flex, Input, Select } from './ds'

const App: FunctionComponent = () => {
	return (
		<div className='App'>
			<Flex direction='column' align='flex-start' justify='center'>
				<Input type='text' direction='column' label='Nome' setId='nome' />
				<Input type='text' direction='column' label='Email' setId='email' />
				<Select direction='column' labelText='Gênero:'>
					<option>Masculino</option>
					<option>Feminino</option>
					<option>Outro</option>
				</Select>
				<Button variation='secondary' size='small'>
					Enviar
				</Button>
			</Flex>
		</div>
	)
}

export default App
