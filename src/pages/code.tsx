import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Code extends React.Component {
    render() {
        return (<div>
            <section className="text-center header-code minh-25">
                <div className="d-flex p-3 flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <Link className="nav-link"
                                to="./">
                                <h3 className="masthead-brand">Wilson Hobbs</h3>
                            </Link>

                            <nav className="nav nav-masthead justify-content-center">
                                <Link className="nav-link"
                                    to="/">Home</Link>
                                <Link className="nav-link active"
                                    to="/code">Code</Link>
                                <Link className="nav-link"
                                    to="/films">Films</Link>
                                <Link className="nav-link"
                                    to="/contact">Contact</Link>
                            </nav>
                        </div>
                    </header>
                    <main role="main"
                        className="inner cover mt-5">
                        <h1 className="cover-heading">Code</h1>

                    </main>

                </div>
            </section>

            <section className="minh-75 d-flex text-center align-items-center justify-items-center" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <h1>I'm a passionate open sourcer.</h1>
                            <p className="lead">I love making code that other people can love and use. I also make full-stack web apps, but right now,
                        I'm obsessed with
                        <a href="https://orbital.sh"
                                    target="_new">Orbital</a> and
                        <a href="https://district.rocks"
                                    target="_new">District</a>.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="minh-75 d-flex bg-grey district align-items-center justify-items-center" >
                <div className="container">
                    <div className="row align-items-center justify-items-center">
                        <div className="col-sm-3">
                            <img src="/static/img/district.png"
                                alt=""
                                className="w-100 p-4" />
                        </div>
                        <div className="col-sm-8 offset-sm-1 text-sm-left text-center">
                            <h1>Making REST fun again.</h1>
                            <p className="lead">District combines the awesomeness of Angular's dependency injection with REST APIs. District makes it
                        super easy to start an application quickly, and to maintain it for years to come with high power
                        and performance. We're building tons of tools and packages to create an ecosystem that works elegantly
                        both for the simplest servers, as well as for massive enterprise applications. </p>
                            <p className="lead">
                                <a href="https://district.rocks"
                                    target="_new">https://district.rocks</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="minh-75 d-flex bg-dark orbital align-items-center justify-items-center">
                <div className="container">
                    <div className="row align-items-center justify-items-center">
                        <div className="col-sm-3">
                            <img src="../../static/img/orbital.png"
                                alt=""
                                className="w-100 p-4" />
                        </div>
                        <div className="col-sm-8 offset-sm-1 text-sm-left text-center">
                            <h1>The CLI Framework from the future.</h1>
                            <p className="lead">Orbital is a futuristic framework for CLIs. The current state of CLIs in Node.JS are inflexible and inconsistent.
                        With Orbital, we've decided from the beginning to combine all the best parts of all the existing
                        solutions to make one extremely flexible, simple CLI solution. With features like dependency injection,
                        decorator syntax sugar, type checking, and absolutely beautiful help generation, Orbital is the future
                        of the command line.</p>
                            <p className="lead">
                                <a href="https://orbital.sh"
                                    target="_new">https://orbital.sh</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="minh-75 d-flex align-items-center justify-items-center">
                <div className="container align-items-center justify-items-center">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-5 mt-3">
                            <h3 >Here are some other projects I've contributed to, or have made tools for.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src="./static/img/ionic.png"
                                className="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div className="col-sm-3 text-center">
                            <img src="./static/img/angular.png"
                                className="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div className="col-sm-3 text-center">
                            <img src="./static/img/nest.png"
                                className="w-sm-100 w-75"
                                alt="" />
                        </div>
                        <div className="col-sm-3 text-center">
                            <img src="./static/img/ts.png"
                                className="w-sm-100 w-75"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}
