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

const Banner = (props) => {
    return (
        <section className="banner">
            <div className="inner-section">
                <h1>{props.text}</h1>
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
    return (
        <section className="card-set">
            <div className="inner-section">
                {props.cards.map(obj => <Card content={obj} />)}
            </div>
        </section>
    );
}

const Footer = (props) => {
    return (
        <footer>
            <div className="inner-section">
                <div className="column-1">
                    <h2>Contact Info</h2>
                    <ul className="nav">
                        {props.contactList.map(obj => <a href={obj.contactLink}><li className="nav-link">{obj.contactName}</li></a>)}
                    </ul>
                </div>
                <Navigation navLinks={props.navLinks} />
            </div>
        </footer>
    );
}