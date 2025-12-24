import { defineCollection, reference, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const software = defineCollection({
	loader: file('src/data/software.json'),
	schema: z.object({
		name: z.string(),
		items: z.array(
			z.object({
				name: z.string(),
				link: z.string(),
			}),
		),
	}),
})

const hardware = defineCollection({
	loader: file('src/data/hardware.json'),
	schema: z.object({
		name: z.string(),
		items: z.array(
			z.object({
				name: z.string(),
				subitems: z.array(z.string()).optional(),
			}),
		),
	}),
})

const about = defineCollection({
	loader: file('src/data/about.json'),
	schema: ({ image }) =>
		z.object({
			avatar: image(),
			name: z.string(),
			username: z.string(),
			headline: z.string(),
			summary: z.string(),
			bio: z.string(),
			description: z.array(z.string()),
			skills: z.array(
				z.object({
					name: z.string(),
					items: z.array(z.string()),
				}),
			),
			social: z.object({
				description: z.string(),
				links: z.array(
					z.object({
						name: z.string(),
						url: z.string(),
					}),
				),
			}),
		}),
})

const projectCategory = defineCollection({
	loader: file('src/data/project-categories.json'),
	schema: z.object({
		name: z.string(),
	}),
})

const project = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/project' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			thumbnail: image(),
			description: z.string(),
			category: reference('projectCategory'),
			github: z.string().optional(),
			demo: z.string().optional(),
			position: z.number().optional(),
		}),
})

const post = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/post' }),
	schema: ({ image }) =>
		z.object({
			language: z.enum(['en', 'id']).default('id'),
			title: z.string(),
			thumbnail: image(),
			thumbnailCredit: z.string(),
			summary: z.string(),
			tags: z.array(z.string()),
			author: z.string(),
			createdAt: z.date(),
			updatedAt: z.date(),
		}),
})

export const collections = {
	software,
	hardware,
	about,
	projectCategory,
	project,
	post,
}
