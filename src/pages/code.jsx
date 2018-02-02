import { Component, h } from 'preact';
import { Link } from 'preact-router';

export class Code extends Component {
    render() {
        return [
            (<section class="text-center header-code minh-25">
                <div class="d-flex p-3 flex-column">
                    <header class="masthead mb-auto">
                        <div class="inner">
                            <Link class="nav-link"
                                href="./">
                                <h3 class="masthead-brand">Wilson Hobbs</h3>
                            </Link>

                            <nav class="nav nav-masthead justify-content-center">
                                <Link class="nav-link"
                                    href="/">Home</Link>
                                <Link class="nav-link active"
                                    href="/code">Code</Link>
                                <Link class="nav-link"
                                    href="/films">Films</Link>
                                <Link class="nav-link"
                                    href="/contact">Contact</Link>
                            </nav>
                        </div>
                    </header>
                    <main role="main"
                        class="inner cover mt-5">
                        <h1 class="cover-heading">Code</h1>

                    </main>

                </div>
            </section>),

            (<section class="minh-75 d-flex text-center align-items-center justify-items-center" >
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 offset-sm-2">
                            <h1>I'm a passionate open sourcer.</h1>
                            <p class="lead">I love making code that other people can love and use. I also make full-stack web apps, but right now,
                        I'm obsessed with
                        <a href="https://orbital.sh"
                                    target="_new">Orbital</a> and
                        <a href="https://district.rocks"
                                    target="_new">District</a>.</p>

                        </div>
                    </div>
                </div>
            </section>),

            (<section class="minh-75 d-flex bg-grey district align-items-center justify-items-center" >
                <div class="container">
                    <div class="row align-items-center justify-items-center">
                        <div class="col-sm-3">
                            <img src="./static/img/district.png"
                                alt=""
                                class="w-100 p-4" />
                        </div>
                        <div class="col-sm-8 offset-sm-1 text-sm-left text-center">
                            <h1>Making REST fun again.</h1>
                            <p class="lead">District combines the awesomeness of Angular's dependency injection with REST APIs. District makes it
                        super easy to start an application quickly, and to maintain it for years to come with high power
                        and performance. We're building tons of tools and packages to create an ecosystem that works elegantly
                        both for the simplest servers, as well as for massive enterprise applications. </p>
                            <p class="lead">
                                <a href="https://district.rocks"
                                    target="_new">https://district.rocks</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>),
            (<section class="minh-75 d-flex bg-dark orbital align-items-center justify-items-center" >
                <div class="container">
                    <div class="row align-items-center justify-items-center">
                        <div class="col-sm-3">
                            <img src="./static/img/orbital.png"
                                alt=""
                                class="w-100 p-4" />
                        </div>
                        <div class="col-sm-8 offset-sm-1 text-sm-left text-center">
                            <h1>The CLI Framework from the future.</h1>
                            <p class="lead">Orbital is a futuristic framework for CLIs. The current state of CLIs in Node.JS are inflexible and inconsistent.
                        With Orbital, we've decided from the beginning to combine all the best parts of all the existing
                        solutions to make one extremely flexible, simple CLI solution. With features like dependency injection,
                        decorator syntax sugar, type checking, and absolutely beautiful help generation, Orbital is the future
                        of the command line.</p>
                            <p class="lead">
                                <a href="https://orbital.sh"
                                    target="_new">https://orbital.sh</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>),

            (<section class="minh-75 d-flex align-items-center justify-items-center">
                <div class="container align-items-center justify-items-center">
                    <div class="row">
                        <div class="col-sm-12 text-center mb-5 mt-3">
                            <h3 >Here are some other projects I've contributed to, or have made tools for.</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 text-center">
                            <img src="./static/img/ionic.png"
                                class="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div class="col-sm-3 text-center">
                            <img src="./static/img/angular.png"
                                class="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div class="col-sm-3 text-center">
                            <img src="./static/img/nest.png"
                                class="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div class="col-sm-3 text-center">
                            <img src="./static/img/ts.png"
                                class="w-sm-100 w-75"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>)
        ]
    }
}
