import { api } from '@/lib/axios'
import type { TodoProps } from '@/types/todo-props'
import axios from 'axios'

const GET_TODOS = `
  {
    todos {
      id
      description
    }
  }
`

export const fetchTodo = async (): Promise<TodoProps> => {
	try {
		await new Promise(resolve => setTimeout(resolve, 2000))
		const response = await api.post('', {
			query: GET_TODOS,
		})

		return response.data
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
