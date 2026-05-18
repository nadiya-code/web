import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CourseCard from '@/components/CourseCard.jsx';
import { motion } from 'framer-motion';

function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'AI & Machine Learning',
    'Digital Marketing',
    'Data Science',
    'Communication Skills'
  ];

  const courses = [
    {
      id: 1,
      title: 'Full stack web development',
      category: 'Web Development',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Master React, Node.js, and modern web technologies to build production-ready applications'
    },
    {
      id: 2,
      title: 'Frontend development with React',
      category: 'Web Development',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn React fundamentals, hooks, state management, and build interactive user interfaces'
    },
    {
      id: 3,
      title: 'Backend development with Node.js',
      category: 'Web Development',
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Build scalable APIs, work with databases, and deploy production-ready backend systems'
    },
    {
      id: 4,
      title: 'AI & machine learning fundamentals',
      category: 'AI & Machine Learning',
      duration: '10 weeks',
      level: 'Beginner',
      description: 'Learn Python, TensorFlow, and core ML concepts to start your AI journey'
    },
    {
      id: 5,
      title: 'Deep learning with neural networks',
      category: 'AI & Machine Learning',
      duration: '14 weeks',
      level: 'Advanced',
      description: 'Master CNNs, RNNs, and transformers for computer vision and NLP applications'
    },
    {
      id: 6,
      title: 'Natural language processing',
      category: 'AI & Machine Learning',
      duration: '12 weeks',
      level: 'Advanced',
      description: 'Build chatbots, sentiment analysis tools, and language models using modern NLP techniques'
    },
    {
      id: 7,
      title: 'Digital marketing mastery',
      category: 'Digital Marketing',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Master SEO, social media marketing, and analytics to grow your online presence'
    },
    {
      id: 8,
      title: 'Social media marketing strategy',
      category: 'Digital Marketing',
      duration: '6 weeks',
      level: 'Beginner',
      description: 'Create engaging content, run ad campaigns, and build a loyal following across platforms'
    },
    {
      id: 9,
      title: 'SEO and content marketing',
      category: 'Digital Marketing',
      duration: '7 weeks',
      level: 'Intermediate',
      description: 'Optimize websites for search engines and create content that drives organic traffic'
    },
    {
      id: 10,
      title: 'Data science with Python',
      category: 'Data Science',
      duration: '14 weeks',
      level: 'Advanced',
      description: 'Deep dive into data analysis, visualization, and predictive modeling'
    },
    {
      id: 11,
      title: 'Data analysis fundamentals',
      category: 'Data Science',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn SQL, Excel, and basic statistics to analyze and interpret data effectively'
    },
    {
      id: 12,
      title: 'Business intelligence with Tableau',
      category: 'Data Science',
      duration: '6 weeks',
      level: 'Intermediate',
      description: 'Create interactive dashboards and data visualizations for business insights'
    },
    {
      id: 13,
      title: 'Effective business communication',
      category: 'Communication Skills',
      duration: '4 weeks',
      level: 'Beginner',
      description: 'Improve your professional writing, presentation, and interpersonal communication skills'
    },
    {
      id: 14,
      title: 'Public speaking and presentation',
      category: 'Communication Skills',
      duration: '5 weeks',
      level: 'Intermediate',
      description: 'Overcome stage fright and deliver compelling presentations with confidence'
    },
    {
      id: 15,
      title: 'Technical writing essentials',
      category: 'Communication Skills',
      duration: '6 weeks',
      level: 'Intermediate',
      description: 'Write clear documentation, reports, and technical content for diverse audiences'
    }
  ];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>{`Courses | EduNova`}</title>
        <meta name="description" content="Browse our comprehensive catalog of courses in web development, AI, data science, digital marketing, and communication skills." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Explore our courses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose from our wide range of courses designed to help you achieve your career goals
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No courses found in this category</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default CoursesPage;