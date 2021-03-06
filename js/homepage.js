
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
        homepageCards: [
            {
                imageSrc: "assets/images/monitor.jpg",
                cardTitle: "Work Experience",
                description: "I have experience in web design, software engineering and academic research.",
                cardLink: "experience.html"
            },
            {
                imageSrc: "assets/images/keyboard.jpg",
                cardTitle: "Research",
                description: "I've done research projects in the fields of cybersecurity and machine learning.",
                cardLink: "research.html"
            },
            {
                imageSrc: "assets/images/setup.jpg",
                cardTitle: "Projects",
                description: "I've built websites, web applications and neural networks for fun.",
                cardLink: "projects.html"
            }
        ],
        bannerContent: {
            textTitle: "This portfolio is hosted on an Apache server using CloudFare for SSL."
        },
        width: window.innerWidth
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth})
    }

    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <Banner text={this.state.bannerContent} imageSrc="assets/images/server.jpg" />
                <CardSet cards={this.state.homepageCards} />
                <Footer navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)