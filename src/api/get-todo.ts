import { api } from '@/lib/axios'
import type { TodoProps } from '@/types/todo-props'

export const getTodo = async () => {
	const response = await api.get<TodoProps[]>('/todo-list')

	return response.data
}
