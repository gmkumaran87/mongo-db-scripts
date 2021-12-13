/* Design database for Zen class programme
users
codekata
attendance
topics
tasks
company_drives
mentors*/


db.company_drives.insertMany([{
        company_name: "Tata Consultancy Services",
        visited_dt: new Date("2021-12-10"),
        students_attended: 100,
    },
    {
        company_name: "CTS",
        visited_dt: new Date("2021-12-11"),
        students_attended: 120,
    },
    {
        company_name: "Ideas2Id",
        visited_dt: new Date("2021-10-16"),
        students_attended: 100,
    },
    {
        company_name: "Wipro",
        visited_dt: new Date("2021-10-20"),
        students_attended: 10,
    },
    {
        company_name: "Chargbee",
        visited_dt: new Date("2021-10-25"),
        students_attended: 20,
    },
    {
        company_name: "Google",
        visited_dt: new Date("2021-10-22"),
        students_attended: 10,
    },
    {
        company_name: "Amazon Inc",
        visited_dt: new Date("2021-10-24"),
        students_attended: 100,
    },
])

db.company_drives.find({
	visited_dt:{$gte:ISODate("2020-10-15"),$lt:ISODate("2021-10-31")}
})

