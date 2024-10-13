import zod from 'zod'

const isProduction = import.meta.env.MODE === 'production'

const envSchema = zod.object({
	VITE_HYGRAPH_URL: zod
		.string()
		.url({
			message:
				'A URL da Hygraph (VITE_HYGRAPH_URL) é inválida ou não está presente.',
		})
		.refine(url => !isProduction || url.startsWith('https'), {
			message: 'A URL da Hygraph (VITE_HYGRAPH_URL) deve comecar com https://',
		}),
	VITE_HYGRAPH_TOKEN: zod.string().min(1, {
		message: 'O token da Hygraph (VITE_HYGRAPH_TOKEN) é obrigatório.',
	}),
})

export const env = (() => {
	try {
		return envSchema.parse(import.meta.env)
	} catch (error) {
		console.error('Erro na validação das variáveis de ambiente:', error)
		throw error
	}
})()
