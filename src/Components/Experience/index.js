
const styles = {
    ExperienceContainer: {
        fontWeight: "Bold",
        fontSize: "26px",
        color: "#f8f9fa",

    },
    ExperienceText: {
        textAlign: "left",
        fontWeight: "normal",
        fontSize: "16px",
    },
    Project: {
        textAlign: "Center",
    },
}

function Experience() {

    const experience = [
        {
            designation: "Software Engineer",
            siteLink: "https://esketchers.com/",
            company: "Esketchers",
            time: "06/2020 - Current"
        },
        {
            designation: "Freelancer",
            // company: [
            //     {
            //         name: "Upwork",
            //         site: "https://www.upwork.com/freelancers/~01291bf56f628895ff"
            //     },
            //     {
            //         name: "Fiverr",
            //         site: "https://fiverr.com/concept_studios"
            //     }
            // ],
            siteLink: "https://fiverr.com/concept_studios",
            company: "Fiverr",
            time: "09/2017 - Current",
        },
        {
            designation: "Design Team Head",
            siteLink: "https://www.softecnu.org/",
            company: "Softec19",
            time: "06/2018 - 04/2019",
        },
        {
            designation: "Intern Developer",
            siteLink: "https://bramerz.pk/",
            company: "Bramerz",
            time: "06/2018 - 09/2018",
        },
    ]

    return (
        <div id="experience">

            <div class="container text-white py-5">
                <div className="row pb-4" style={styles.ExperienceContainer}>
                    <div className="col">
                        Experience
                    </div>
                </div>
                {
                    experience.map((e)=>{
                        return (
                            <div className="row my-3" style={styles.Project}>
                                <div className="col-3 col-md-6">
                                    <div className="text-center">
                                        <img src="/icons/icons8-timesheet-100.png" width="25"/>
                                        <strong>{e.time}</strong>
                                    </div>
                                </div>
                                <div class="col-3 col-md-6 justify-content-start d-flex">
                                    <div class="badge bg-dark text-white mx-1" style={styles.ExperienceText}>
                                        {e.designation} at <a href={e.siteLink} target="_blank">{e.company}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    );
}

export default Experience;
