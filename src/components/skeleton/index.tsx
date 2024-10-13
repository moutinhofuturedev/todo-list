export const Skeleton = () => {
	return (
		<>
			<li className='flex items-center justify-between py-3 px-4 border rounded-lg border-zinc-300 mt-2'>
				<span className='bg-zinc-300 animate-pulse p-4 h-5 w-36 rounded-lg' />
				<span className='p-4 h-8 w-20 text-white bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' />
			</li>
		</>
	)
}
