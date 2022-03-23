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
        contactList: [
            {
                contactName: "LinkedIn",
                contactLink: "https://www.linkedin.com/in/juan-mendoza-dev/"
            },
            {
                contactName: "GitHub",
                contactLink: "https://github.com/mennymendoza"
            },
            {
                contactName: "Email",
                contactLink: "Juanmendoza97@mail.fresnostate.edu"
            }
        ],
        cardContent: [
            {
                imageSrc: "assets/images/motivation.png",
                cardTitle: "Motivation",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                cardLink: "experience.html"
            },
            {
                imageSrc: "assets/images/approach.png",
                cardTitle: "Approach",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                cardLink: "research.html"
            },
            {
                imageSrc: "assets/images/results.png",
                cardTitle: "Results",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                cardLink: "projects.html"
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
                <Footer contactList={this.state.contactList} navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)