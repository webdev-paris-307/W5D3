const { faker, fakerFR, fakerZH_CN } = require("@faker-js/faker")
const fs = require("fs")

/**
 * Faker is a small package allowing us to create some fake datas
 * Might be handy when we want to create a "seed".
 * A seed is generally created / used when we want to test our application
 * and we do not have any data.
 */

function generateStudents() {
	const students = createStudent()
	const projects = createProjects()

	// randomizeStudentsToProjects(students, projects)

	return { students, projects }
}

fs.writeFileSync(
	"student_data.json",
	JSON.stringify(generateStudents(), null, "\t")
)

function createStudent(arr = []) {
	for (let id = 1; id <= 100; id++) {
		let firstName = faker.person.firstName()
		let lastName = faker.person.lastName()
		let email = faker.internet
			.email({ firstName, lastName })
			.toLocaleLowerCase()
		const city = faker.location.city()

		arr.push({ id, firstName, lastName, email, city })
	}
	return arr
}

function createProjects(arr = []) {
	for (let i = 0; i < 25; i++) {
		const name = faker.company.name()
		const description = faker.company.catchPhraseDescriptor()
		arr.push({
			id: i,
			name,
			description,
			studentId: Math.floor(Math.random() * 100),
		})
	}
	return arr
}
