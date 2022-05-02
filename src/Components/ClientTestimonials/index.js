
const styles = {
    ProjectContainer: {
        fontWeight: "Bold",
        fontSize: "26px",
        color: "#f8f9fa",
    },
    ProjectText: {
        textAlign: "left",
        fontWeight: "normal",
        fontSize: "16px",
    },
    Project: {
        textAlign: "Center",
        fontWeight: "Regular",
        fontSize: "14px",
    },
}

function ClientTestimonials() {

    const testimonial1 = [
        {
            text: "Very happy to endorse and recommend Aanish. We hired Aanish for a project that included an API integration with 2 different systems using python. Aanish was very professional and prior to taking the project he investigated the different systems and ensured he completely understand the project requirements and scope. The delivery was swift and to the point with all products delivered and supported through installation and completion of the project to our best satisfaction",
            recommender: "Guy Halicz",
            platform: "Upwork",
        },
        {
            text: "I had the opportunity to work with Aanish several times. Not only is he an excellent software developer, but also a friendly, polite, flexible and reliable person. I highly recommend Aanish as a programmer, as he will for sure be able to exceed every client’s expectations.",
            recommender: "Vinícius Ferraz",
            platform: "Upwork",
        },
    ]

    const testimonial2 = [
        {
            text: "Aanish was a pleasure to work with - great python and Django skills, great communication and efficient delivery of my project. Will definitely use Aanish’s skills again! Thanks!",
            recommender: "Andrew Vassili",
            platform: "Upwork",
        },
        {
            text: "Very patient and efficient seller. He did all the things required and worked fast, also took time to explain to me via google meet how to run the program even if I had 0 knowledge on it. Will definitely get him again in future jobs.",
            recommender: "Choco Reyes",
            platform: "Fiverr",
        },
        {
            text: "Incredible service, very responsive, got all the details I requested and was very helpful and explained everything step by step. Will definitely work with him again.",
            recommender: "Manuel Tirado",
            platform: "Fiverr",
        },
    ]

    const testimonial3 = [
        {
            text: "Aanish is the REAL deal! I'm so glad I was able to find Aanish and have him work on my project. I already had one reliable full-stack developer but needed to add another to the roster. Aanish delivered! Great worker and I HIGHLY recommend him. We've pushed pause for the time being, but the moment I have more work for him, I'll be sure to reach out. Thanks, Aanish! 5 STARS!",
            recommender: "Lance Kohler",
            platform: "Upwork",
        },
        {
            text: "I asked to Aanish to come up with a Python script that communicates with an API providing weather information. Although I think somewhere it said his English skills are \"basic\", we understood each other perfectly well. He actively reached out if there were questions or issues with what I had in mind. He did exactly what I asked him to do and I am fully satisfied with the delivered work quality.",
            recommender: "Germandy",
            platform: "Fiverr",
        },
    ]

    return (
        <div id="testimonials">

            <div class="container py-5">
                <div style={styles.ProjectContainer} className="row">
                    <div className="col">
                        Testimonials
                    </div>
                </div>
                <div className="row my-3 d-flex" style={styles.Project}>
                    {
                        [testimonial1, testimonial2, testimonial3].map((t)=>{
                            return (
                                <div className="col-md-4 col-12">
                                    {
                                        t.map((e)=>{
                                            return (
                                                <span>
                                                    <div className="rounded-3 bg-white text-dark p-5 my-4">
                                                        <div className="text-center">
                                                            <div>"{e.text}", <div className="fw-bold">{e.recommender}</div></div>
                                                            <div className="badge bg-dark text-white mx-1">{e.platform}</div>
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default ClientTestimonials;
