import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { User, Users, Building, Rocket, Utensils, Calendar, BookText, Video } from 'lucide-react';

const actionLevels = [
  {
    level: 'Individual',
    icon: User,
    actions: [
      { title: 'Eat cultural foods publicly', desc: 'Pack your lunch with pride. Your visibility normalizes diversity.' },
      { title: 'Learn your food traditions', desc: 'Ask family about recipes and stories behind dishes.' },
      { title: 'Share your story', desc: 'Use social media, writing, or art to tell your experience.' },
      { title: 'Practice appreciation', desc: 'Learn about others\' food cultures with genuine respect.' }
    ]
  },
  {
    level: 'Classroom',
    icon: Users,
    actions: [
      { title: 'Organize food discussions', desc: 'Propose class sessions exploring food and identity.' },
      { title: 'Interrupt microaggressions', desc: 'Speak up when you hear disrespectful comments.' },
      { title: 'Integrate food justice', desc: 'Suggest readings examining food through power lens.' }
    ]
  },
  {
    level: 'Campus',
    icon: Building,
    actions: [
      { title: 'Advocate for diverse dining', desc: 'Meet with dining services for menu diversity.' },
      { title: 'Establish cultural events', desc: 'Create monthly potlucks and food festivals.' },
      { title: 'Launch campaigns', desc: 'Use media to challenge stereotypes.' }
    ]
  }
];

const eventIdeas = [
  {
    title: 'Monthly Cultural Potluck',
    description: 'Students bring homemade dishes and share cultural significance',
    elements: ['Themed by region', 'Storytelling circle', 'Recipe cards', 'Action planning']
  },
  {
    title: 'Recipe Zine Project',
    description: 'Compile student recipes with stories and cultural context',
    elements: ['Student submissions', 'Photography', 'Personal narratives', 'Campus distribution']
  },
  {
    title: '"Say My Dish Right"',
    description: 'Pronunciation guide for commonly mispronounced dishes',
    elements: ['Audio recordings', 'Visual guides', 'Dining hall displays', 'QR codes']
  },
  {
    title: 'Cooking Workshops',
    description: 'Community members teach traditional cooking techniques',
    elements: ['Intergenerational', 'Hands-on learning', 'Cultural exchange', 'Recipe sharing']
  }
];

export function TakeActionPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHRvZ2V0aGVyJTIwY29tbXVuaXR5JTIwYWN0aW9ufGVufDF8fHx8MTc2MjMwNDE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community action"
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
              Take Action
            </div>
            <h2 className="text-white mb-4 drop-shadow-2xl text-4xl md:text-5xl">From Awareness to Change</h2>
            <p className="text-orange-200 text-sm md:text-2xl">
              Awareness alone doesn't create change—action does (Boggs, 2012)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Levels */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Three Levels of Impact</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Individual → Classroom → Campus
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {actionLevels.map((level, levelIndex) => (
              <motion.div
                key={levelIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: levelIndex * 0.2 }}
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 border-l-4 border-orange-600 p-8 h-full">
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 p-3 inline-block mb-6">
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white mb-6">{level.level}</h3>

                  <div className="space-y-3">
                    {level.actions.map((action, actionIndex) => (
                      <div
                        key={actionIndex}
                        className="bg-slate-800/50 p-4 border-l-2 border-orange-600/50"
                      >
                        <h4 className="text-white mb-1">{action.title}</h4>
                        <p className="text-white/60 text-sm">{action.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Events */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-4 inline-block px-6 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-orange-300 border border-orange-700/50 text-xl">
              Event Ideas
            </div>
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Campus Events You Can Organize</h2>
            <p className="text-orange-200 text-2xl md:text-3xl">
              Concrete ways to build community and celebrate diversity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventIdeas.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 border-l-4 border-orange-600 p-8 h-full">
                  <h3 className="text-white mb-4">{event.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    {event.elements.map((element, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-600" />
                        <p className="text-white/70 text-sm">{element}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-l-4 border-orange-600 p-12 text-center"
          >
            <h3 className="text-white mb-6">You Have Power</h3>
            <p className="text-white text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Every action—no matter how small—contributes to cultural change. When you eat your lunch proudly, when you speak up, when you organize, you are dismantling systems of shame and building possibilities for belonging.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-white text-2xl italic mb-4">
                "Transform yourself to transform the world."
              </p>
              <p className="text-cyan-100 text-lg">— Grace Lee Boggs (2012, p. 77)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-white mb-4">Start Today</h3>
            <p className="text-white/80 text-xl">Choose one action and commit to it this week</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Choose one individual action',
              'Propose a class discussion',
              'Connect with a cultural org',
              'Draft an event proposal',
              'Meet with administrators',
              'Share your actions'
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 border-l-4 border-orange-600"
              >
                <p className="text-white">{action}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
