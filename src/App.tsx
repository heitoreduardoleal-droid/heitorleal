import { useState, useEffect } from 'react'

const CTA_LINK = "https://pay.kirvano.com/668f849f-f59b-4bc5-8fc9-f3693bb9e3de"

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-gradient-to-t from-black via-black to-transparent">
        <a 
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-center py-4 px-6 rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 text-lg uppercase"
        >
          🚀 Quero Dominar o Jogo
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider animate-pulse">
            🔥 Conteúdo Restrito
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Você não foi rejeitado…</span><br />
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              só nunca aprendeu o jogo.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            O manual que <span className="text-yellow-500 font-bold">ninguém te ensinou</span> sobre atração e dominância. 
            Desenvolva mentalidade inabalável, gera interesse natural e conquiste mulheres nota <span className="text-red-500 font-bold">8, 9 e 10</span>.
          </p>

          {/* Trigger Phrases */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-gray-800/80 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
              ⚡ Domine a mente feminina
            </span>
            <span className="bg-gray-800/80 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
              💪 Conquiste sua melhor versão
            </span>
            <span className="bg-gray-800/80 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
              🎯 Não seja mais ignorado
            </span>
          </div>

          {/* CTA Button */}
          <a 
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xl px-12 py-5 rounded-lg shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider mb-6"
          >
            🔥 Quero Dominar o Jogo Agora
          </a>

          {/* Urgency Text */}
          <p className="text-gray-400 text-sm">
            ⏰ Acesso imediato • 100% digital • Privado e seguro
          </p>
        </div>
      </section>

      {/* QUEBRA DE CRENÇA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-red-500">😡 O Problema</span> Não É Você
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Você não é o problema. Você só está jogando sem saber as regras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Erro 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">🥺</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Ser Bonzinho Demais</h3>
              <p className="text-gray-300">
                Colocar mulheres em pedestal e agradar demais só te coloca na friendzone. Mulheres buscam liderança, não submissão.
              </p>
            </div>

            {/* Erro 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">🤷</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Achar Que Beleza É Tudo</h3>
              <p className="text-gray-300">
                Caras bonitos ficam sozinhos. O que realmente atrai é <span className="text-yellow-500 font-bold">comportamento, confiança e postura</span>.
              </p>
            </div>

            {/* Erro 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">😶</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Não Saber Conduzir</h3>
              <p className="text-gray-300">
                Deixar a interação morrer, não saber o que falar, ter medo de arriscar. Sem direção, você fica no mesmo lugar.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-white">
              O problema não é você. É a <span className="text-red-500">falta de conhecimento</span>.
            </p>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO DO PRODUTO */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Apresentamos o<br />
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Manual da Dominância
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              O atalho que você sempre procurou para entender o jogo social.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-600/50 rounded-lg p-6 shadow-2xl shadow-yellow-500/20 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-black rounded-lg p-8 border border-gray-700">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📕</div>
                    <h3 className="text-2xl font-black text-white mb-2">MANUAL DA</h3>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                      DOMINÂNCIA
                    </h3>
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <p className="text-gray-400 text-sm">Atração • Conexão • Sedução</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-lg transform rotate-12 shadow-lg">
                NOVO
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Direto ao Ponto</h4>
                  <p className="text-gray-400">Sem enrolação, sem teoria chata. Apenas o que funciona na prática.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Baseado em Psicologia</h4>
                  <p className="text-gray-400">Comportamento real, testado e comprovado. Não é_pickup line_.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Atalho para o Jogo</h4>
                  <p className="text-gray-400">Anos de aprendizado condensados em um guia que você lê em horas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Privado e Seguro</h4>
                  <p className="text-gray-400">Acesso 100% digital e discreto. Ninguém precisa saber.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-lg px-10 py-4 rounded-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 uppercase"
            >
              🚀 Quero Acessar o Manual
            </a>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              O Que Você Vai <span className="text-red-500">Aprender</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              6 capítulos transformadores que vão mudar sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Capítulo 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">A SUA MENTE</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  ReprogRAR suas crenças limitantes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Desenvolver confiança REAL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Eliminar inseguranças invisíveis
                </li>
              </ul>
            </div>

            {/* Capítulo 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">COMO MULHERES FUNCIONAM</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Entender o comportamento feminino
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Saber exatamente o que ela pensa
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Agir com precisão em cada situação
                </li>
              </ul>
            </div>

            {/* Capítulo 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">ATRAÇÃO NATURAL</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Gerar interesse SEM esforço
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Linguagem corporal dominante
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Abordar sem parecer inseguro
                </li>
              </ul>
            </div>

            {/* Capítulo 4 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">CONEXÃO DE ALTO VALOR</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Criar conversas envolventes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Se destacar da maioria dos homens
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Gatilhos emocionais que prendem
                </li>
              </ul>
            </div>

            {/* Capítulo 5 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                5
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">SEDUÇÃO</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Conduzir naturalmente para algo mais
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  O passo a passo completo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Aumentar a tensão sexual
                </li>
              </ul>
            </div>

            {/* Capítulo 6 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="bg-red-600 text-white font-black text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                6
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">ENCONTROS</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Como agir no primeiro encontro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  O que falar, fazer e evitar
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Manter o interesse depois
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Sua <span className="text-red-500">Transformação</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como sua vida vai mudar após aplicar o Manual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ANTES */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-red-500 mb-6 flex items-center gap-3">
                <span className="text-3xl">❌</span> ANTES
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Sem confiança, sempre inseguro
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Sem direção nas interações
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Rejeições constantes
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Mulheres te ignoram
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Friendzone eterno
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-500 text-xl">✗</span>
                  Medo de abordar
                </li>
              </ul>
            </div>

            {/* DEPOIS */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/50 rounded-2xl p-8 shadow-xl shadow-yellow-500/10">
              <h3 className="text-2xl font-black text-yellow-500 mb-6 flex items-center gap-3">
                <span className="text-3xl">✅</span> DEPOIS
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Postura dominante natural
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Controle total das interações
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Segurança e presença forte
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Mulheres te procuram
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Várias opções de mulheres
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-yellow-500 text-xl">✓</span>
                  Aborda com tranquilidade
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              O Que Estão <span className="text-yellow-500">Dizendo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados reais de quem aplicou o Manual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Minha confiança mudou completamente. Antes eu travava quando via uma mulher bonita. Hoje eu sou eu mesmo em qualquer situação."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  R
                </div>
                <div>
                  <p className="font-bold">Rafael, 26</p>
                  <p className="text-gray-500 text-sm">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Agora eu sei exatamente o que fazer. O capítulo de conexão mudou meu jogo. Finalmente entendi como manter uma conversationa fluindo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  L
                </div>
                <div>
                  <p className="font-bold">Lucas, 29</p>
                  <p className="text-gray-500 text-sm">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Estava na friendzone há 2 anos. 3 semanas após o Manual, saí dela completamente. As dicas sobre mindset são ouro puro."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  M
                </div>
                <div>
                  <p className="font-bold">Marcos, 31</p>
                  <p className="text-gray-500 text-sm">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

            {/* Depoimento 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Nunca tinha abordado uma mulher na rua. Aprendi a linguagem corporal certa e já peguei 3 números essa semana."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  G
                </div>
                <div>
                  <p className="font-bold">Gabriel, 23</p>
                  <p className="text-gray-500 text-sm">Curitiba, PR</p>
                </div>
              </div>
            </div>

            {/* Depoimento 5 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "O melhor investimento que fiz. Por menos de 30 reais mudei minha vida social. Vale cada centavo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  B
                </div>
                <div>
                  <p className="font-bold">Bruno, 27</p>
                  <p className="text-gray-500 text-sm">Salvador, BA</p>
                </div>
              </div>
            </div>

            {/* Depoimento 6 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Finalmente entendi como mulheres pensam. O capítulo 2 sozinho já vale tudo. Recomendo demais!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center font-bold">
                  T
                </div>
                <div>
                  <p className="font-bold">Thiago, 30</p>
                  <p className="text-gray-500 text-sm">Brasília, DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-yellow-600/10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider mb-6 animate-pulse">
              🔥 OFERTA ESPECIAL
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Acesso Completo ao<br />
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Manual da Dominância
              </span>
            </h2>
          </div>

          {/* Card Oferta */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-500/20">
            {/* Preço */}
            <div className="text-center mb-8">
              <p className="text-gray-400 line-through text-xl mb-2">De R$ 97,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-400 text-2xl">Por apenas</span>
                <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent text-6xl md:text-7xl font-black">
                  R$ 29,90
                </span>
              </div>
              <p className="text-gray-400 mt-2">Pagamento único • Acesso vitalício</p>
            </div>

            {/* O que está incluído */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-gray-200">Manual Completo em PDF (6 capítulos)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-gray-200">Acesso Imediato após compra</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-gray-200">Garantia de 7 dias incondicional</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-gray-200">Acesso 100% privado e seguro</span>
              </div>
            </div>

            {/* Garantia Badge */}
            <div className="bg-gray-800/80 border border-green-500/50 rounded-xl p-6 text-center mb-8">
              <div className="text-5xl mb-2">🛡️</div>
              <h4 className="text-xl font-bold text-green-500 mb-2">Garantia de 7 Dias</h4>
              <p className="text-gray-300">
                Se não gostar do conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xl md:text-2xl py-6 px-8 rounded-xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-center"
            >
              🔥 Quero Acessar o Manual Agora
            </a>

            {/* Pagamento Info */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                🔒 Compra segura
              </span>
              <span className="flex items-center gap-2">
                💳 Cartão, PIX ou Boleto
              </span>
              <span className="flex items-center gap-2">
                ⚡ Acesso imediato
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ESCASSEZ */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-6">
              ⚠️ Leia Antes de Continuar
            </h3>
            <div className="space-y-4 text-gray-200 max-w-2xl mx-auto">
              <p className="flex items-center justify-center gap-3">
                <span className="text-red-500 font-bold">🚨</span>
                Este conteúdo <span className="text-red-500 font-bold">não é divulgado publicamente</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-red-500 font-bold">⏰</span>
                O acesso pode sair do ar a qualquer momento
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-red-500 font-bold">🔒</span>
                É um <span className="text-red-500 font-bold">conteúdo restrito e exclusivo</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-red-500 font-bold">📈</span>
                Esse preço promocional pode acabar em breve
              </p>
            </div>
            <a 
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black text-lg px-10 py-4 rounded-lg shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 uppercase"
            >
              🔥 Garantir Meu Acesso Agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Está Pronto para<br />
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Dominar o Jogo?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não deixe para depois. A cada dia que passa, você continua na mesma posição. 
            A transformação começa com uma decisão.
          </p>
          
          {/* Trigger Phrases */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-red-600/20 border border-red-500/50 px-5 py-3 rounded-lg text-red-400 font-semibold">
              Como conquistar mulheres nota 8, 9 e 10
            </span>
            <span className="bg-yellow-600/20 border border-yellow-500/50 px-5 py-3 rounded-lg text-yellow-400 font-semibold">
              Conquiste sua melhor versão
            </span>
            <span className="bg-red-600/20 border border-red-500/50 px-5 py-3 rounded-lg text-red-400 font-semibold">
              Não seja mais ignorado por mulheres lindas
            </span>
            <span className="bg-yellow-600/20 border border-yellow-500/50 px-5 py-3 rounded-lg text-yellow-400 font-semibold">
              Domine a mente feminina
            </span>
          </div>

          <a 
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xl md:text-2xl px-12 py-6 rounded-lg shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider animate-pulse"
          >
            🔥 QUERO ACESSAR O MANUAL AGORA
          </a>

          <p className="text-gray-500 mt-6 text-sm">
            Compra 100% segura • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2024 Manual da Dominância. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Este produto é vendido e entregue digitalmente. Ao adquirir, você concorda com nossos termos de uso.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Os resultados podem variar de pessoa para pessoa. Este produto não garante resultados específicos.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 z-40 hidden md:block"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App