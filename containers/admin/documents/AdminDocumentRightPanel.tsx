import React from 'react'
import { Typography } from '../../../tailwind'
import PublishButton from './inputs/PublishButton'
import SaveButton from './inputs/SaveButton'
import { SyntheticEventType } from 'frontend-js'
import { UserAutosuggest } from '../../../components'
import { Separator } from '../../../shadcn/ui/separator'

type AdminDocumentRightPanelProps = {
	appId: string | number
	loading: boolean
	publishLoading: boolean
	errors?: any
	title: string | null
	document?: any
	setDocument: (document: any) => void
	handleChange: (e: SyntheticEventType) => void
	handleSubmit: () => void
	handleTogglePublish: () => void
	enableUsers?: boolean
	enableStripe?: boolean
	enablePlaces?: boolean
}

const AdminDocumentRightPanel: React.FC<AdminDocumentRightPanelProps> = (
	props
) => {
	const {
		loading,
		publishLoading,
		errors,
		document,
		handleChange,
		handleSubmit,
		handleTogglePublish,
	} = props

	return (
		<div className="dark bg-background h-full p-3 flex flex-col space-y-6">
      <div className="flex flex-col space-y-3">
        <Typography variant="caption" color="text.secondary">
          Publish
        </Typography>
        <PublishButton
          loading={publishLoading}
          document={document}
          handleTogglePublish={handleTogglePublish}
        />
      </div>
      <div className="flex flex-col space-y-3">
			<Typography variant="caption" color="text.secondary">
				Last saved {document?.last_saved_at}
			</Typography>
			<SaveButton
				fullWidth
				loading={loading}
				document={document}
				handleSubmit={handleSubmit}
			/>
      </div>
			<Separator />
			<UserAutosuggest
				direction="row"
				label="User"
				errors={errors}
				name="user_id"
				value={document?.user_id}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default AdminDocumentRightPanel

const sx = {
	root: {
		height: '100%',
		width: '100%',
	},
	container: {
		p: 2,
		pr: 4,
		pb: {
			sm: 0,
			xs: '80px',
		},
	},
	icon: {
		height: 28,
		width: 28,
	},
	progressLoader: {
		p: 0,
	},
	rightContent: {
		px: 2,
		pt: 1,
		bgcolor: 'background.paper',
		height: 'calc(100vh - 50px)',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	spacer: {
		height: '50px',
	},
	buttons: {
		height: '100%',
		alignItems: 'center',
	},
}
