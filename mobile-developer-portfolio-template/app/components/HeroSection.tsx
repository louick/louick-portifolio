'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				{/* HERO */}
				<div className="text-center mb-8">
					<span className="text-lg md:text-xl text-gray-400 mb-2 block">Oi, me chamo</span>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Louick Andrade
						</span>
					</h1>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Desenvolvedor Full Stack & Mobile
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
						Criando experiências digitais excepcionais para web e mobile com
						<span className="text-blue-400"> React</span>,<span className="text-purple-400"> Ruby</span> e
						<span className="text-blue-400"> Flutter</span>.
					</p>
				</div>

				{/* APP STATS */}
				<div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
					{[
						{
							label: 'Apps Publicados',
							value: '12+',
							icon: (
								<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19" />
								</svg>
							),
						},
						{
							label: 'Países Atendidos',
							value: '5+',
							icon: (
								<svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
								</svg>
							),
						},
						{
							label: 'Stacks Dominadas',
							value: '10+',
							icon: (
								<svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M3,13H21V11H3V13M3,17H21V15H3V17M3,7V9H21V7H3Z" />
								</svg>
							),
						},
						{
							label: 'Projetos Full Stack',
							value: '20+',
							icon: (
								<svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 6.18L4.24 7 12 3.82 19.76 7 12 8.18zm0 2.91L4 9v6h2v-4l6 2.73 6-2.73v4h2V9l-8 2.09z" />
								</svg>
							),
						},
					].map((stat, index) => (
						<div key={index} className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
							<div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
								<div className="space-y-0.5 sm:space-y-1">
									<div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
										{stat.value}
									</div>
									<div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
										{stat.label}
									</div>
								</div>
							</div>
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
						</div>
					))}
				</div>

				{/* FEATURED APP */}
				<div className="max-w-lg mx-auto px-4">
					<div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

						<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative">
							<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
										<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
									</pattern>
									<rect width="100" height="100" fill="url(#grid)" />
								</svg>
							</div>

							<div className="relative p-8">
								<div className="flex justify-center">
									<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
										<span className="text-blue-400 text-sm font-medium">App Destaque</span>
									</div>
								</div>

								<div className="text-center mt-6">
									<h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
										Fortalezinha App
									</h3>
									<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
										Aplicativo de turismo inteligente com hospedagem, localização e recomendações locais. Desenvolvido com Flutter + Next.js.
									</p>

									<div className="grid grid-cols-3 gap-4 mb-6">
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-yellow-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span className="font-semibold">4.9</span>
											</div>
											<p className="text-xs text-gray-500">Avaliação</p>
										</div>
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-blue-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M19.35,10.03..." />
												</svg>
												<span className="font-semibold">800K+</span>
											</div>
											<p className="text-xs text-gray-500">Downloads</p>
										</div>
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-green-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M16,14H17.5..." />
												</svg>
												<span className="font-semibold">200K+</span>
											</div>
											<p className="text-xs text-gray-500">Usuários Ativos</p>
										</div>
									</div>

									<div className="flex flex-wrap justify-center gap-2">
										{['Cross-Platform', 'Real-time Sync', 'Offline Mode'].map((feature, index) => (
											<span
												key={index}
												className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors"
											>
												{feature}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Decorative corners */}
							<div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
								<div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
								<div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
								<div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
								<div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Down Indicator */}
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
