
import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetClose,
  SheetFooter,
  SheetDescription 
} from '../../shadcn/ui/sheet';
import { Button } from '../../shadcn/ui/button';
import { cn } from '../../shadcn/lib/utils';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, title, description, children }) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          { title && (
            <SheetTitle>{title}</SheetTitle>
          )}
          { description && (
          <SheetDescription>
            {description}
          </SheetDescription>
          )}
        </SheetHeader>
        <div className="grid gap-4 py-4">
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
