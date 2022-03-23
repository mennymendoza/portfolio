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
                textTitle: "Education",
                textContent: "I will be graduating from Fresno State University with a Bachelor's Degree in Computer Science in May 2022.",
            },
            {
                textTitle: "Hobbies",
                textContent: "I love to build things. I have several personal projects (mostly video games) in the works. Other hobbies include playing guitar, playing piano, recording music and cooking. My favorite type of book is non-fiction.",
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