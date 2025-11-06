import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { BookOpen, Globe, Lightbulb } from 'lucide-react';

const scholars = [
  {
    name: 'Ronald Takaki',
    year: '1989',
    book: 'Strangers from a Different Shore',
    concept: 'Immigration & Assimilation',
    quote: 'The immigrant\'s journey was not simply a geographical passage but a psychological one, marked by the tension between preserving cultural memory and adapting to hostile new environments.',
    description: 'Takaki traces how Asian immigrants faced exclusion laws, labor exploitation, and cultural denigration. He documents how Asian Americans were told their foods were incompatible with American identity.'
  },
  {
    name: 'Edward Said',
    year: '1978',
    book: 'Orientalism',
    concept: 'Power & Representation',
    quote: 'Orientalism is not just about misrepresentation—it is about power. By defining the "Orient" as mysterious and inferior, Western societies justify domination.',
    description: 'Said explains how Western culture constructs non-Western cultures as exotic and inferior. This framework allows simultaneous exoticization and denigration of minority cuisines.'
  },
  {
    name: 'Rashid Khalidi',
    year: '2020',
    book: 'The Hundred Years\' War on Palestine',
    concept: 'Narrative Control',
    quote: 'The struggle over narratives determines whose lives are valued, whose histories are remembered, and whose futures are possible.',
    description: 'Khalidi shows that controlling narratives—deciding whose stories are legitimate—is central to maintaining inequality. When cultural foods are treated as "weird," entire identities are being othered.'
  },
  {
    name: 'Yuri Kochiyama',
    year: '2004',
    book: 'Passing It On',
    concept: 'Cross-Racial Solidarity',
    quote: 'Solidarity requires listening to and learning from others\' struggles, finding common ground without erasing differences.',
    description: 'Kochiyama\'s memoir chronicles her activism and coalition-building. Her work reminds us that resisting assimilation requires community support and cross-cultural solidarity.'
  },
  {
    name: 'Grace Lee Boggs',
    year: '2012',
    book: 'The Living for Change',
    concept: 'Everyday Revolution',
    quote: 'Revolution is not an event. It is a process of becoming more human by creating relationships of love, respect, and mutual recognition.',
    description: 'Boggs argues that revolution happens through everyday acts. A student eating their grandmother\'s biryani in the cafeteria is modeling a different way of being—one that refuses assimilation.'
  }
];

export function HistoryTheoryPage() {
  return (
    <div className="w-full bg-red-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzYyMzA0MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Books and scholarship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 via-red-950/80 to-red-950" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50 text-xl">
              Academic Framework
            </div>
            <h2 className="text-white mb-4 drop-shadow-2xl text-4xl md:text-5xl">History & Theory</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Understanding the roots of cultural oppression and resistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-red-950 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              To understand lunchbox shame, we must examine the <span className="text-orange-400">historical forces</span> that have shaped how immigrant and minority communities are perceived, and the <span className="text-orange-400">theoretical frameworks</span> that help us analyze power, culture, and resistance.
            </p>
            <p className="text-white/60 italic text-lg">
              Scholarship provides the tools to understand systemic oppression and envision pathways to liberation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scholars Section */}
      <section className="py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Five Scholars, Five Frameworks</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Essential voices for understanding cultural oppression and resistance
            </p>
          </motion.div>

          <div className="space-y-12">
            {scholars.map((scholar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${index % 2 === 1 ? 'md:ml-auto' : ''} max-w-5xl`}
              >
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-1 border border-orange-700/50 shadow-2xl">
                  <div className="bg-red-950 p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Scholar Info */}
                      <div className="md:col-span-1">
                        <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 shadow-lg inline-block mb-4">
                          <BookOpen className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-white mb-2">{scholar.name}</h3>
                        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-none mb-4 inline-block px-4 py-1">
                          {scholar.year}
                        </div>
                        <p className="text-white/90 italic mb-4">{scholar.book}</p>
                        <div className="mt-4">
                          <div className="inline-block bg-gradient-to-r from-red-900/50 to-orange-900/50 px-4 py-2 text-orange-300 border border-orange-700/50">
                            {scholar.concept}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 space-y-6">
                        <p className="text-white/80 text-lg leading-relaxed">
                          {scholar.description}
                        </p>

                        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-6 text-white shadow-xl">
                          <div className="flex items-start gap-4">
                            <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                              <Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-lg italic leading-relaxed mb-3">
                                "{scholar.quote}"
                              </p>
                              <p className="text-white/90">— {scholar.name} ({scholar.year})</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block px-4 py-1.5 bg-red-600 text-white">Historical Context</div>
              <h3 className="text-white mb-6">The Lunchbox as Battleground</h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Children became the frontline of cultural negotiation. Schools functioned as sites of assimilation, teaching immigrant children to speak English, salute the flag, and eat "American" food.
              </p>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                The <span className="text-orange-400">lunchbox became a test</span>: Would children embrace their heritage or conform to dominant norms? The shame many felt when lunches were ridiculed reflected the broader violence of forced assimilation (Takaki, 1989, p. 298).
              </p>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-6 text-white">
                <Globe className="w-8 h-8 mb-3 text-orange-400" />
                <p className="leading-relaxed">
                  Even when adopting American customs, physical appearance marked racialized immigrants as "other"—never fully American, always foreign.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Exclusion Laws', desc: 'Legal barriers to immigration' },
                { title: 'Labor Exploitation', desc: 'Economic marginalization' },
                { title: 'Cultural Denigration', desc: 'Food marked as inferior' },
                { title: 'Identity Policing', desc: 'Pressure to assimilate' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-6 border-l-4 border-orange-600"
                >
                  <h4 className="text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Synthesis */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4 text-3xl md:text-4xl">Bringing It Together</h3>
            <p className="text-orange-200 text-xl md:text-2xl">A roadmap for understanding and change</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-orange-700/50 p-12 shadow-2xl"
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white mb-2">Takaki</h4>
                  <p className="text-orange-200">Historical context</p>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white mb-2">Said & Khalidi</h4>
                  <p className="text-orange-200">Analyzing power</p>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white mb-2">Kochiyama & Boggs</h4>
                  <p className="text-orange-200">Resistance & action</p>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-orange-700/50">
                <p className="text-white text-lg leading-relaxed">
                  By connecting personal experiences to these larger frameworks, we see that <span className="text-orange-400">overcoming lunchbox shame requires collective struggle</span> to dismantle the systems that produce shame in the first place.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-20 bg-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4 text-3xl md:text-4xl">Deepen Your Understanding</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Read one of the books cited on this page',
              'Form a reading group with classmates',
              'Connect personal stories to historical contexts',
              'Recognize cultural pride as resistance',
              'Build coalitions across communities'
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-red-900/50 to-red-800/50 p-6 border-l-4 border-orange-600"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-2 h-2 flex-shrink-0 mt-2" />
                  <p className="text-white text-lg">{action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
