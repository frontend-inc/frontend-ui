import { GridStackOptions } from 'gridstack'

const CELL_HEIGHT = 32;
const BREAKPOINTS = [
  { c: 1, w: 700 },
  { c: 3, w: 850 },
  { c: 6, w: 950 },
  { c: 8, w: 1100 },
];

export function convertPageToGrid(json) {

  // Recursively process children
  function processChildren(children) {
    if(!Array.isArray(children)){
      return children
    }
    return children.map(child => {
      const { id, name, h, w, x, y, props, children: childChildren } = child;

      if (name == "Section") {
        return {
          id: id,
          h: h || 12,
          w: 12, // Always full width
          x: x || 0,
          y: y || 0,
          content: JSON.stringify({
            name,
            props,
          }),
          sizeToContent: true,
          subGridOpts: {
            acceptWidgets: true,
            cellHeight: CELL_HEIGHT,
            alwaysShowResizeHandle: false,
            column: "auto",
            minRow: 8,
            layout: "list",
            margin: 8,
            children: processChildren(childChildren || []),
          },
        };
      } else if(name == "Grid"){
        return {
          id: id,
          h: h || 12,
          w: w || 12,
          x: x || 0,
          y: y || 0,
          content: JSON.stringify({
            name,
            props,
          }),
          sizeToContent: true,
          subGridOpts: {
            acceptWidgets: true,
            cellHeight: CELL_HEIGHT,
            alwaysShowResizeHandle: false,
            column: "auto",
            minRow: 8,
            layout: "list",
            margin: 8,
            children: processChildren(childChildren || []),
          },
        };
      } else {
        return {
          id: id,
          h: h || 4,
          w: w || 6,
          x: x || 0,
          y: y || 0,
          sizeToContent: false,
          content: JSON.stringify({
            name,
            props,
          }),          
        };
      }
    });
  }

  // Convert the root structure
  return {
    acceptWidgets: true,
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
      columnMax: 12,
    },
    margin: 8,
    cellHeight: CELL_HEIGHT,
    subGridOpts: {
      acceptWidgets: true,
      columnOpts: {
        breakpoints: BREAKPOINTS,
        layout: "moveScale",
      },
      margin: 8,
      minRow: 2,
      cellHeight: CELL_HEIGHT,
    },
    children: processChildren(json.children || []),
  };
}

export function convertGridToPage(gridOptions) {
  function processChildren(children) {
    return children.map(child => {
      const { h, w, x, y, content, subGridOpts, acceptsWidgets } = child;      

      if (acceptsWidgets) {
        return {
          name: "Grid",
          h,
          w,
          x,
          y,
          props: {}, // Assuming no additional props for Section or Grid
          classNames: [], // Assuming no classNames
          children: processChildren(subGridOpts?.children || child.children || []),
        };
      } else if (content) {
        // Parse the content for non-Grid/Section items
        const parsedContent = JSON.parse(content);
        return {
          name: parsedContent.name,
          h,
          w,
          x,
          y,
          props: parsedContent.props || {},
          classNames: [], // Assuming no classNames
          children: processChildren(parsedContent.children || []), // Process children for non-Grid items
        };
      }

      return null;
    }).filter(Boolean); // Remove any null values
  }

  // Reconstruct the root structure
  return {
    name: "Section", // Assuming the root is always a "Section"
    h: gridOptions.h || null,
    w: gridOptions.w || null,
    x: gridOptions.x || null,
    y: gridOptions.y || null,
    props: {}, // Assuming no additional props for the root
    classNames: [], // Assuming no classNames for the root
    children: processChildren(gridOptions.children || []),
  };
}



// ! Content must be json string like this:
// { name: "Text", props: { content: "Item 1" } }
const gridOptions: GridStackOptions = {
  acceptWidgets: true,
  columnOpts: {
    breakpointForWindow: true,
    breakpoints: BREAKPOINTS,
    layout: "moveScale",
    columnMax: 12,
  },
  margin: 8,
  cellHeight: CELL_HEIGHT,
  subGridOpts: {
    acceptWidgets: true,
    columnOpts: {
      breakpoints: BREAKPOINTS,
      layout: "moveScale",
    },
    margin: 8,
    minRow: 2,
    cellHeight: CELL_HEIGHT,
  },
  children: [
    {
      id: "item1",
      h: 2,
      w: 4,
      x: 0,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      }),
    },
    {
      id: "item2",
      h: 2,
      w: 2,
      x: 2,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 2" },
      }),
    },
    {
      id: "sub-grid-1",
      h: 5,
      sizeToContent: true,
      subGridOpts: {
        acceptWidgets: true,
        cellHeight: CELL_HEIGHT,
        alwaysShowResizeHandle: false,
        column: "auto",
        minRow: 2,
        layout: "list",
        margin: 8,
        children: [
          {
            id: "sub-grid-1-title",
            locked: true,
            noMove: true,
            noResize: true,
            w: 12,
            x: 0,
            y: 0,
            content: JSON.stringify({
              name: "Text",
              props: { content: "Sub Grid 1 Title" },
            }),
          },
          {
            id: "item3",
            h: 2,
            w: 2,
            x: 0,
            y: 1,
            content: JSON.stringify({
              name: "Text",
              props: { content: "Item 3" },
            }),
          },
          {
            id: "item4",
            h: 2,
            w: 2,
            x: 2,
            y: 0,
            content: JSON.stringify({
              name: "Card",
              props: { 
                title: "Item 4",
                image: {
                  src: 'Hello, World'
                }
              },
            }),
          },
        ],
      },
      w: 12,
      x: 0,
      y: 2,
    },
  ],
};

