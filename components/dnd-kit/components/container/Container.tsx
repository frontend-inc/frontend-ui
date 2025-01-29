import React, {forwardRef, useLayoutEffect, useEffect, useRef, useState } from 'react'
import { cn } from '@nextui-org/react'
import {Handle, Remove} from '../item/components';
import styles from './Container.module.css';
import { ResizableBox } from 'react-resizable'
import { useMediaQuery } from 'react-responsive';

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  className?: string;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      width: initialWidth = 320,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      className,
      ...props
    }: Props,
    ref
  ) => {

        
    const Component = onClick ? 'button' : 'div';

    const isMobile = useMediaQuery({ maxWidth: 760 })
    
    const [width, setWidth] = useState(initialWidth);
    const [mobileWidth, setMobileWidth] = useState(760);
    const handleResize = (ev, { size, node }) => {   
      setWidth(size.width)
    }

    useLayoutEffect(() => {
      setMobileWidth(window.innerWidth - 20)
    }, [])
    
    return (    
      <Component
        {...props}
        ref={ref}
        style={
          {
            ...style,
            width: isMobile ? '100%' : `${width}px`,
          } as React.CSSProperties
        }
        className={cn(
          styles.Container,
          unstyled && styles.unstyled,
          horizontal && styles.horizontal,
          hover && styles.hover,
          placeholder && styles.placeholder,
          scrollable && styles.scrollable,
          shadow && styles.shadow,
          'w-full h-full col-span-1 border-2 border-dashed border-gray-300',
          className
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
      <ResizableBox 
        onResize={ handleResize }
        onResizeStart={(params) => console.log('resize start', params)} 
        onResizeStop={(params) => console.log('resize stop', params)} 
        axis="x"
        resizeHandles={['se']}
        width={ isMobile ? mobileWidth : width}
        minConstraints={[100, 100]}  
        draggableOpts={[20,20]}
        className='w-full h-full max-w-full transition-all duration-300'      
      >
        {label ? (
          <div className={styles.Header}>
            {label}
            <div className={styles.Actions}>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </div>
          </div>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </ResizableBox>
    </Component>
    );
  }
);