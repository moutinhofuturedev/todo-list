import { api } from '@/lib/axios'

const CREATE_TODO_MUTATION = `
  mutation CreateTodo($description: String!) {
    createTodo(data: { description: $description }) {
      id
      description
    }
  }
`

export const createTodo = async (description: string) => {
	// await new Promise(resolve => setTimeout(resolve, 2000))
	try {
		const response = await api.post('', {
			query: CREATE_TODO_MUTATION,
			variables: {
				description, // Passa o valor da descrição
			},
		})

		return response.data.data.createTodo // Retorna o novo todo criado
	} catch (error) {
		console.error('Erro ao criar o todo:', error)
		throw error
	}
}
