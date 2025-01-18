export function convertNodesToGrid(nodes) {
	return nodes.map((node) => {
		const { id, h, w, x, y } = node
		return {
			id: String(id),
			h: h || 12,
			w: w || 12,
			x: x || 0,
			y: y || 0,
			...node,
		}
	})
}

export function convertNodesToEditorGrid(nodes) {
	return nodes.map((node) => {
		const { id, name, h, w, x, y } = node
		return {
			id: String(id),
			name: 'RenderComponent',
			h: h || 12,
			w: w || 12,
			x: x || 0,
			y: y || 0,
			...node,
		}
	})
}
