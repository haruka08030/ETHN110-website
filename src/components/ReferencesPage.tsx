import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { BookOpen, GraduationCap, Library } from 'lucide-react';

const references = [
  {
    citation: "Boggs, G. L. (2012). The living for change: An autobiography. University of Minnesota Press.",
    author: 'Grace Lee Boggs',
    year: '2012',
    topic: 'Community Organizing & Everyday Revolution',
    description: 'Chronicles decades of activism emphasizing that revolutionary change begins with personal transformation and everyday acts of resistance. Inspires grassroots approaches to social justice.'
  },
  {
    citation: "Khalidi, R. (2020). The hundred years' war on Palestine: A history of settler colonialism and resistance, 1917–2017. Metropolitan Books.",
    author: 'Rashid Khalidi',
    year: '2020',
    topic: 'Narrative Control & Representation',
    description: 'Comprehensive history showing how control of narratives determines whose stories are legitimized. Illuminates the politics of representation and power of reclaiming silenced histories.'
  },
  {
    citation: "Kochiyama, Y. (2004). Passing it on: A memoir. UCLA Asian American Studies Center Press.",
    author: 'Yuri Kochiyama',
    year: '2004',
    topic: 'Cross-Racial Solidarity & Activism',
    description: 'Details evolution from internment camp survivor to lifelong activist building coalitions across communities of color. Emphasizes solidarity, listening, and collective struggle as essential to liberation.'
  },
  {
    citation: "Maira, S. (2016). The cultural politics of emotion in Asian American youth culture. In J. Lee & M. Zhou (Eds.), Asian American youth: Culture, identity, and ethnicity (pp. 85-102). Routledge.",
    author: 'Sunaina Maira',
    year: '2016',
    topic: 'Youth Identity & Cultural Politics',
    description: 'Examines how Asian American youth navigate cultural identity through everyday practices including food. Analyzes emotional labor of code-switching and psychological impact of assimilation pressure.'
  },
  {
    citation: "Said, E. W. (1978). Orientalism. Pantheon Books.",
    author: 'Edward Said',
    year: '1978',
    topic: 'Orientalism & Power/Knowledge',
    description: 'Groundbreaking analysis of how Western societies construct the "Orient" as exotic and inferior, justifying domination through cultural representation. Provides essential tools for understanding power through knowledge production.'
  },
  {
    citation: "Takaki, R. (1989). Strangers from a different shore: A history of Asian Americans. Little, Brown and Company.",
    author: 'Ronald Takaki',
    year: '1989',
    topic: 'Immigration History & Assimilation',
    description: 'Foundational history documenting experiences of Asian immigrants, tracing patterns of exclusion, exploitation, and resilience. Illuminates how assimilation pressure and racialization shaped Asian American identity.'
  }
];

export function ReferencesPage() {
  return (
    <div className="w-full bg-red-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-red-900/50 to-orange-900/50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50 text-xl">
              Academic References
            </div>
            <h2 className="text-white mb-4 drop-shadow-2xl text-4xl md:text-5xl">References</h2>
          </motion.div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-gradient-to-b from-red-950 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-12 text-white"
          >
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 flex-shrink-0">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-white mb-4 text-3xl md:text-4xl">How to Use These References</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Each reference includes descriptions and key topics. If you're writing a research paper or presentation on food culture, identity, or assimilation, these sources provide essential scholarly frameworks. Check your library or online databases for access.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-1 border border-orange-700/50 shadow-2xl">
                  <div className="bg-red-950 p-8 md:p-10">
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Icon & Info */}
                      <div className="md:col-span-1">
                        <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 inline-block mb-4">
                          <Library className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-white mb-1">{ref.author}</h4>
                        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-none mb-4 inline-block px-4 py-1">
                          {ref.year}
                        </div>
                        <div className="mt-4">
                          <p className="text-white/90 text-sm">{ref.topic}</p>
                        </div>
                      </div>

                      {/* Citation & Description */}
                      <div className="md:col-span-3 space-y-4">
                        <div className="bg-red-900/50 p-6">
                          <p className="text-white/90 text-lg leading-relaxed">
                            {ref.citation}
                          </p>
                        </div>

                        <p className="text-white/80 leading-relaxed">
                          {ref.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-white mb-4 text-3xl md:text-4xl">Additional Resources</h3>
            <p className="text-orange-200 text-xl md:text-2xl">
              For deeper learning and exploration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Ethnic Studies Centers',
                desc: 'Connect with university centers offering research, events, and community resources'
              },
              {
                title: 'Oral History Projects',
                desc: 'Explore archives documenting immigrant experiences and firsthand narratives'
              },
              {
                title: 'Contemporary Writing',
                desc: 'Authors like Ocean Vuong, Jhumpa Lahiri write about food and belonging'
              },
              {
                title: 'Documentaries',
                desc: 'Films exploring food politics, cultural identity, and globalization'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 border-l-4 border-orange-600 p-6 h-full">
                  <h4 className="text-white mb-3">{resource.title}</h4>
                  <p className="text-white/70 text-sm">{resource.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4 text-3xl md:text-4xl">Continue Your Learning Journey</h3>
            <p className="text-orange-200 text-xl md:text-2xl">
              From reading to action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Check out one book', desc: 'Start with one source' },
              { text: 'Form a reading group', desc: 'Learn with others' },
              { text: 'Share insights', desc: 'Build collective knowledge' }
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/50 to-red-800/50 border-l-4 border-orange-600 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-2 h-2 flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-white text-lg mb-1">{action.text}</p>
                    <p className="text-orange-200">{action.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
