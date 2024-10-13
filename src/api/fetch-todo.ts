import { api } from '@/lib/axios'

const GET_TODOS = `
  {
    todos {
      id
      description
    }
  }
`

export const fetchTodo = async () => {
	try {
		await new Promise(resolve => setTimeout(resolve, 2000))
		const response = await api.post('', {
			query: GET_TODOS,
		})

		return response.data
	} catch (error) {
		console.error('Erro ao realizar a requisição:', error)
		throw error
	}
}
