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
        bmdCards: [
            {
                imageSrc: "assets/images/monitor.jpg",
                cardTitle: "Wed Design",
                description: "I designed a marketing website to sell Stage Projectors and a few marketing webpages for the main BMD website using Webflow.",
                cardLink: "experience.html"
            },
            {
                imageSrc: "assets/images/keyboard.jpg",
                cardTitle: "Ruby on Rails",
                description: "I also ran queries with Ruby on Rails and wrote Ruby code for deployment on a production server.",
                cardLink: "research.html"
            }
        ],
        housingCards: [
            {
                imageSrc: "assets/images/monitor.jpg",
                cardTitle: "Web Design",
                description: "I redesigned the entire Student Housing frontend to match the new Fresno State website redesign.",
                cardLink: "experience.html"
            },
            {
                imageSrc: "assets/images/keyboard.jpg",
                cardTitle: "Content",
                description: "I also updated content on the Fresno State Student Housing website to ensure it remained relevant.",
                cardLink: "research.html"
            },
            {
                imageSrc: "assets/images/setup.jpg",
                cardTitle: "Administration",
                description: "I was involved in several administrative tasks, such as planning events and hiring a new coordinator.",
                cardLink: "projects.html"
            }
        ],
        titleBannerContent: [
            {
                id: "bmd-banner",
                textTitle: "Broadway Media Distribution"
            },
            {
                id: "fs-housing-banner",
                textTitle: "Fresno State Student Housing"
            }
        ]
    }
    render() {
        return (
            <div className="main-container">
                <Header navLinks={this.state.navLinks} />
                <TitleBanner text={this.state.titleBannerContent[0]} />
                <CardSet id="bmd-cardset" cards={this.state.bmdCards} />
                <TitleBanner text={this.state.titleBannerContent[1]} invert={true}/>
                <CardSet id="fs-housing-cardset" cards={this.state.housingCards} />
                <Footer contactList={this.state.contactList} navLinks={this.state.navLinks} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)