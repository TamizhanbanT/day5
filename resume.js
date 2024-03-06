const Resume={
    Name: "Tamizhanban T",
   mail_id: "tamizhanban4563@gmail.com",
   phone_no:9876543210,
   languages_known:["tamil","english"],
   qualification: [
    {
        school: "vethathiri maharishi higher secondary school",
        class:"10th",
        mark:450
   },
   {
    school: "vethathiri maharishi higher secondary school",
    class:"12th",
    mark:963
   },
   {
    college_name:"sri muthukumaran institite of technology",
    degree:"B.E.Mechanical",
    CGPA:6.50
   },

   ]
};
    console.log(Resume.qualification[2])

//2nd ques :loop

Object.keys(RESUME).forEach(key => {
    console.log(key, RESUME[key]);
  });

  // for of 
  for (let value of Object.values(RESUME)) {
    console.log(value);
}





