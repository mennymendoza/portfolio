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
        bannerContent: [
            {
                textTitle: "Gomoku",
                textContent: "Web implementation of the board game gomoku. Built with pure HTML, CSS, Javascript and PHP. Utilizes a MySQL database for the backend.",
            },
            {
                textTitle: "Rubik’s Cube Solver",
                textContent: "Implementation of three machine learning algorithms to solve a Rubik’s Cube. Built my own Rubik’s Cube library to be used for other purposes. Can be used alone or with the draw-cube library in pygame.",
                textLink: "https://github.com/mennymendoza/rubiks-cube-solver",
                linkDescription: "View repo"
            }
        ]
    }
    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <Banner text={this.state.bannerContent[0]} imageSrc="assets/images/glasses.jpg" />
                <Banner text={this.state.bannerContent[1]} imageSrc="assets/images/glasses.jpg" invert={true}/>
                <Footer contactList={this.state.contactList} navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)