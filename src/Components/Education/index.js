const styles = {
    EducationContainer: {
        fontWeight: "Bold",
        fontSize: "26px",
        backgroundColor: "#f8f9fa",
        color: "black",

    },
    Items: {
        fontWeight: "normal",
        fontSize: "16px",
        textAlign: "Left",
    }
}

function Education() {
    return (
        <div style={styles.EducationContainer} id="education">
            <div class="container rounded-3 py-5">
                <div class="row">
                    <div class="col">
                        Education
                    </div>
                </div>

                <div style={styles.Items} class="justify-content-center ">

                    <div className="row py-4">
                        <div className="col-4 text-center">
                            <img src="/icons/icons8-timesheet-100.png" width="25"/>
                            <strong>09/2016 - 06/2020</strong>
                        </div>
                        <div className="col-8">
                            <img src="/icons/icons8-location-100.png" width="25"/>
                            National University of Computing & Emerging Sciences (FAST) - BS(CS), <strong>Lahore,
                            Pakistan</strong>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-4 text-center">
                            <img src="/icons/icons8-timesheet-100.png" width="25"/>
                            <strong>09/2014 - 06/2016</strong>
                        </div>
                        <div className="col-8">
                            <img src="/icons/icons8-location-100.png" width="25"/>
                            Beaconhouse Defence Campus - A level, <strong>Lahore, Pakistan</strong>
                        </div>
                    </div>
                    <div class="row py-4">
                        <div className="col-4 text-center">
                            <img src="/icons/icons8-timesheet-100.png" width="25"/>
                            <strong>09/2011 - 06/2014</strong>
                        </div>
                        <div className="col-8 ">
                            <img src="/icons/icons8-location-100.png" width="25"/>
                            Beaconhouse Defence Campus - O level, <strong>Lahore, Pakistan</strong>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Education;
