import Link from "next/link";
import Image from "next/image";
import { FiCode, FiUser, FiMail, FiDownload, FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="https://images.unsplash.com/photo-1553484771-689277e6fa16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAxNDUwMDd8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Taqi - Portfolio" 
                width={160} 
                height={160} 
                className="w-full h-full object-cover" 
                priority 
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm Taqi
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl leading-relaxed">
                A passionate developer creating digital experiences that make a difference
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-indigo-600 bg-white px-8 text-sm font-medium text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I'm a dedicated developer who loves turning ideas into reality through clean, efficient code. 
                  With a passion for creating user-friendly experiences, I focus on building solutions that are 
                  both functional and beautiful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My journey in development has taught me the importance of continuous learning and staying 
                  updated with the latest technologies to deliver the best results.
                </p>
                <div className="flex gap-4 pt-4">
                  <a href="#" className="p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110">
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110">
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAxNDUwMDh8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="About Taqi" 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                <div className="p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  <FiCode className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
                <p className="text-sm text-gray-600 text-center">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                <div className="p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  <FiUser className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">UI/UX Design</h3>
                <p className="text-sm text-gray-600 text-center">
                  User-centered design, prototyping, wireframing
                </p>
              </div>
              <div className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                <div className="p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  <FiExternalLink className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-sm text-gray-600 text-center">
                  Full-stack development, API integration, databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                A showcase of my recent work and creative projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-300 bg-white">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1625251002948-15c0be956c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAxNDUwMDl8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Project 1" 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Web Application</h3>
                  <p className="text-gray-600 text-sm mb-4">Modern web app with clean design and smooth functionality</p>
                  <Link href="/portfolio" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                    View Project →
                  </Link>
                </div>
              </div>
              <div className="group rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-300 bg-white">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAxNDUwMTB8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Project 2" 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Mobile Design</h3>
                  <p className="text-gray-600 text-sm mb-4">Responsive design optimized for mobile experiences</p>
                  <Link href="/portfolio" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                    View Project →
                  </Link>
                </div>
              </div>
              <div className="group rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-300 bg-white">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1721420584514-623d45d3a0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAxNDUwMTF8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Project 3" 
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">UI/UX Project</h3>
                  <p className="text-gray-600 text-sm mb-4">User interface design with focus on user experience</p>
                  <Link href="/portfolio" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white border-2 border-indigo-600 px-8 text-sm font-medium text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Work Together
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 md:text-xl leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <FiMail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-indigo-600 bg-white px-8 text-sm font-medium text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105"
                >
                  <FiDownload className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}