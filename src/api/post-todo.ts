import { api } from '@/lib/axios'
import type { TodoProps } from '@/types/todo-props'

export const postTodo = async ({ id, description }: TodoProps) => {
	await new Promise(resolve => setTimeout(resolve, 2000))
	await api.post('/todo-list', {
		id,
		description,
	})
}
