import React from 'react';
import { cn } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  speed?: number; // Added speed prop to control animation duration
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 40, // Default speed in seconds
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'flex-row': !vertical,
              'flex-col': vertical,
            })}
            initial={{
              x: vertical ? 0 : reverse ? '-100%' : '100%',
              y: vertical ? (reverse ? '-100%' : '100%') : 0,
            }}
            animate={{
              x: vertical ? 0 : reverse ? '100%' : '-100%',
              y: vertical ? (reverse ? '100%' : '-100%') : 0,
            }}
            transition={{
              duration: speed, // Adjusted to slow down animation
              repeat: Infinity,
              ease: 'linear',
            }}            
          >
            {children}
          </motion.div>
        ))}
    </div>
  );
}
