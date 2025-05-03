import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Web Development',
      technologies: ['React', 'Node.js','Express.js', 'MongoDB'],
      link: 'https://github.com/Anilkumar-2003/Shopping_frontend-',
      live: 'https://shopping-chatbot.vercel.app/',
    },
    {
      id: 2,
      title: 'Heart Disease Prediction Using Flask',
      description: 'Interactive dashboard for visualizing complex datasets with accuracy of 96%.',
      image: 'https://i.postimg.cc/hvpP4csp/Heart-Disease-Prediction-using-machine-learning-generate-a-image-into-size-of-1350-900-which-i.jpg',
      category: 'Data Science',
      technologies: ['Flask', 'Python', 'Machine Learning'],
      link: 'https://github.com/Anilkumar-2003/Heart-Disease-Prediction-',
      live: 'https://github.com/Anilkumar-2003/Heart-Disease-Prediction-',
    },
    {
      id: 3,
      title: 'Smart Employee Management System',
      description: 'A CRUD application for managing employee data in a company.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Express.js','MYSQL'],
      link: 'https://github.com/Anilkumar-2003/Smart-Employee-Management_React-Node.js-MySQL',
      live: 'https://smart-employee-management.vercel.app/home',
    },
    {
      id: 4,
      title: 'Hepatitis Detection via Deep Learning',
      description: 'Developed a deep learning model to detect hepatitis virus infection from liver biopsy images, enhancing diagnostic accuracy through automated image analysis.',
      image: 'https://i.postimg.cc/MHspDqhg/DETECTION-OF-HEPATITIS-VIRUS-INFECTION-ON-LIVER-BIOPSY-IMAGE-USING-DEEP-LEARNING-2.png',
      category: 'Data Science',
      technologies: ['Deep Learning','React', 'Node.js', 'Express.js'],
      link: 'https://github.com/Anilkumar-2003/Liver_disease_detection_using_DEEPLEARNING',
      live: 'https://drive.google.com/file/d/1F1lgqRDLfnfklfeE1y1TFLhBvET4KY0v/view?usp=sharing',
    },
     {
      id: 5,
      title: 'Annual-Sports-Application',
      description: 'Organized and managed annual sports event registration using Google Forms for database and ReactJS for frontend development.',
      image: 'https://i.postimg.cc/Jn2w2BbW/develop-a-poster-College-Annual-Sports-Application-for-registration-in-size-16-9-like-thumbnil.jpg',
      category: 'Web Development',
      technologies: ['Google Forms','React', 'Node.js', 'Express.js'],
      link: 'https://github.com/Anilkumar-2003/Annual-Sports-Application',
      live: 'https://annual-sports-application.vercel.app/',
    },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 projects-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
