
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
        ]
    }
    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <Banner text="This portfolio is hosted on an Apache server using CloudFare for SSL." imageSrc="assets/images/glasses.jpg" />
                <CardSet cards={this.state.homepageCards} />
                <Footer contactList={this.state.contactList} navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)