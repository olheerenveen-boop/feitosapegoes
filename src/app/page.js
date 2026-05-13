'use client'

import Hero from '@/components/Hero'
import News from '@/components/News'
import Team from '@/components/Team'

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Team />
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-center">
        <h2 className="text-4xl font-bold mb-4">Faça Parte da Nossa História</h2>
        <p className="text-xl mb-8 opacity-90">Junte-se ao S.R.C. Pegões e viva essa emoção com a gente!</p>
        <button className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition">
          Saiba Mais
        </button>
      </section>
    </main>
  )
}
