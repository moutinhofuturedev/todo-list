import zod from 'zod'

const envSchema = zod.object({
	VITE_HYGRAPH_URL: zod.string().url(),
	VITE_HYGRAPH_TOKEN: zod.string(),
})

export const env = envSchema.parse(import.meta.env)
