// Here is where the functional stateless React components live.

const Navigation = (props) => {
    return (
        <ul className="nav">
            {props.navLinks.map(obj => <a href={obj.link}><li className="nav-link">{obj.name}</li></a>)}
        </ul>
    );
}

const Header = (props) => {
    return (
        <header>
            <div className="inner-section">
                <a href="index.html"><h1 className="icon">juan mendoza</h1></a>
                <Navigation navLinks={props.navLinks} />
            </div>
        </header>
    );
}

const TextBox = (props) => {
    let boxContents = [<h1>{props.textTitle}</h1>];
    if (props.textContent) {
        boxContents.push(<p>{props.textContent}</p>);
    }
    if (props.textLink) {
        let linkContent = "Learn More"
        if (props.linkDescription) {
            linkContent = props.linkDescription;
        }
        boxContents.push(<a href={props.textLink}>{linkContent}</a>);
    }
    return (
        <div className="text-box">
            {boxContents}
        </div>
    );
}

const TitleBanner = (props) => {
    let bannerClass = "title-banner";
    if (props.invert) {
        bannerClass = "title-banner reverse";
    }
    return (
        <section id={props.text.id} className={bannerClass}>
            <div className="inner-section">
                <TextBox
                    textTitle={props.text.textTitle}
                />
                <div className="stripe-container">
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                </div>
            </div>
        </section>
    );
}

const Banner = (props) => {
    let bannerClass = "banner";
    if (props.invert) {
        bannerClass = "banner reverse";
    }
    return (
        <section className={bannerClass}>
            <div className="inner-section">
                <TextBox
                    textTitle={props.text.textTitle}
                    textContent={props.text.textContent}
                    textLink={props.text.textLink}
                    linkDescription={props.text.linkDescription}
                />
                <img src={props.imageSrc} alt="No image found."/>
            </div>
        </section>
    );
}

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.content.imageSrc} alt="No image found." />
            <h2 className="card-title">{props.content.cardTitle}</h2>
            <p className="card-description">{props.content.description}</p>
            <a href={props.content.cardLink} className="card-link">Learn More</a>
        </div>
    );
}

const CardSet = (props) => {
    let cardSetContents = (
        <div className="inner-section">
            {props.cards.map(obj => <Card content={obj} />)}
        </div>
    );
    if (props.id) {
        return (
            <section id={props.id} className="card-set">
                {cardSetContents}
            </section>
        );
    }
    else {
        return (
            <section className="card-set">
                {cardSetContents}
            </section>
        );
    }
}

const Footer = (props) => {
    return (
        <footer>
            <div className="inner-section">
                <div className="column-1">
                    <h2>More Links</h2>
                    <ul className="nav">
                        {props.contactList.map(obj => <a href={obj.contactLink}><li className="nav-link">{obj.contactName}</li></a>)}
                    </ul>
                </div>
                <Navigation navLinks={props.navLinks} />
            </div>
        </footer>
    );
}