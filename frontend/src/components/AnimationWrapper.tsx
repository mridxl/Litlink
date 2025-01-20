import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

// Extract prop types from motion.div
type MotionDivProps = React.ComponentProps<typeof motion.div>;

type Props = {
  children: React.ReactNode;
  initial?: MotionDivProps['initial'];
  animate?: MotionDivProps['animate'];
  transition?: MotionDivProps['transition'];
  keyvalue?: string;
  className?: string;
};

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.6 },
  keyvalue,
  className,
}: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyvalue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
