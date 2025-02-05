export const deleteNode = (nodeId, tree) => {
  if (!tree) return null;

  // If the root node itself is the target, return null (tree is deleted)
  if (tree.id === nodeId) {
    return null;
  }

  const deleteFromChildren = (node) => {
    if (!node.children) return node;

    const updatedChildren = node.children
      .filter(child => child.id !== nodeId) // Remove target node
      .map(deleteFromChildren); // Recursively update children

    return { ...node, children: updatedChildren };
  };

  return deleteFromChildren(tree);
};

  export const insertNode = (node, parentId, tree, index = 0) => {
    const addNodeToChildren = (currentNode) => {
      if (currentNode.id === parentId) {
        const children = currentNode.children || [];
        return {
          ...currentNode,
          children: [
            ...children.slice(0, index),
            node,
            ...children.slice(index),
          ],
        };
      } else if (currentNode.children) {
        return {
          ...currentNode,
          children: currentNode.children.map(addNodeToChildren),
        };
      }
      return currentNode; // Return unchanged node
    };
  
    if (parentId) {
      return addNodeToChildren(tree);
    } else {
      // If no parentId is provided, add the node as a child of the root node
      return {
        ...tree,
        children: [...(tree.children || []), node],
      };
    }
  };  
  
export const updateNode = (node, tree) => {
  const update = (currentNode) => {
    if (currentNode.id === node.id) {
      return node; // Replace the node if the ID matches
    } else if (currentNode.children) {
      // Recursively update children
      return {
        ...currentNode,
        children: currentNode.children.map(update),
      };
    }
    return currentNode; // Return unchanged node
  };

  return update(tree);
};  

  
export const findNode = (id, tree) => {
  let elem = null;
  
  const walkTree = (node) => {
    if (String(node.id) === String(id)) {
      elem = node;
      return;
    }
    if (node.children) {
      node.children.forEach(walkTree);
    }
  };

  walkTree(tree);
  return elem;
};


export const walkTree = (tree, fn) => {
  const walk = (node) => {
    fn(node);
    if (node.children) {
      node.children.forEach(walk);
    }
  };

  walk(tree);
};

// Find the parent Id of a node 
export const findParentNode = (nodeId, tree) => {
  if (!tree || !tree.children) return null;

  for (const child of tree.children) {
    if (child.id === nodeId) {
      return tree; // Parent found
    }
    const found = findParentNode(nodeId, child);
    if (found) return found;
  }

  return null;
};



export const isDescendant = (nodeId, parentId, tree) => {
  const parent = findNode(parentId, tree);
  if (!parent || !parent.children) return false;

  const checkDescendant = (node) => {
    if (node.id === nodeId) return true;
    return node.children ? node.children.some(checkDescendant) : false;
  };

  return parent.children.some(checkDescendant);
};


// Recursively find the root parent of a node
export const findRootParent = (nodeId, tree) => {
  let parent = findParentNode(nodeId, tree);
  
  while (parent) {
    const grandParent = findParentNode(parent.id, tree);
    if (!grandParent) break; // Stop if no further parent exists
    parent = grandParent;
  }
  
  return parent;
};


// Find all siblings of a node
export const findSiblingNodes = (nodeId, tree) => {
  const parent = findParentNode(nodeId, tree);
  return parent ? parent.children.filter(child => child.id !== nodeId) : [];
};


// Move a node from one parent to another
export const moveNode = (nodeId, newParentId, tree, index = 0) => {
  const node = findNode(nodeId, tree);
  if (!node) {
    console.warn(`Node with id ${nodeId} not found.`);
    return tree;
  }

  let updatedTree = deleteNode(nodeId, tree);
  return insertNode(node, newParentId, updatedTree, index);
};


// Map the tree into a flat object for easy parent lookups
export function mapTree(tree) {
  const map = {};

  function traverse(node) {
    map[node.id] = { ...node }; // Avoid mutation
    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(tree);
  return map;
}


export function reorderWithinParent(activeId, tree, siblingIndex) {
  const nodeToMove = findNode(activeId, tree);
  const parent = findParentNode(activeId, tree);

  if (!nodeToMove || !parent || !parent.children) {
    console.warn(`Invalid move: Node or parent not found.`);
    return tree;
  }

  // Remove the node from its current position
  const updatedChildren = parent.children.filter((child) => child.id !== activeId);

  // Insert the node at the new position
  updatedChildren.splice(siblingIndex, 0, nodeToMove);

  // Update the parent with the reordered children
  const updatedTree = updateNode({ ...parent, children: updatedChildren }, tree);

  return updatedTree;
}
