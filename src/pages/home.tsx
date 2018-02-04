import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return <section className="cover-section text-center">
            <div className="video-background">
                <div className="video-foreground">
                    <iframe src="https://www.youtube.com/embed/3NTOiZzWa2k?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=3NTOiZzWa2k"

                        frameBorder="0"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">
                    <div className="inner">
                        <Link className="nav-link"
                            to="/">
                            <h3 className="masthead-brand">Wilson Hobbs</h3>
                        </Link>
                        <nav className="nav nav-masthead justify-content-center">
                            <Link className="nav-link active"
                                to="/">Home</Link>
                            <Link className="nav-link"
                                to="/code">Code</Link>
                            <Link className="nav-link"
                                to="/films">Films</Link>
                            <Link className="nav-link"
                                to="/contact">Contact</Link>
                        </nav>
                    </div>
                </header>

                <main role="main"
                    className="inner cover">
                    <h1 className="cover-heading">Hi, I'm Wilson Hobbs.</h1>
                    <p className="lead">I am a creator of a lot of various digital things. I write code, play music, and make films. I love open
                source, the web, tv shows, and making meaningful films (which to this point I have not succeeded in doing).</p>
                    <p className="lead">
                        <Link className="btn btn-lg btn-primary mr-2"
                            to="/code">Code</Link>

                        <Link className="btn btn-lg btn-secondary"
                            to="/films">Films</Link>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Also, find me on Twitter as
                    <a href="https://twitter.com/wbhob"
                                target="_new">@wbhob</a>.</p>
                    </div>
                </footer>
            </div>
        </section>
    }
}
