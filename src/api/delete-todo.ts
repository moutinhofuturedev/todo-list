import { api } from '@/lib/axios'
import axios from 'axios'

const DELETE_TODO_MUTATION = `
  mutation DeleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
      description
    }
  }
`

export const deleteTodo = async (id: string) => {
	try {
		const response = await api.post('', {
			query: DELETE_TODO_MUTATION,
			variables: {
				id,
			},
		})

		return response.data.data.deleteTodo
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Erro na requisição:', error.message)
			throw new Error('Pode ter ocorrido um erro. Por favor, tente novamente.')
		} else {
			console.error('Erro desconhecido:', error)
			throw new Error('Algo deu errado. Por favor, tente novamente.')
		}
	}
}
