import { defineNestedType } from 'contentlayer/source-files'

// Nested types
export const Skill = defineNestedType(() => ({
	name: 'Skill',
	fields: {
		name: { type: 'string', required: true },
		items: { type: 'list', of: { type: 'string' }, required: true },
	},
}))

export const SocialLink = defineNestedType(() => ({
	name: 'SocialLink',
	fields: {
		name: { type: 'string', required: true },
		url: { type: 'string', required: true },
	},
}))

export const Social = defineNestedType(() => ({
	name: 'Social',
	fields: {
		description: { type: 'string', required: true },
		links: { type: 'list', of: SocialLink, required: true },
	},
}))

export const SoftwareItem = defineNestedType(() => ({
	name: 'SoftwareItem',
	fields: {
		name: { type: 'string', required: true },
		link: { type: 'string', required: true },
	},
}))

export const SoftwareDetail = defineNestedType(() => ({
	name: 'SoftwareDetail',
	fields: {
		subtitle: { type: 'string', required: true },
		items: { type: 'list', of: SoftwareItem, required: true },
	},
}))

export const Software = defineNestedType(() => ({
	name: 'Software',
	fields: {
		title: { type: 'string', required: true },
		details: { type: 'list', of: SoftwareDetail, required: true },
	},
}))

export const HardwareItem = defineNestedType(() => ({
	name: 'HardwareItem',
	fields: {
		name: { type: 'string', required: true },
		subitems: { type: 'list', of: { type: 'string' } },
	},
}))

export const HardwareDetail = defineNestedType(() => ({
	name: 'HardwareDetail',
	fields: {
		subtitle: { type: 'string', required: true },
		items: { type: 'list', of: HardwareItem, required: true },
	},
}))

export const Hardware = defineNestedType(() => ({
	name: 'Hardware',
	fields: {
		title: { type: 'string', required: true },
		details: { type: 'list', of: HardwareDetail, required: true },
	},
}))
