const ProjectDetails = () => {
	return (
		<>
			<div className="text-2xl font-bold">Project Details</div>
			<label htmlFor="project_title">Project Title</label><br/>
			<input type="text" name="project_title" id="project_title" className="border border-black"/>
			<br/><br/>
			<label htmlFor="storage_space">Approximate Storage Space Required</label><br/>
			<input type="text" name="storage_space" id="storage_space" className="border border-black"/>
			<br/><br/>
			<label htmlFor="softwares">Softwares Required</label><br/>
			<input type="text" name="softwares" id="softwares" className="border border-black"/>
			<br/><br/>
			<label htmlFor="project_description">Project Description</label><br/>
			<input type="text" name="project_description" id="project_description"/>
			<br/><br/>
		</>
	)
}

export default ProjectDetails