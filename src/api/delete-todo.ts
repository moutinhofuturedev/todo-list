import { api } from '@/lib/axios'

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
		console.error('Erro ao remover o todo:', error)
	}
}
