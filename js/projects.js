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
                textTitle: "Portfolio",
                textContent: "This portfolio was built with ReactJS using the Babel transpiler. I used CSS for styling. I also used Figma to design a prototype.",
            },
            {
                textTitle: "Gomoku",
                textContent: "Web implementation of the board game gomoku. Built with pure HTML, CSS, Javascript and PHP. Utilizes a MySQL database for the backend.",
                textLink: "https://github.com/mennymendoza/gomoku",
                linkDescription: "View repo"
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
                <Banner text={this.state.bannerContent[0]} imageSrc="assets/images/figma.png" />
                <Banner text={this.state.bannerContent[1]} imageSrc="assets/images/gomoku.png" invert={true} />
                <Banner text={this.state.bannerContent[2]} imageSrc="assets/images/rubiks-cube.jpg" />
                <Footer navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)