import { TodoList } from '@/components/todo-list'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<TodoList />
		</QueryClientProvider>
	)
}
