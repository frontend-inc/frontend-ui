export const deleteNode = (nodeId, nodes = []) => {
    const targetId = nodeId

    const newNodes = [...nodes]
    let deleted = false

    // Check and delete in top-level columns
    for (let i = 0; i < newNodes.length; i++) {
      if (newNodes[i].id === targetId) {
        newNodes.splice(i, 1)
        deleted = true
        break
      }
    }
    // If not deleted, search and delete in nested children
    if (!deleted) {
      const deleteCallback = (currentNode) => {
        if (currentNode.children) {
          for (let i = 0; i < currentNode.children.length; i++) {
            if (currentNode.children[i].id === targetId) {
              currentNode.children.splice(i, 1)
              deleted = true
              return
            }
          }
        }
      }

      walkTree(newNodes, deleteCallback)
    }

    return deleted ? newNodes : [ ...nodes ]
  }

  export const insertNode = (node, parentId, nodes, index = 0) => {
    const addNodeToChildren = (nodes) => {
      return nodes.map((currentNode) => {
        if (currentNode.id === parentId) {
          const children = currentNode.children || [];
          const updatedChildren = [
            ...children.slice(0, index),
            node,
            ...children.slice(index),
          ];
          return {
            ...currentNode,
            children: updatedChildren,
          };
        } else if (currentNode.children) {
          return {
            ...currentNode,
            children: addNodeToChildren(currentNode.children),
          };
        }
        return currentNode; // Return unchanged node
      });
    };
  
    if (parentId) {
      return addNodeToChildren(nodes);
    } else {
      return [...nodes.slice(0, index), node, ...nodes.slice(index)];
    }
  }
  
  export const updateNode = (node, nodes) => {
    if (!Array.isArray(nodes)){
      nodes = [nodes]
    }

    const update = (nodes) => {
      return nodes.map((currentNode) => {
        if (currentNode.id === node.id) {
          return node // Replace the node if the ID matches
        } else if (currentNode.children) {
          // Recursively update children
          return {
            ...currentNode,
            children: update(currentNode.children),
          }
        }
        return currentNode // Return unchanged node
      })
    }

    return update(nodes)
  }

  
export const findNode = (id, nodes) => {
  let elem = null
  walkTree(nodes, (node) => {
    if (String(node.id) === String(id)) {
      elem = node
    }
  })
  return elem
}

export const walkTree = (root = [], fn) => {

  if(!Array.isArray(root)){
    root = [root]
  }

  const walk = (node, fn) => {
    fn(node)
    if (node.children) {
      node.children.forEach((child) => walk(child, fn))
    }
  }

  root.forEach((node) => {
    walk(node, fn)
  })
}

// Find the parent Id of a node 
export const findParentNode = (nodeId, nodes) => {
  let parent = null;

  function walkTree(nodes) {
    for (const node of nodes) {
      if (node.children) {
        for (const child of node.children) {
          if (child.id === nodeId) {
            parent = node;
            return; // Exit early when found
          }
        }
        walkTree(node.children); // Recurse into children
      }
    }
  }

  walkTree(nodes);
  return parent;
};

export const isDescendant = (nodeId, parentId, nodes) => {
  const parent = findNode(parentId, nodes);
  if (!parent || !parent.children) return false;

  const checkDescendant = (node) => {
    if (node.id === nodeId) return true;
    if (node.children) {
      return node.children.some(checkDescendant);
    }
    return false;
  };

  return parent.children.some(checkDescendant);
};

// Recursively find the root parent of a node
export const findRootParent = (nodeId, nodes) => {
  let parent = findParentNode(nodeId, nodes);
  while (parent) {
    const grandParent = findParentNode(parent.id, nodes);
    if (!grandParent) break; // If no further parent exists, stop
    parent = grandParent;
  }
  return parent;
};

// Find all siblings of a node
export const findSiblingNodes = (nodeId, nodes) => {
  const parent = findParentNode(nodeId, nodes)
  return parent ? parent.children : []
}

// Move a node from one parent to another
export const moveNode = (nodeId, newParentId, nodes, index = 0) => {
  const node = findNode(nodeId, nodes);
  if (!node) {
    console.warn(`Node with id ${nodeId} not found.`);
    return nodes;
  }

  let updatedNodes = deleteNode(nodeId, [...nodes]);
  updatedNodes = insertNode(node, newParentId, updatedNodes, index);

  return updatedNodes;
};


// Map the tree into a flat object for easy parent lookups
export function mapTree(tree) {
  const map = {};
  
  function traverse(nodes) {
    for (const node of nodes) {
      map[node.id] = { ...node }; // Create a copy to avoid mutating the original tree
      if (node.children) traverse(node.children);
    }
  }
  traverse(tree);
  return map;
}

export function reorderWithinParent(activeId, overId, nodes, siblingIndex) {
  const nodeToMove = findNode(activeId, nodes);
  const parent = findParentNode(activeId, nodes);

  if (parent && parent.children) {
    parent.children = parent.children.filter((child) => child.id !== activeId); // Remove node
    parent.children.splice(siblingIndex, 0, nodeToMove); // Add at new position
  }

  return nodes;
}
