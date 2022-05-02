
const styles = {
    IntroContainer: {
        fontWeight: "Bold",
        backgroundColor: "#282c34",
    },
    IntroText: {
        textAlign: "Left",
        fontSize: "16px",
    },
}

function Intro() {

    const info = {
        cell: "+92 3009442848",
        email: "aanishamir@gmail.com",
        github: {
            link: "https://github.com/Aanish97",
        },
        linkedin: {
            link: "https://www.linkedin.com/in/aanish-amir/",
        },
        punchLine: "I want to be part of an organization where my skills are utilized to the fullest, get the\n" +
            "opportunities to interact with a diverse community and learn advance technologies!"
    }

    return (
        <div>
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-12">
                        <img src = "/aanish-image.jpeg"
                             class="border border-white rounded-3"
                             alt="Card image cap" height="240" />
                    </div>
                    <div class="col-lg-6 col-12 text-white border border-white rounded-3 align-self-lg-center p-5
                                my-lg-0 my-5"
                         style={styles.IntroText}
                    >
                        <div class="pb-2">{info.punchLine}</div>
                        <div class=""><strong>cell: </strong>{info.cell}</div>
                        <div class=""><strong>email: </strong>{info.email}</div>
                        <div class=""><strong>github: </strong><a className="text-white text-decoration-none" href="https://github.com/Aanish97" target="_blank">Aanish97</a></div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Intro;
