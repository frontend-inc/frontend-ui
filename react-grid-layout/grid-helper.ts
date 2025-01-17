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

  export function combineLayouts(mobileLayout=[], desktopLayout=[]){
    if(mobileLayout.length !== desktopLayout.length){
      throw new Error('Layouts must have the same number of items');
    }
    return mobileLayout.map((mobileItem) => {
      // Find the corresponding desktop item by matching the 'i' property
      const desktopItem = desktopLayout.find((desktop) => desktop.i == mobileItem.i);
  
      if (!desktopItem) {
        throw new Error(`No matching item found in desktopLayout for id: ${mobileItem.i}`);
      }
  
      return {
        i: desktopItem.i,
        x: { xs: mobileItem.x, md: desktopItem.x },
        y: { xs: mobileItem.y, md: desktopItem.y },
        h: { xs: mobileItem.h, md: desktopItem.h },
        w: { xs: mobileItem.w, md: desktopItem.w },
        name: desktopItem.name,
        props: desktopItem.props,
      };
    });
  }
