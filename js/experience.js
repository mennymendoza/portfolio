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
                imageSrc: "assets/images/bmd-sample.jpg",
                cardTitle: "Web Design",
                description: "I designed a marketing website and a few webpages for the main BMD website using Webflow. I've included a prototype I designed in Figma with temporary text.",
                cardLink: "assets/files/bmd-prototype.pdf",
                linkDescription: "See sample"
            },
            {
                imageSrc: "assets/images/ruby-on-rails.jpg",
                cardTitle: "Ruby on Rails",
                description: "I also ran queries with Ruby on Rails and wrote Ruby code for deployment on a production server."
            }
        ],
        housingCards: [
            {
                imageSrc: "assets/images/fs-housing-sample.png",
                cardTitle: "Web Design",
                description: "I redesigned the entire Student Housing frontend to match the new Fresno State website redesign."
            },
            {
                imageSrc: "assets/images/keyboard.jpg",
                cardTitle: "Content Maintenance",
                description: "I also updated content on the Fresno State Student Housing website to ensure it remained relevant."
            },
            {
                imageSrc: "assets/images/admin-stock.jpg",
                cardTitle: "Administration",
                description: "I was involved in several administrative tasks, such as planning events and hiring a new coordinator."
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