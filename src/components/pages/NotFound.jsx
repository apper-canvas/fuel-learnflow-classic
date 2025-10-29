import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <ApperIcon 
            name="AlertCircle" 
            size={80} 
            className="mx-auto text-primary mb-4"
          />
        </motion.div>

        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button
          onClick={() => navigate('/courses')}
          className="bg-gradient-to-r from-primary to-purple-700 text-white hover:shadow-lg transition-all"
        >
          <ApperIcon name="Home" size={18} className="mr-2" />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;