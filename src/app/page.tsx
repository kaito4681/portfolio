import ProfileCard from '@/components/ProfileCard';
import ProjectCard from '@/components/ProjectCard';
import { getProfile, getFeaturedProjects, getPortfolio } from '@/lib/data';

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            kaitoのポートフォリオ
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            自己紹介
          </h2>
          <div className="flex justify-center">
            <ProfileCard profile={profile} />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            作品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 {profile.name}. All rights reserved.</p>
            <p className="mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
