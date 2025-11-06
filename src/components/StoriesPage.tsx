import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stories = [
  {
    name: 'Priya',
    age: 20,
    background: 'South Asian American',
    food: 'Sambar & Idli',
    image: 'https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMHJpY2V8ZW58MXx8fHwxNzYyMzA1NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    story: 'In elementary school, Priya loved her mother\'s cooking—rice with sambar, idli, and spicy curries. But after classmates pinched their noses, she began leaving lunch uneaten. By middle school, she demanded only "American" food. Everything changed when she joined a South Asian student alliance in college. The group organized "Decolonize Your Plate," where Priya\'s sambar was a hit.',
    quote: 'Passing as "normal" required me to reject everything that connected me to my family. It was a form of violence against myself.',
    transformation: 'Today, Priya proudly eats her mother\'s cooking in the student center. She started a food blog documenting Tamil recipes. "I\'m not embarrassed anymore. I\'m angry—but also proud. My food is part of my resistance now."'
  },
  {
    name: 'Marcus',
    age: 19,
    background: 'White American',
    food: 'Becoming an Ally',
    image: 'https://images.unsplash.com/photo-1715808123833-eecb6547ef8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVhdGluZyUyMHRvZ2V0aGVyJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NjIzMDQxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    story: 'Marcus never thought about food as cultural until his roommate Hiro stopped eating in the dorm. Hiro was tired of people making faces at his bento boxes. Marcus realized he\'d been part of the problem—joking about "fishy smells" without considering impact. Determined to do better, he educated himself about microaggressions.',
    quote: 'I can\'t undo my past ignorance, but I can use my privilege to challenge the systems that make people like Hiro feel unwelcome.',
    transformation: 'Marcus now speaks up when students make ignorant comments. He organized a discussion group on food justice with Hiro. "Being an ally means more than being nice—it means actively disrupting the status quo." He advocates for diverse dining options on campus.'
  },
  {
    name: 'Amira',
    age: 21,
    background: 'Palestinian American',
    food: 'Za\'atar & Grape Leaves',
    image: 'https://images.unsplash.com/photo-1659275799237-cbc057d97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwZm9vZHxlbnwxfHx8fDE3NjIyMjIwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    story: 'Amira\'s family fled Palestine when she was seven. At school, her za\'atar sandwiches drew stares and taunts. Teachers mispronounced her name. Classmates asked if she was a terrorist. The Orientalist lens made Amira feel constantly surveilled and misunderstood. In college, she studied Rashid Khalidi\'s work on Palestinian narratives.',
    quote: 'They wanted to erase my Palestinian identity—to make me just "Arab" or just "American," never both, never whole.',
    transformation: 'Amira founded "Break Bread, Build Bridges," hosting monthly potlucks where students share dishes and discuss food politics. "When I make my grandmother\'s recipes and share them, I\'m saying: We exist. Our culture has value. You cannot erase us."'
  }
];

export function StoriesPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1715808123833-eecb6547ef8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVhdGluZyUyMHRvZ2V0aGVyJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NjIzMDQxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students eating together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50 text-xl">
              Real Stories
            </div>
            <h2 className="text-white mb-4 drop-shadow-2xl text-4xl md:text-5xl">From Shame to Pride</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Community and solidarity transform individual shame into collective pride
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg leading-relaxed"
          >
            These stories are composite narratives that illustrate journeys from cultural shame to cultural pride—transformations that require both <span className="text-orange-400">individual courage</span> and <span className="text-orange-400">community support</span> (Kochiyama, 2004, p. 127).
          </motion.p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-[500px] overflow-hidden">
                    <ImageWithFallback
                      src={story.image}
                      alt={`${story.food} - ${story.name}'s story`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-900/70 to-orange-900/70 text-orange-200 border-l-4 border-orange-600">
                        {story.food}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="mb-6">
                    <h3 className="text-white mb-2">{story.name}</h3>
                    <div className="text-slate-400">
                      {story.age} years old · {story.background}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/80 text-lg leading-relaxed">
                      {story.story}
                    </p>

                    {/* Quote */}
                    <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-6 text-white">
                      <p className="text-lg italic leading-relaxed mb-3">
                        "{story.quote}"
                      </p>
                      <p className="text-orange-400">— {story.name}</p>
                    </div>

                    {/* Transformation */}
                    <div className="bg-slate-700/50 p-6 border-l-4 border-orange-600">
                      <h4 className="text-orange-400 mb-3">Transformation</h4>
                      <p className="text-white/90 leading-relaxed">
                        {story.transformation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Common Threads */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 p-12 border-l-4 border-orange-600"
          >
            <h3 className="text-white mb-8 text-center">Common Threads</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Shame is External',
                  description: 'It stems from xenophobic reactions, not from anything wrong with the foods or cultures'
                },
                {
                  title: 'Community is Key',
                  description: 'Transformation requires community. We find strength through shared stories and solidarity'
                },
                {
                  title: 'Personal → Political',
                  description: 'Pride becomes political when we recognize systemic inequalities and work to change them'
                }
              ].map((thread, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-white mb-3">{thread.title}</h4>
                  <p className="text-white/70 leading-relaxed">{thread.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                Food becomes a site of <span className="text-orange-400">resistance</span>, <span className="text-orange-400">education</span>, and <span className="text-orange-400">collective healing</span> (Boggs, 2012, p. 65).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4">Share Your Story</h3>
            <p className="text-white/90 text-xl">Every story matters. Every voice counts.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Share your own food story—write it down or tell someone',
              'Listen to others\' experiences without judgment',
              'Find or create a community group for cultural celebration',
              'Use social media to showcase cultural foods with pride',
              'Amplify voices of those most affected'
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <p className="text-slate-800 text-lg">{action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
