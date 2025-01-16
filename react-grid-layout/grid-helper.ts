export function convertNodesToGrid(nodes) {  
  return nodes.map(node => {
    const { id, h, w, x, y } = node;
      return {
        id: String(id),
        h: h || 12,
        w: w || 12, 
        x: x || 0,
        y: y || 0, 
        ...node,                   
    } 
  });
}

export function convertNodesToEditorGrid(nodes) {  
  return nodes.map(node => {
    const { id, name, h, w, x, y } = node;
      return {
        id: String(id),
        name: "RenderComponent",
        h: h || 12,
        w: w || 12, 
        x: x || 0,
        y: y || 0,  
        ...node        
      }
    })  
}


export function mergeLayouts(layout1=[], layout2=[]) {
    const map = new Map();
    layout1?.forEach(obj => {
        map.set(obj.i, obj);
    });
    
    layout2?.forEach(obj => {
        if (map.has(obj.i)) {
            // If the object exists in the map, merge the properties
            map.set(obj.i, { ...map.get(obj.i), ...obj });
        } else {
            // Otherwise, add the object to the map
            map.set(obj.i, obj);
        }
    });
    return Array.from(map.values());
  }
