import { Component, h } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
    render() {
        console.log('loading home')
        return <section class="cover-section text-center">
            <div class="video-background">
                <div class="video-foreground">
                    <iframe src="https://www.youtube.com/embed/3NTOiZzWa2k?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=3NTOiZzWa2k"

                        frameborder="0"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                    <div class="inner">
                        <h3 class="masthead-brand" href="/">Wilson Hobbs</h3>
                        <nav class="nav nav-masthead justify-content-center">
                            <Link class="nav-link active"
                                href="/">Home</Link>
                            <Link class="nav-link"
                                href="/code">Code</Link>
                            <Link class="nav-link"
                                href="/films">Films</Link>
                            <Link class="nav-link"
                                href="/contact">Contact</Link>
                        </nav>
                    </div>
                </header>

                <main role="main"
                    class="inner cover">
                    <h1 class="cover-heading">Hi, I'm Wilson Hobbs.</h1>
                    <p class="lead">I am a creator of a lot of various digital things. I write code, play music, and make films. I love open
                source, the web, tv shows, and making meaningful films (which to this point I have not succeeded in doing).</p>
                    <p class="lead">
                        <Link class="btn btn-lg btn-primary"
                            href="/code">Code</Link>

                        <Link class="btn btn-lg btn-secondary"
                            href=".films">Films</Link>
                    </p>
                </main>

                <footer class="mastfoot mt-auto">
                    <div class="inner">
                        <p>Also, find me on Twitter as
                    <a href="https://twitter.com/wbhob"
                                target="_new">@wbhob</a>.</p>
                    </div>
                </footer>
            </div>
        </section>
    }
}
