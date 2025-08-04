import profileData from '../data/profile.json';
import portfolioData from '../data/portfolio.json';

export interface Profile {
	name: string;
	username: string;
	bio: string;
	avatar: string;
	github: string;
	location: string;
	email: string;
	skills: string[];
	interests: string[];
}

export interface Project {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	demoUrl?: string;
	storeUrl?: string;
	stars: number;
	featured: boolean;
	isForked?: boolean;
	originalRepo?: string;
}

export interface Portfolio {
	projects: Project[];
}

export function getProfile(): Profile {
	return profileData as Profile;
}

export function getPortfolio(): Portfolio {
	return portfolioData as Portfolio;
}

export function getFeaturedProjects(): Project[] {
	return portfolioData.projects.filter(project => project.featured);
}
