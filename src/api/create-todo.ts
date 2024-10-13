import { api } from '@/lib/axios'
import axios from 'axios'

const CREATE_TODO_MUTATION = `
  mutation CreateTodo($description: String!) {
    createTodo(data: { description: $description }) {
      id
      description
    }
  }
`

export const createTodo = async (description: string) => {
	try {
		const response = await api.post('', {
			query: CREATE_TODO_MUTATION,
			variables: {
				description,
			},
		})

		return response.data.data.createTodo
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Erro na requisição:', error.message)
			throw new Error(
				'Erro ao conectar com o servidor. Por favor, tente novamente.',
			)
		} else {
			console.error('Erro desconhecido:', error)
			throw new Error('Algo deu errado. Por favor, tente novamente.')
		}
	}
}
