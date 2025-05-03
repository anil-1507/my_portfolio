import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Globe2 } from 'lucide-react';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-600" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    },
    {
      icon: <Globe2 className="w-8 h-8 text-pink-500" />,
      title: 'Full Stack',
      description: 'End-to-end development from database design to frontend implementation.',
    },
  ];

  return (
    <section id="about" className="py-20 about-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer focused on creating impactful digital solutions
            that combine beautiful design with efficient functionality.
            I love exploring new technologies and continuously improving my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;