import UserDetails from './components/UserDetails.jsx'
import MentorDetails from './components/MentorDetails.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'

const App = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault()
		console.log(e.target)
	}
	return (
		<>
			<div className="text-center text-4xl font-bold">Request Form</div>
			<form onSubmit={handleFormSubmit}>
				<UserDetails />
				<MentorDetails />
				<ProjectDetails />
				<button className="border-4 border-black p-2 mr-2" type="submit">Submit</button>
				<button className="border-4 border-black p-2" type="reset">Reset</button>
			</form>
		</>
	)
}

export default App