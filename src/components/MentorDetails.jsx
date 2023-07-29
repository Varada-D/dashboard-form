const MentorDetails = () => {
	return (
		<>
			<div className="text-2xl font-bold">Mentor Details</div>
			<label htmlFor="mentorname">Mentor Name</label><br/>
			<input type="text" name="mentor_name" id="mentor_name" className="border border-black"/>
			<br/><br/>
			<label htmlFor="mentor_designation">Mentor Designation</label> <br/>
			<input type="text" name="mentor_designation" id="mentor_designation" className="border border-black"/>
			<br/><br/>
			<label htmlFor="mentor_email">Mentor Email</label><br/>
			<input type="text" name="mentor_email" id="mentor_email" className="border border-black"/>
			<br/><br/>
			<label htmlFor="mentor_contact">Mentor Contact</label><br/>
			<input type="number" name="mentor_contact" id="mentor_contact" className="border border-black"/>
			<br/><br/>
		</>
	)
}

export default MentorDetails