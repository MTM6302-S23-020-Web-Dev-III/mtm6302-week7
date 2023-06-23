const employees = [
  {
    name: "Jax",
    id: 897636,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    department: "Innovation",
    email: "jax@company.com",
    skills: ["UX", "prototyping", "research", "documentation"],
    address: {
      street: "123 Street",
      city: "Merlot"
    },
    selfIntro: function () {
      const temp = `Hi I am ${this.name}! I started working in ${this.department} since ${this.hireDate} ${this.hireMonth}, ${this.hireYear}`
      return temp
    }
  },
  {
    name: "Jinx",
    id: 897646,
    hireDate: 20,
    hireMonth: "Dec",
    hireYear: 2021,
    department: "Marketing",
    email: "jinx@company.com",
    skills: ["Digital Marketing", "SEO", "Google Analytics", "documentation"],
    address: {
      street: "789 Street",
      city: "Merlot"
    },
    selfIntro: function () {
      const temp = `Hi I am ${this.name}! I started working in ${this.department} since ${this.hireDate} ${this.hireMonth}, ${this.hireYear}`
      return temp
    }
  }
]

const empSection = document.getElementById("employee")

for (employee of employees) {

  empSection.insertAdjacentHTML("beforeend", `<h2>Welcome ${employee.name}!</h2>`)

  employee.department = "Innovation and Research"

  const empInfo = `<dl>
  <dt>ID</dt>
  <dd>${employee.id}</dd>
  <dt>Department</dt>
  <dd>${employee.department}</dd>
  <dt>Year Hired</dt>
  <dd>${employee.hireYear}</dd>
  <dt>Email</dt>
  <dd>${employee.email}</dd>
</dl>`

  empSection.insertAdjacentHTML("beforeend", empInfo)

  // adding a property to object, not recommended, we should try to add properties in the original declaration

  employee.pronouns = "They/Them"
  empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} uses pronouns ${employee.pronouns}</p>`)

  empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} is skilled in 
${employee.skills.join(", ")}</p>`)

  empSection.insertAdjacentHTML("beforeend", `<p>Address: ${employee.address.street}, ${employee.address.city}</p>`)

  empSection.insertAdjacentHTML("beforeend", employee.selfIntro())

  console.log(Object.keys(employee))
  console.log(Object.values(employee))
  console.log(Object.entries(employee))
}