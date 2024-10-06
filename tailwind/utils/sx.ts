import { cn } from '../../shadcn/lib/utils';

type SxProp = Record<string, any>;

const sxTw = (sx: SxProp): string => {
  const tailwindClasses: string[] = [];

  const convertColor = (color: string): string => {
    const colorMap: Record<string, string> = {
      'primary.main': 'primary',
      'text.primary': 'primary',
      'text.secondary': 'muted-foreground',
      'divider': 'border-divider',
    };
    return colorMap[color] || color;
  };

  const convertSize = (size: string | number): string => {
    if (typeof size === 'number') {
      return `${size}`;
    }
    const sizeMap: Record<string, string> = {
      small: '2',
      medium: '4',
      large: '6',
    };
    return sizeMap[size] || size;
  };

  const convertFlexAlign = (value: string): string => {
    const alignMap: Record<string, string> = {
      'flex-start': 'start',
      'flex-end': 'end',
      'space-between': 'between',
      'space-around': 'around',
      'space-evenly': 'evenly',
    };
    return alignMap[value] || value;
  };

  const convertResponsiveValue = (key: string, value: any): string[] => {
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value).map(([breakpoint, val]) => {
        const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
        return `${prefix}${convertSingleValue(key, val)}`;
      });
    }
    return [convertSingleValue(key, value)];
  };

  const convertSingleValue = (key: string, value: any): string => {
    switch (key) {
      case 'bgcolor':
      case 'backgroundColor':
        return `bg-${convertColor(value)}`;
      case 'color':
        return `text-${convertColor(value)}`;
      case 'p':
      case 'padding':
        return `p-${convertSize(value)}`;
      case 'px':
      case 'paddingX':
        return `px-${convertSize(value)}`;
      case 'py':
      case 'paddingY':
        return `py-${convertSize(value)}`;
      case 'pt':
        return `pt-${convertSize(value)}`;
      case 'pb':
        return `pb-${convertSize(value)}`;
      case 'pr':
        return `pr-${convertSize(value)}`;
      case 'pl':
        return `pl-${convertSize(value)}`;
      case 'm':
      case 'margin':
        return `m-${convertSize(value)}`;
      case 'mx':
      case 'marginX':
        return `mx-${convertSize(value)}`;
      case 'my':
      case 'marginY':
        return `my-${convertSize(value)}`;
      case 'width':
        return `w-${convertSize(value)}`;
      case 'maxWidth':
        return `max-w-${convertSize(value)}`;
      case 'minWidth':
        return `min-w-${convertSize(value)}`;
      case 'height':
        return `h-${convertSize(value)}`;
      case 'maxHeight':
        return `max-h-${convertSize(value)}`;
      case 'minHeight':
        return `min-h-${convertSize(value)}`;
      case 'display':
        return value;
      case 'flexDirection':
        return `flex-${value}`;
      case 'flexWrap':
        return `flex-${value}`;
      case 'justifyContent':
        return `justify-${convertFlexAlign(value)}`;
      case 'alignItems':
        return `items-${convertFlexAlign(value)}`;
      case 'alignContent':
        return `content-${convertFlexAlign(value)}`;
      case 'alignSelf':
        return `self-${convertFlexAlign(value)}`;
      case 'flex':
        return value === 1 ? 'flex-1' : `flex-${value}`;
      case 'flexGrow':
        return `flex-grow-${value}`;
      case 'flexShrink':
        return `flex-shrink-${value}`;
      case 'gridTemplateColumns':
        return `grid-cols-${value}`;
      case 'gap':
        return `gap-${convertSize(value)}`;
      case 'border':
        return typeof value === 'number' ? `border-${value}` : 'border';
      case 'borderColor':
        return `border-${convertColor(value)}`;
      case 'borderRadius':
        return `rounded-${convertSize(value)}`;
      case 'borderRight':
        return `border-r-${convertSize(value)}`;
      case 'borderLeft':
        return `border-l-${convertSize(value)}`;
      case 'borderTop':
        return `border-t-${convertSize(value)}`;
      case 'borderBottom':
        return `border-b-${convertSize(value)}`;
      case 'zIndex':
        return `z-${value}`;
      case 'overflow':
        return `overflow-${value}`;
      default:
        return '';
    }
  };

  const processNestedSx = (nestedSx: SxProp) => {
    for (const [key, value] of Object.entries(nestedSx)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processNestedSx(value);
      } else {
        tailwindClasses.push(...convertResponsiveValue(key, value));
      }
    }
  };

  processNestedSx(sx);

  return cn(...tailwindClasses);
};

export {
  sxTw
}