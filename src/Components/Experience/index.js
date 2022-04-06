
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
            text: "Worked on realtime health care management system aimed at digitizing the American healthcare system.\n" +
                "I worked with a team of 5+ and worked on the site as a full stack developer.",
            tech: ["React js", "Django", "Python", "AWS", "Docker"],
            siteLink: "https://ezhealth.live/",
            projectName: "Ophycare.live",
            time: "02/2022 - 04/2022",
        },
        {
            text: "Worked on site to render dynamic blog content, gradient colors, shades and code snippets. " +
                "I worked with a tema of 4+ and worked on the site as a full stack developer",
            tech: ["React js", "Django", "Python"],
            siteLink: "https://devdevout.com/",
            projectName: "Devdevout",
            time: "01/2022 - 04/2022",
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
                                    <a href={e.siteLink} target="_blank">{e.projectName}</a>
                                </div>
                                <div className="col-8 " style={styles.ExperienceText}>

                                    <div>
                                        {e.text}
                                    </div>
                                    {
                                        e.tech.map((t)=>{
                                            return <div className="badge bg-light text-dark mx-1">{t}</div>
                                        })
                                    }
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
