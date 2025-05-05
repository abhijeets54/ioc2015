import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import juneImage from '../../src/assests/newsletter/june.png';
import julyImage from '../../src/assests/newsletter/july.jpeg';
import augustImage from '../../src/assests/newsletter/august.jpeg';
import OptimizedImage from '../components/common/OptimizedImage';
import AnimatedSectionHeader from '../components/common/AnimatedSectionHeader';
import AnimatedCard from '../components/common/AnimatedCard';
import AnimatedButton from '../components/common/AnimatedButton';

const NewsletterComponent = () => {
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    navigate(path);
  };

  // Newsletter data
  const newsletters = [
    {
      id: 1,
      image: juneImage,
      month: 'JUNE 2024',
      title: 'Usaari Free Evening School',
      excerpt: 'Discover how our evening school program is transforming lives through education...',
      path: '/newsletter/june-2024',
      delay: 0
    },
    {
      id: 2,
      image: julyImage,
      month: 'JULY 2024',
      title: 'Mann Mela 2024',
      excerpt: 'Our annual cultural festival brought together communities to celebrate diversity and heritage...',
      path: '/newsletter/july-2024',
      delay: 0.1
    },
    {
      id: 3,
      image: augustImage,
      month: 'AUGUST 2024',
      title: 'Coming Soon',
      excerpt: 'Our August newsletter will be released on 10th September. Stay tuned for more updates!',
      path: '/newsletter/august-2024',
      delay: 0.2
    }
  ];

  return (
    <motion.div 
      className="py-16 px-8 bg-gradient-to-b from-white to-orange-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSectionHeader 
          title="OUR NEWSLETTERS" 
          subtitle="Stay updated with our latest initiatives, success stories, and upcoming events"
          underlineColor="orange"
          centered
        />
        
        {/* Newsletter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsletters.map((newsletter) => (
            <AnimatedCard 
              key={newsletter.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
              delay={newsletter.delay}
              animationType="fade-up"
            >
              {/* Newsletter Image with Hover Effect */}
              <div className="relative overflow-hidden h-48">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <OptimizedImage 
                    className="w-full h-full object-cover" 
                    src={newsletter.image} 
                    alt={`${newsletter.month} Newsletter`} 
                  />
                </motion.div>
                
                {/* Month Badge */}
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-bold">
                  {newsletter.month}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-gray-800 mb-3">{newsletter.title}</h3>
                <p className="text-gray-600 text-base mb-4 flex-grow">{newsletter.excerpt}</p>
                
                <AnimatedButton
                  variant="text"
                  className="mt-auto self-start"
                  icon={<span className="ml-1">→</span>}
                  iconPosition="right"
                  onClick={() => handleReadMore(newsletter.path)}
                >
                  Read More
                </AnimatedButton>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <AnimatedButton
            variant="primary"
            size="large"
            onClick={() => handleReadMore('/newsletter')}
            className="px-8"
          >
            View All Newsletters
          </AnimatedButton>
        </div>
        
        {/* Newsletter Subscription Teaser */}
        <motion.div 
          className="mt-16 bg-orange-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">Get monthly updates on our projects and initiatives directly in your inbox.</p>
          </div>
          
          <AnimatedButton
            variant="primary"
            size="large"
            onClick={() => navigate('/subscribe')}
          >
            Subscribe Now
          </AnimatedButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsletterComponent;
