const UserDetails = () => {
	return (
		<>
			<h2 className="text-2xl font-bold">UserDetails</h2>
			<div className="flex">
				<div class="w-48 md:w-72 sm:w-96">
					<label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
					<input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"/>
				</div>
				<div class="w-48 md:w-72 sm:w-96">
					<label htmlFor="contect">Contact Number</label>
					<input type="number" name="contact" id="contact" className="border border-black"/>
				</div>
				<div class="w-48 md:w-72 sm:w-96">
					<label htmlFor="email ">Email ID</label>
					<input type="email" name="email" id="email" className="border border-black"/>
				</div>
			</div>
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