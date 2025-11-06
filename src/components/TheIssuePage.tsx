import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export function TheIssuePage() {
  const issues = [
    {
      title: 'Assimilation Pressure',
      description: 'The expectation that immigrants abandon their native languages, customs, and foods to adopt dominant culture norms. When children feel ashamed of their lunch, they internalize the message that survival requires becoming "less ethnic."',
      quote: '"For many Asian Americans, the path to acceptance seemed to require a shedding of their own culture, including the foods that connected them to family and memory."',
      author: 'Ronald Takaki (1989)',
      icon: TrendingDown
    },
    {
      title: 'Xenophobia',
      description: 'The fear or hatred of foreigners and foreign cultures. Comments like "That smells weird" are coded expressions of xenophobic anxiety, transforming a lunchbox into a symbol of foreignness that must be policed.',
      quote: '"Xenophobia transforms everyday acts of eating into sites of surveillance and exclusion."',
      author: 'Grace Lee Boggs (2012)',
      icon: AlertCircle
    },
    {
      title: 'Orientalism',
      description: 'How Western culture constructs non-Western cultures as exotic and inferior. This allows dominant culture to simultaneously exoticize and denigrate minority cuisines—celebrating ethnic restaurants while mocking the same foods at school.',
      quote: '"Orientalism is not just about misrepresentation—it is about power and the right to define what is normal."',
      author: 'Edward Said (1978)',
      icon: Users
    }
  ];

  const foodImages = [
    'https://images.unsplash.com/photo-1548285181-3103ce5d3db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN1c2hpJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYyMzA1NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1730711524904-679bb6f02e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGltJTIwc3VtJTIwZm9vZHxlbnwxfHx8fDE3NjIzMDU1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMHJpY2V8ZW58MXx8fHwxNzYyMzA1NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1558920558-fb0345e52561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBraW1jaGklMjBmb29kfGVufDF8fHx8MTc2MjI2NDAyOXww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="w-full bg-red-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {foodImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <ImageWithFallback
                src={img}
                alt="Cultural food"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 via-red-950/80 to-red-950" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50 text-xl">
              Understanding the Issue
            </div>
            <h2 className="text-white mb-4 drop-shadow-2xl text-4xl md:text-5xl">The Issue: Lunchbox Shame</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Why do students feel ashamed of their cultural foods?
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-gradient-to-b from-red-950 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759923593745-6302b220d719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBob21lJTIwY29va2luZ3xlbnwxfHx8fDE3NjIzMDQxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Traditional home-cooked meal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-xl italic leading-relaxed">
                    Home-cooked meals carry cultural memory, yet many students learn to hide them in public spaces
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block px-4 py-1.5 bg-red-600 text-white text-xl">Definition</div>
              <h3 className="text-white mb-6 text-3xl md:text-4xl">What Is Lunchbox Shame?</h3>
              <p className="text-white/80 text-xl mb-6 leading-relaxed">
                <span className="text-orange-400">Lunchbox shame</span> describes the embarrassment immigrant and minority children feel when eating traditional foods from their cultures in predominantly white or mainstream settings. This phenomenon emerges when students face mockery, disgust, or ostracism for bringing foods that smell different, look unfamiliar, or don't match the standardized American lunch (Maira, 2016, p. 87).
              </p>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                The shame is not about the food itself but about being marked as <span className="text-orange-400">"other"</span>—someone who doesn't belong. Children may refuse their parents' lovingly prepared meals, beg for Lunchables instead, or eat quickly and quietly to avoid attention.
              </p>
              
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-6 text-white shadow-xl">
                <p className="text-lg italic mb-3 leading-relaxed">
                  "For many Asian Americans, the path to acceptance seemed to require a shedding of their own culture, including the foods that connected them to family and memory."
                </p>
                <p className="text-orange-400">— Ronald Takaki (1989, p. 114)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Root Forces */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 text-3xl md:text-4xl">The Three Root Forces</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Forces that shape how minority cultures are perceived
            </p>
          </motion.div>

          <div className="space-y-12">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative overflow-hidden ${
                  index % 2 === 0 ? '' : 'md:ml-auto'
                } max-w-5xl`}
              >
                <div className="border-l-4 border-orange-600 bg-slate-900/50 p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 shadow-lg flex-shrink-0">
                      <issue.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-4">{issue.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-6 text-white">
                    <p className="text-lg italic mb-3 leading-relaxed">
                      {issue.quote}
                    </p>
                    <p className="text-orange-400">— {issue.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block px-4 py-1.5 bg-orange-600 text-white">Impact</div>
              <h3 className="text-white mb-6">Why Lunchbox Shame Matters</h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Lunchbox shame is not a trivial childhood embarrassment—it is a manifestation of <span className="text-orange-400">systemic inequality</span>. When students learn to hide their cultural foods, they also learn to hide their languages, suppress their accents, and minimize their identities.
              </p>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                This internalized shame can follow people into adulthood, affecting self-esteem, family relationships, and community ties. Understanding lunchbox shame helps us see how power operates through everyday interactions, and how reclaiming cultural practices can be a form of resistance (Kochiyama, 2004, p. 134).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { title: 'Identity Loss', description: 'Rejection of cultural foods symbolizes deeper rejection of heritage and identity' },
                { title: 'Family Strain', description: 'Distance grows between children and parents over cultural practices' },
                { title: 'Community Disconnection', description: 'Loss of connection to cultural community and traditions' },
                { title: 'Lasting Impact', description: 'Internalized shame affecting self-esteem into adulthood' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-l-4 border-orange-600"
                >
                  <h4 className="text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Checklist */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4">What You Can Do</h3>
            <p className="text-slate-300 text-xl">Small actions create big change</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Notice how you react to unfamiliar foods—challenge your biases',
              'Learn about the cultural significance of different foods',
              'Speak up when you witness food-based mockery',
              'Ask respectful questions with genuine curiosity'
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 border border-orange-700/50 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 w-2 h-2 flex-shrink-0 mt-2" />
                  <p className="text-slate-200 text-lg">{action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
