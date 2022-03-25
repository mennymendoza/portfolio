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
        bannerContent: [
            {
                textTitle: "Education",
                textContent: "I will be graduating from Fresno State University with a Bachelor's Degree in Computer Science in May 2022.",
            },
            {
                textTitle: "Hobbies",
                textContent: "I love to create things. I have several personal projects (mostly video games) in the works. Other hobbies include playing guitar, playing piano, recording music and cooking. My favorite type of book is non-fiction.",
            }
        ]
    }
    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <Banner text={this.state.bannerContent[0]} imageSrc="assets/images/fresno-state-bulldog.png" />
                <Banner text={this.state.bannerContent[1]} imageSrc="assets/images/piano.jpg" invert={true}/>
                <Footer navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)