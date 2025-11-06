import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

const cuisines = [
  {
    name: 'Japanese',
    image: 'https://images.unsplash.com/photo-1575201376421-87869eae3338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGJlbnRvJTIwYm94fGVufDF8fHx8MTc2MjMxMzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Sushi, Ramen, Bento'
  },
  {
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1595424265370-3e02d3e6c10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBkdW1wbGluZ3N8ZW58MXx8fHwxNzYyMzEzNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Dim Sum, Dumplings, Fried Rice'
  },
  {
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMHRoYWxpfGVufDF8fHx8MTc2MjMxMzc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Curry, Biryani, Naan'
  },
  {
    name: 'Korean',
    image: 'https://images.unsplash.com/photo-1584278858536-52532423b9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaWJpbWJhcCUyMGJvd2x8ZW58MXx8fHwxNzYyMjg1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Kimchi, Bulgogi, Bibimbap'
  },
  {
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1579630941962-435bc3e43df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBhdXRoZW50aWN8ZW58MXx8fHwxNzYyMzEzNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Tacos, Enchiladas, Mole'
  },
  {
    name: 'Middle Eastern',
    image: 'https://images.unsplash.com/photo-1587599305773-6a016c595a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1tdXMlMjBmYWxhZmVsJTIwcGxhdGV8ZW58MXx8fHwxNzYyMzEzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Hummus, Falafel, Kebab'
  },
  {
    name: 'Vietnamese',
    image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bHxlbnwxfHx8fDE3NjIyNTYyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Pho, Banh Mi, Spring Rolls'
  },
  {
    name: 'Ethiopian',
    image: 'https://images.unsplash.com/photo-1631640964706-14fd7db00ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBpbmplcmElMjB3YXR8ZW58MXx8fHwxNzYyMzEzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    examples: 'Injera, Doro Wat, Kitfo'
  }
];

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background slideshow effect */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 grid-rows-2 h-full">
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: index * 0.5,
                  repeat: Infinity,
                  repeatDelay: cuisines.length * 0.5
                }}
              >
                <ImageWithFallback
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-red-950/80 to-red-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50">
              Connected Through Food Culture
            </div>
            <h2 className="text-white mb-6 drop-shadow-2xl text-5xl md:text-7xl">
              From Shame to Pride
            </h2>
            <p className="text-orange-200 mb-8 text-2xl md:text-3xl max-w-3xl mx-auto">
              Your lunchbox is your pride
            </p>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Your lunchbox is not something to hide—<br />
              it's a celebration of your culture, your family, and who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultural Foods Showcase */}
      <section className="py-20 bg-gradient-to-b from-red-950 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 text-4xl md:text-5xl">Celebrate Every Culture</h2>
            <p className="text-orange-200 text-2xl md:text-3xl max-w-3xl mx-auto">
              Every culture's food is beautiful and deserves to be celebrated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={cuisine.image}
                    alt={`${cuisine.name} cuisine`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="inline-block self-start px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white mb-3 shadow-lg">
                      {cuisine.name}
                    </div>
                    <p className="text-orange-200 text-lg">{cuisine.examples}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Issue Section */}
      <section className="py-20 bg-red-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block px-4 py-1.5 bg-red-600 text-white text-xl">The Problem</div>
              <h2 className="text-white mb-6 text-3xl md:text-4xl">What is Lunchbox Shame?</h2>
              <p className="text-white/80 text-xl mb-6 leading-relaxed">
                Have you ever felt embarrassed to open your lunch in public? Maybe classmates wrinkled their noses at your kimchi, curry, or fish sauce. This experience—<span className="text-orange-400">lunchbox shame</span>—affects countless students from immigrant and minority backgrounds.
              </p>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-8 text-white shadow-2xl">
                <p className="text-xl italic leading-relaxed mb-4">
                  "The lunchbox is a cultural battleground where immigrant children negotiate their identities between the foods of home and the pressure to conform."
                </p>
                <p className="text-orange-400">— Dr. Sunaina Maira (2016)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {cuisines.slice(0, 4).map((cuisine, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-xl"
                >
                  <ImageWithFallback
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold">{cuisine.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-red-950 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6 text-4xl md:text-5xl">Transform Shame into Pride</h2>
            <p className="text-slate-300 text-2xl md:text-3xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Through personal stories, historical context, and practical action steps, learn how to reclaim your cultural food traditions and build solidarity across communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-red-900/40 to-orange-900/40 text-orange-300 border border-orange-700/50">
                Understand the History
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-red-900/40 to-orange-900/40 text-orange-300 border border-orange-700/50">
                Read Real Stories
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-red-900/40 to-orange-900/40 text-orange-300 border border-orange-700/50">
                Take Campus Action
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-12 text-center"
          >
            <p className="text-slate-100 text-2xl md:text-3xl mb-6 italic leading-relaxed">
              "We are the leaders we've been looking for. Transform yourself to transform the world."
            </p>
            <p className="text-orange-400 text-xl">— Grace Lee Boggs</p>
            <p className="text-slate-400 mt-4 text-lg">Your courage inspires others. Your pride creates space for collective liberation.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
