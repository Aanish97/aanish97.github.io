
const styles = {
    TechnologyContainer: {
        fontWeight: "Bold",
        fontSize: "26px",
        // color: "#f8f9fa",

    },
    TechnologyText: {
        textAlign: "left",
        fontWeight: "normal",
        fontSize: "16px",
    },
    Project: {
        textAlign: "Center",
    },
}

function Technologies() {

    const tech = [
        'Python',
        'Django-restframework',
        'Flask',
        'React js',
        'SQL',
        'ETL',
        'Data Pipelining',
        'Big Query',
        'Git',
        'Linux',
        'Docker',
        'Deployment',
        'Agile Methodology',
        'Adobe photoshop',
        'Adobe illustrator',
    ]

    return (

        <div id="experience">

        <div class="container text-white p-5">
            <div className="row pb-4" style={styles.TechnologyContainer}>
                <div className="col">
                    Technologies
                </div>
            </div>
            {
                tech.map((t)=>{
                    return (
                        <div class="badge bg-white text-dark mx-1 my-1" style={styles.TechnologyText}>
                            {t}
                        </div>
                    )
                })
            }

        </div>
        </div>

    );
}

export default Technologies;
