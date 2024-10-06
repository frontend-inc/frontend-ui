import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetClose,
  SheetFooter,
  SheetDescription 
} from '../../shadcn/ui/sheet'
import { Button } from '../../shadcn/ui/button'
import { cn } from '../../shadcn/lib/utils'

type AnchorPosition = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  disablePadding?: boolean;
  anchor?: AnchorPosition;
}

const Drawer: React.FC<DrawerProps> = ({ 
  open, 
  onClose, 
  title, 
  description, 
  children, 
  disablePadding = false,
  anchor = 'right'
}) => {
  const contentClass = cn(
    'flex flex-col',
    {
      'p-0': disablePadding,
      'p-6': !disablePadding
    }
  );

  const childrenClass = cn(
    'flex-grow',
    {
      'py-4': !disablePadding
    }
  );

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side={anchor} className={contentClass}>
        {(title || description) && (
          <SheetHeader>
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        <div className={childrenClass}>
          {children}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { 
  Drawer
}