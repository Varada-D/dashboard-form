const UserDetails = () => {
	return (
		<>
			<div className="text-2xl font-bold">UserDetails</div>
			<label htmlFor="Name">Name</label> <br/>
			<input type="text" name="name" id="name" className="border border-black"/>
			<br/><br/>
			<label htmlFor="contect">Contact Number</label> <br/>
			<input type="number" name="contact" id="contact" className="border border-black"/>
			<br/><br/>
			<label htmlFor="email ">Email ID</label> <br/>
			<input type="email" name="email" id="email" className="border border-black"/>
			<br/><br/>
			<label htmlFor="role">Role</label> <br/>
			Student <input type="checkbox" name="role" id="chx:student" value="Student"/>
			Faculty <input type="checkbox" name="role" id="chx:faculty" value="Faculty"/>
			<br/><br/>
			<label htmlFor="enrollment">Enrollment Number</label> <br/>
			<input type="text" name="enrollment" id="enrollment" className="border border-black"/>
			<br/><br/>
			<label htmlFor="cv">CV</label> <br/>
			<input type="file" name="CV" id="cv" className="border border-black"/>
			<br/><br/>
		</>
	)
}

export default UserDetails