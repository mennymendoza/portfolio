class App extends React.Component {
    state = {
        navLinks: [
            {
                "name": "about me",
                "link": "about-me.html"
            },
            {
                "name": "experience",
                "link": "experience.html"
            },
            {
                "name": "research",
                "link": "research.html"
            },
            {
                "name": "projects",
                "link": "projects.html"
            }
        ],
        cardContent: [
            {
                imageSrc: "assets/images/motivation.png",
                cardTitle: "Motivation",
                description: "The goal of the project was to predict the behavior of pharmaceutical powders under extreme pressure. This is normally done through computationally-intensive simulations."
            },
            {
                imageSrc: "assets/images/approach.png",
                cardTitle: "Approach",
                description: "I created a training dataset of simulation inputs and outputs with the help of German PhD student Kostas Giannis. Then, I built a neural network to predict simulation outputs in Python using the Keras Sequential API.",
            },
            {
                imageSrc: "assets/images/results.png",
                cardTitle: "Results",
                description: "I tried many different neural network architectures before finding one that worked well. Once I was finished, I presented the results to all of my professors at Fresno State.",
                cardLink: "assets/files/research-presentation.pdf",
                linkDescription: "See slides"
            }
        ],
        bannerContent: [
            {
                textTitle: "Pharmaceutical Stress vs. Strain Simulations"
            }
        ]
    }
    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <Banner text={this.state.bannerContent[0]} imageSrc="assets/images/data-sample.png" />
                <CardSet cards={this.state.cardContent} />
                <Footer navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)