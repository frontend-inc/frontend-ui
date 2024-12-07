import { get } from 'lodash'
import moment from 'moment'

export function exportJsonToCSV(headers: string[], items: any[]) {
	// Extract rows (values for each object)
	const rows = items.map((obj) =>
		headers.map((header) => {
			const value = get(obj, header)

			// Format date values
			if (moment(value, moment.ISO_8601, true).isValid()) {
				return moment(value).format('MM/DD/YYYY')
			}

			if (value === null || value === undefined || typeof value === 'object') {
				return ''
			}

			return value // Ensure the value is returned
		})
	)

	// Create CSV content
	const csvContent = [
		headers.join(','), // Header row
		...rows.map((row) => row.join(',')), // Data rows
	].join('\n')

	// Get the current date for the file name
	const date = moment().format('MM-DD-YYYY')

	// Create a Blob object and trigger the download
	const blob = new Blob([csvContent], { type: 'text/csvcharset=utf-8' })
	const url = URL.createObjectURL(blob)
	const link = document.createElement('a')
	link.href = url
	link.setAttribute('download', `export-${date}.csv`) // Add formatted date to the file name
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
