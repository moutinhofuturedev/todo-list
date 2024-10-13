import { api } from '@/lib/axios'

export const removeTodo = async (id: string) => {
	await api.delete(`/todo-list/${id}`)
}
