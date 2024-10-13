import { getTodo } from '@/api/get-todo'
import { postTodo } from '@/api/post-todo'
import { removeTodo } from '@/api/remove-todo'
import type { TodoProps } from '@/types/todo-props'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Skeleton } from '../skeleton'

export const TodoList = () => {
	const queryClient = new QueryClient()
	const [todo, setTodo] = useState('')

	const {
		data: todoList,
		refetch,
		isLoading: isTodoListLoading,
	} = useQuery<TodoProps[]>({
		queryKey: ['todo'],
		queryFn: getTodo,
		staleTime: 1000 * 60,
	})

	const { mutateAsync: postTodoMutation, isPending: isPostPending } =
		useMutation({
			mutationFn: postTodo,
			onSuccess: () => {
				setTodo('')

				// Atualiza a lista de tarefas
				refetch()
			},

			onError: (_, context) => {
				// Remove a tarefa criada no erro
				queryClient.setQueryData(['todos'], (old: TodoProps[]) =>
					old.filter(todo => todo.id !== context.id),
				)
			},
		})

	const { mutateAsync: removeTodoMutation } = useMutation({
		mutationFn: removeTodo,
		onSuccess: () => {
			refetch()
		},
	})

	return (
		<div className='flex flex-col items-center h-screen px-8'>
			<div className='flex flex-col items-start mt-16 gap-8 max-w-[700px] w-full'>
				<h1 className='text-4xl font-bold'>Todo App</h1>

				<div className='flex gap-4 relative min-w-[300px] w-full'>
					<input
						type='text'
						id='search'
						placeholder='crie sua tarefa'
						value={todo}
						onChange={e => setTodo(e.target.value)}
						required
						className='block w-full p-4 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-100 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>
					<button
						onClick={() =>
							postTodoMutation({
								description: todo,
								id: Math.random().toString(36).slice(2),
							})
						}
						disabled={!todo}
						type='button'
						className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						Adicionar
					</button>
				</div>

				<ul className='w-full'>
					{todoList?.length === 0 && (
						<span className='text-center text-lg font-semibold'>
							Nenhuma tarefa criada
						</span>
					)}
					{isTodoListLoading ? (
						<Skeleton />
					) : (
						todoList?.map(todo => {
							return (
								<li
									className='flex items-center justify-between py-3 px-4 border rounded-lg border-zinc-300 mt-2'
									key={todo.id}
								>
									<span className='flex flex-wrap leading-5'>
										{todo.description}
									</span>
									<button
										className='text-white bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										onClick={() => removeTodoMutation(todo.id)}
									>
										deletar
									</button>
								</li>
							)
						})
					)}
					{isPostPending && <Skeleton />}
				</ul>
			</div>
		</div>
	)
}
