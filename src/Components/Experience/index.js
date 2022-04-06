
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
            designation: "Freelance Software Engineer",
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
            designation: "Creative Design Team Head",
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
                <div className="row" style={styles.ExperienceContainer}>
                    <div className="col">
                        Experience
                    </div>
                </div>
                {
                    experience.map((e)=>{
                        return (
                            <div className="row my-3" style={styles.Project}>
                                <div className="col-4">
                                    <div className="text-center">
                                        <img src="/icons/icons8-timesheet-100.png" width="25"/>
                                        <strong>{e.time}</strong>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <a href={e.siteLink} target="_blank">{e.company}</a>
                                </div>
                                <div class="col-4">
                                    {e.designation}
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
