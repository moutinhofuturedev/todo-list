import { createTodo } from '@/api/create-todo'
import { deleteTodo } from '@/api/delete-todo'
import { fetchTodo } from '@/api/fetch-todo'
import type { TodoProps } from '@/types/todo-props'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Skeleton } from '../skeleton'

export const TodoList = () => {
	const [todo, setTodo] = useState('')

	const {
		data: todoList,
		refetch,
		isFetching: isTodoListFetching,
	} = useQuery<TodoProps>({
		queryKey: ['todo'],
		queryFn: fetchTodo,
		staleTime: 1000 * 60,
	})

	const { mutateAsync: createTodoMutation } = useMutation({
		mutationFn: createTodo,
		onSuccess: () => {
			setTodo('')

			refetch()
		},
	})

	const { mutateAsync: deleteTodoMutation } = useMutation({
		mutationFn: deleteTodo,
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
						onClick={() => createTodoMutation(todo)}
						disabled={!todo}
						type='button'
						className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						Adicionar
					</button>
				</div>

				<ul className='w-full'>
					{todoList?.data.todos?.length === 0 && !isTodoListFetching && (
						<span className='text-center text-lg font-semibold'>
							Nenhuma tarefa criada
						</span>
					)}
					{isTodoListFetching ? (
						<Skeleton />
					) : (
						todoList?.data.todos?.map(todo => {
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
										onClick={() => deleteTodoMutation(todo.id)}
									>
										deletar
									</button>
								</li>
							)
						})
					)}
				</ul>
			</div>
		</div>
	)
}
