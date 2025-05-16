// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Podcast4.me - Create AI-Powered Audio Content',
	siteDescription:
		'Transform your text into engaging audio content with Podcast4.me. Create clips, convert text to speech, and sync lips with our AI-powered tools.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.png',
		alt: 'Podcast4.me logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
