import axios from 'axios'
import { env } from '../env'

export const api = axios.create({
	baseURL: env.VITE_HYGRAPH_URL,
	headers: {
		Authorization: `Bearer ${env.VITE_HYGRAPH_TOKEN}`,
	},
})
