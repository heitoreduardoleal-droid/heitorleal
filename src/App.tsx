import { useState } from 'react';
import { CheckCircle2, Lock, Flame, Zap, Target, Shield, Clock, ChevronRight, Crown, Brain, Heart, MessageCircle, Calendar, Star, X } from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const paymentLink = "https://pay.hotmart.com/W105482080M";

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 px-4 py-2 rounded-full mb-8 animate-pulse">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-red-400 text-sm font-semibold tracking-wide">CONTEÚDO EXCLUSIVO • ACESSO PODE SAIR DO AR</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-amber-300 bg-clip-text text-transparent">
                Você não foi rejeitado...
              </span>
              <br />
              <span className="text-white">
                Só nunca aprendeu o jogo.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              O manual que ninguém te ensinou sobre <span className="text-red-500 font-bold">atração real</span>, 
              <span className="text-amber-400 font-bold"> dominância social</span> e como 
              <span className="text-red-500 font-bold"> conquistar mulheres nota 8, 9 e 10</span>.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Desenvolva mentalidade de vencedor, domine a mente feminina e nunca mais seja ignorado por mulheres lindas.
            </p>

            {/* CTA Button */}
            <a
              href={paymentLink}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Crown className="w-6 h-6" />
              QUERO DOMINAR O JOGO AGORA
              <ChevronRight className={`w-6 h-6 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
            </a>

            <p className="text-sm text-gray-500 mt-4">
              <Lock className="w-4 h-4 inline mr-1" />
              Acesso imediato • Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-red-950/30 to-amber-950/30 border-y border-red-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-red-500 mb-2">6</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Capítulos Práticos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Método Direto</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-red-500 mb-2">7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Dias de Garantia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-400 mb-2">24h</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Acesso Imediato</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Crença */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-red-500">Por que você não consegue</span><br />
                conquistar mulheres de alto valor?
              </h2>
              <p className="text-xl text-gray-400">
                Não é culpa sua. Você nunca aprendeu as regras do jogo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Erro #1</h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold">Ser "bonzinho" demais</span> e achar que ser gentil é suficiente para gerar atração.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Erro #2</h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold">Achar que beleza é tudo</span> e se sabotar antes mesmo de tentar.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Erro #3</h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold">Não saber conduzir</span> uma interação e perder oportunidades por insegurança.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-950/20 to-red-950/20 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="text-lg text-gray-200">
                <span className="text-amber-400 font-bold">A verdade é:</span> O problema não é você. 
                É a <span className="font-bold text-white">falta de conhecimento estratégico</span> sobre como a atração realmente funciona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/50 px-4 py-2 rounded-full mb-6">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide">APRESENTANDO</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                  Manual da Dominância
                </span>
              </h2>
              
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                O guia definitivo para conquistar sua melhor versão e dominar o jogo da atração
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Direto ao Ponto</h3>
                <p className="text-gray-400 text-sm">Sem enrolação. Só estratégias que funcionam.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Baseado em Psicologia</h3>
                <p className="text-gray-400 text-sm">Comportamento, emoção e prática real.</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Atalho Comprovado</h3>
                <p className="text-gray-400 text-sm">Aprenda em horas o que levaria anos.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={paymentLink}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-10 py-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-amber-600/30"
              >
                <Crown className="w-6 h-6" />
                QUERO DOMINAR O JOGO AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                O que você vai aprender no<br />
                <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                  Manual da Dominância
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                6 capítulos estratégicos que vão transformar seu jogo completamente
              </p>
            </div>

            <div className="space-y-6">
              {/* Capítulo 1 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 1</span>
                      <h3 className="text-2xl font-bold">A Sua Mente</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como <span className="text-white font-semibold">reprogramar suas crenças limitantes</span> e desenvolver mentalidade de vencedor</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Desenvolver <span className="text-white font-semibold">confiança real e sólida</span> que se reflete em tudo que você faz</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Eliminar as <span className="text-white font-semibold">inseguranças invisíveis</span> que te sabotam sem você perceber</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Capítulo 2 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 2</span>
                      <h3 className="text-2xl font-bold">Como as Mulheres Funcionam</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300"><span className="text-white font-semibold">Entender o comportamento feminino</span> de forma estratégica e sem julgamentos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Saber <span className="text-white font-semibold">exatamente como agir</span> em cada situação e momento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Dominar a <span className="text-white font-semibold">mente feminina</span> e nunca mais ser surpreendido</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Capítulo 3 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 3</span>
                      <h3 className="text-2xl font-bold">Atração</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como <span className="text-white font-semibold">gerar interesse sem esforço</span> e de forma natural</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Desenvolver <span className="text-white font-semibold">linguagem corporal dominante</span> que atrai atenção</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como <span className="text-white font-semibold">abordar sem parecer inseguro</span> ou necessitado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Capítulo 4 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 4</span>
                      <h3 className="text-2xl font-bold">Conexão de Alto Valor</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como criar <span className="text-white font-semibold">conversas envolventes e magnéticas</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Técnicas para <span className="text-white font-semibold">se destacar da maioria</span> dos homens</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300"><span className="text-white font-semibold">Gatilhos emocionais</span> que prendem a atenção dela</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Capítulo 5 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 5</span>
                      <h3 className="text-2xl font-bold">Sedução</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como <span className="text-white font-semibold">conduzir naturalmente</span> para algo mais íntimo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">O <span className="text-white font-semibold">passo a passo completo</span> da sedução estratégica</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como criar <span className="text-white font-semibold">tensão sexual</span> de forma natural</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Capítulo 6 */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-xl hover:border-red-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-red-500 bg-red-950/50 px-3 py-1 rounded-full">CAPÍTULO 6</span>
                      <h3 className="text-2xl font-bold">Encontros</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como agir no <span className="text-white font-semibold">primeiro encontro</span> com confiança total</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">O que <span className="text-white font-semibold">falar, fazer e evitar</span> para garantir sucesso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Como <span className="text-white font-semibold">manter o interesse depois</span> e criar conexão duradoura</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação Antes x Depois */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Sua <span className="text-red-500">Transformação</span> Começa Aqui
              </h2>
              <p className="text-xl text-gray-400">
                Veja a diferença que o conhecimento estratégico faz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Antes */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">ANTES</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sem confiança para abordar mulheres atraentes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sem direção e sempre perdido nas interações</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rejeições constantes e frustração acumulada</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ignorado por mulheres lindas (nota 8, 9 e 10)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Insegurança e medo de falhar</span>
                  </li>
                </ul>
              </div>

              {/* Depois */}
              <div className="bg-gradient-to-br from-amber-950/30 to-black border-2 border-amber-500 p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">DEPOIS</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Postura dominante</span> e confiança inabalável</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Controle total</span> das interações e situações</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Segurança e presença forte</span> em qualquer ambiente</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Atração de mulheres de alto valor</span> naturalmente</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Mentalidade de vencedor</span> em todas as áreas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href={paymentLink}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50"
              >
                <Crown className="w-6 h-6" />
                COMEÇAR MINHA TRANSFORMAÇÃO AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                O que os homens estão dizendo
              </h2>
              <p className="text-xl text-gray-400">
                Resultados reais de quem aplicou o método
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Minha confiança mudou completamente. Agora eu sei exatamente como agir e o que falar. As mulheres percebem essa mudança."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <div>
                    <div className="font-bold">Rafael M.</div>
                    <div className="text-sm text-gray-500">28 anos, SP</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Eu achava que nunca ia conseguir sair com mulheres realmente bonitas. Esse manual me mostrou que o problema era minha mentalidade."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <div className="font-bold">Lucas P.</div>
                    <div className="text-sm text-gray-500">25 anos, RJ</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Direto, sem enrolação. Exatamente o que eu precisava. Agora sei como conduzir uma conversa e criar atração de verdade."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div>
                    <div className="font-bold">Thiago S.</div>
                    <div className="text-sm text-gray-500">31 anos, MG</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Parei de ser ignorado. As técnicas de linguagem corporal e abordagem funcionam mesmo. Já saí com 2 mulheres incríveis esse mês."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-bold">Marcelo F.</div>
                    <div className="text-sm text-gray-500">27 anos, PR</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Finalmente entendi como as mulheres pensam. Isso mudou tudo. Agora eu domino o jogo e sei exatamente o que fazer."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <div>
                    <div className="font-bold">Vitor A.</div>
                    <div className="text-sm text-gray-500">29 anos, RS</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Melhor investimento que já fiz. Por menos de 30 reais aprendi mais do que em anos tentando sozinho. Recomendo demais!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <div className="font-bold">Gabriel L.</div>
                    <div className="text-sm text-gray-500">26 anos, BA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section id="cta-section" className="py-20 bg-gradient-to-b from-black to-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/40 to-black border-2 border-red-600/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 px-4 py-2 rounded-full mb-6 animate-pulse">
                    <Flame className="w-4 h-4 text-red-500" />
                    <span className="text-red-400 text-sm font-semibold tracking-wide">OFERTA ESPECIAL</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Garanta Seu Acesso ao<br />
                    <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                      Manual da Dominância
                    </span>
                  </h2>
                </div>

                <div className="bg-black/50 border border-amber-600/30 rounded-xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="text-gray-400 text-lg mb-2">Acesso completo por apenas</div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-gray-500 text-2xl line-through">R$ 97,00</span>
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text">
                          R$ 29,90
                        </div>
                        <div className="text-gray-400 text-sm">à vista ou 12x de R$ 2,91</div>
                      </div>
                    </div>
                    <div className="inline-block bg-red-600/20 border border-red-600/50 px-4 py-2 rounded-full">
                      <span className="text-red-400 font-bold">70% DE DESCONTO</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-200">Acesso imediato e vitalício</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-200">Formato PDF prático</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-200">6 capítulos completos</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-200">Conteúdo direto e prático</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-950/30 to-red-950/30 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-amber-400 mb-2">Garantia Incondicional de 7 Dias</div>
                        <p className="text-gray-300 text-sm">
                          Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={paymentLink}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 mb-4"
                  >
                    <Crown className="w-6 h-6" />
                    QUERO ACESSAR O MANUAL AGORA
                    <ChevronRight className="w-6 h-6" />
                  </a>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    Pagamento 100% seguro e criptografado
                  </div>
                </div>

                <div className="bg-red-950/20 border border-red-600/30 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold">ATENÇÃO:</span>
                  </div>
                  <p className="text-gray-300">
                    Este conteúdo pode sair do ar a qualquer momento. Não divulgamos esse tipo de material publicamente por tempo indefinido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-400">
                Tire suas últimas dúvidas
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Como vou receber o Manual da Dominância?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Após a confirmação do pagamento, você receberá um email com o link para download do PDF. O acesso é imediato e você pode ler de qualquer dispositivo.
                </p>
              </details>

              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Funciona para qualquer idade?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Sim! Os princípios de atração, confiança e comunicação funcionam para homens de qualquer idade. O conteúdo é baseado em comportamento humano e psicologia.
                </p>
              </details>

              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>É só teoria ou tem conteúdo prático?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  100% prático. Nada de enrolação ou teorias vazias. Você vai aprender exatamente o que fazer, como fazer e quando fazer em cada situação.
                </p>
              </details>

              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>E se eu não gostar do conteúdo?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Você tem 7 dias de garantia incondicional. Se não gostar, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.
                </p>
              </details>

              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>O pagamento é seguro?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Totalmente seguro. Utilizamos plataforma criptografada e suas informações estão 100% protegidas. Aceitamos cartão de crédito e PIX.
                </p>
              </details>

              <details className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Por que o preço está tão baixo?</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Queremos que o máximo de homens tenha acesso a esse conhecimento. Preferimos vender mais barato e ajudar mais pessoas do que cobrar caro e limitar o acesso.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-black via-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Está pronto para<br />
              <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                dominar o jogo?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Você tem duas escolhas: continuar do jeito que está, ou investir em você mesmo e transformar sua vida com mulheres.
            </p>

            <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-600/30 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text mb-2">
                R$ 29,90
              </div>
              <div className="text-gray-400 mb-6">Investimento único • Acesso vitalício</div>
              
              <a
                href={paymentLink}
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 mb-4"
              >
                <Crown className="w-6 h-6" />
                QUERO ACESSAR O MANUAL AGORA
                <ChevronRight className="w-6 h-6" />
              </a>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  Pagamento Seguro
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Garantia 7 Dias
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Não perca essa oportunidade. O acesso pode ser removido a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">© 2024 Manual da Dominância. Todos os direitos reservados.</p>
            <p>Este produto não garante resultados. Os resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
