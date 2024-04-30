let resume={
    "name": "Tamizhanban T",
    "email": "tam@gmail.com",
    "phone": "123-456-7890",
    "address": {
      "street": "123 Main St",
      "city": "ranipet",
      "state": "NY",
      "zip": "12345"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "university": "University of XYZ",
        "year": 2015
      },
      {
        "degree": "Master of Science",
        "major": "Software Engineering",
        "university": "smit",
        "year": 2019
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Corp",
        "location": "chennai",
        "years": 3
      },
      {
        "position": "Senior Developer",
        "company": "Innovate Inc",
        "location": "bangalore",
        "years": 5
      }
    ]
  }
//for loop
for (let i = 0; i < resume.education.length; i++) {
    const education = resume.education[i];
    console.log(`Degree: ${education.degree}, University: ${education.university}`);
}

// for ..in
for (const key in resume.address) {
    console.log(`${key}: ${resume.address[key]}`);
}


// for ..of
for (const experience of resume.experience) {
    console.log(`Position: ${experience.position}, Company: ${experience.company}`);
}
// for Each

resume.experience.forEach(experience => {
    console.log(`Position: ${experience.position}, Years: ${experience.years}`);
});


  