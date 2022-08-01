
const styles = {
    ProjectContainer: {
        fontWeight: "Bold",
        fontSize: "26px",
        backgroundColor: "#f8f9fa",
        color: "black"

    },
    ProjectText: {
        textAlign: "left",
        fontWeight: "normal",
        fontSize: "16px",
    },
    Project: {
        textAlign: "Center",
        fontWeight: "normal",
        fontSize: "16px",
    },
}

function Project() {

    const project = [
        {
            text: "Worked on realtime health care management system aimed at digitizing the American healthcare system.\n" +
                "I worked with a team of 5+ and worked on the site as a full stack developer.",
            tech: ["React js", "Django", "Python", "AWS", "Docker"],
            siteLink: "https://ezhealth.live/",
            projectName: "Ophycare",
            time: "02/2022 - 04/2022",
        },
        {
            text: "Worked on site to render dynamic blog content, gradient colors, shades and code snippets. " +
                "I worked with a team of 8 and worked on the site as a full stack developer",
            tech: ["React js", "Django", "Python"],
            siteLink: "https://devdevout.com/",
            projectName: "Devdevout",
            time: "01/2022 - 04/2022",
        },
        {
            text: "Built with Reactjs and Django. A web portal for document management of US-based contractors, it is " +
                "integrated with Simpro CRM and Eversign (electronic signature service). I was a full stack developer " +
                "on this project",
            tech: ["React js", "Django", "Python", "G-Cloud"],
            siteLink: "https://omega.redx.online/",
            projectName: "Omega Industries",
            time: "07/2021 - 03/2022",
        },
        {
            text: "It is an affiliate marketing site operating in Europe. My role was associated with the dev team in " +
                "Pakistan. I was in charge of updating the different workflows and data flows associated with " +
                "Slotswise and its reporting site.",
            tech: ["Django", "Python", "G-Cloud", "BigQuery", "SQL"],
            siteLink: "https://slotswise.com/",
            projectName: "Slotswise",
            time: "07/2020 - 04/2022",
        },
        {
            text: "Performing numerous data cleaning, wrangling, munging tasks on Slotswise data. The data included " +
                "transnational information, user profiles and other crucial data-sets. Transferring data between " +
                "local databases, BQ and other online tools was a regular process.",
            tech: ["Django", "Python", "G-Cloud", "BigQuery", "SQL"],
            siteLink: "",
            projectName: "ETL scripting & automation",
            time: "07/2020 - 04/2021",
        },

    ]

    return (
        <div style={styles.ProjectContainer} id="Project">

            <div class="container py-5">
                <div className="row">
                    <div className="col">
                        Projects
                    </div>
                </div>
                {
                    project.map((e)=>{
                        return (
                            <div className="row my-3" style={styles.Project}>
                                <div className="col-4">
                                    <div className="text-center">
                                        <img src="/icons/icons8-timesheet-100.png" width="25"/>
                                        <strong>{e.time}</strong>
                                    </div>
                                    <a href={e.siteLink} target="_blank">{e.projectName}</a>
                                </div>
                                <div className="col-8 " style={styles.ProjectText}>

                                    <div>
                                        {e.text}
                                    </div>
                                    {
                                        e.tech.map((t)=>{
                                            return <div className="badge bg-dark text-white mx-1">{t}</div>
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

export default Project;
