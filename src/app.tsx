import { TodoList } from '@/components/todo-list'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<TodoList />
		</QueryClientProvider>
	)
}
