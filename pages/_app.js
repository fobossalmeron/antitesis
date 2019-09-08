import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import LoadingBar from "react-top-loading-bar";
import Layout from "../components/layout";
import theme from "../styles/theme";
import darkTheme from "../styles/dark";
import Router from "next/router";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
      hasLoaded: false,
      showBar: false
    };
  }

  //ShouldComponentUpdate sale igual, /nosotros  /nosotros
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 0)); //1500
  }

  componentDidUpdate() {
    console.log("updated");
  }

  handleRouteComplete = url => {
    this.LoadingBar.complete();
    console.log("complete\n\n");
  };

  handleRouteStart = url => {
    this.LoadingBar.continuousStart();
    console.log("start");
  };

  handleRouteError = (err, url) => {
    if (err.cancelled) {
      console.log(`Route to ${url} was cancelled!`);
    }
    this.LoadingBar.complete();
    console.log("complete Error\n\n" + err);
  };

  componentDidMount() {
    this.authenticate().then(() => {
      const loader = document.getElementById("outsideLoader");
      const revealer = document.getElementById("revealer");
      if (loader) {
        this.setState({ hasLoaded: true });
        setTimeout(() => {
          // transition out
          revealer.style.transform = "translateY(-100%)";
          loader.style.opacity = "0";

          setTimeout(() => {
            // remove from DOM
            loader.remove();
            revealer.remove();
          }, 500);
        }, 500);
      }
    });

    console.log("did mount");
    // Router.events.on("routeChangeStart", this.handleRouteStart);
    Router.events.on("routeChangeComplete", this.handleRouteComplete);
    Router.events.on("routeChangeError", this.handleRouteError);
  }

  componentWillUnmount() {
    console.log("will unmount");
    Router.events.off("routeChangeStart", this.handleRouteStart);
    Router.events.off("routeChangeComplete", this.handleRouteComplete);
    Router.events.off("routeChangeError", this.handleRouteError);
  }

  // Esto solo vale la pena si vamos a implementar más cookies,
  // habrá que tripear al respecto
  //
  // componentWillMount(){
  //   this.setState({
  //     isDarkMode: this.getLocalStorage()
  //   });
  // }

  // getLocalStorage() {
  //   if (typeof window !== "undefined") {
  //     console.log("we are running on the client");
  //     let stored = localStorage.getItem("isDarkMode");
  //     if (!stored){
  //       return false
  //     }
  //     return stored === "true"? true : false;
  //   } else {
  //     console.log("we are running on the server");
  //     return false;
  //   }
  // }

  // Y la función change theme debe incluír:
  // localStorage.setItem("isDarkMode", !this.state.isDarkMode);


  changeTheme() {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={this.state.isDarkMode ? darkTheme : theme}>
          <Layout
            changeTheme={this.changeTheme.bind(this)}
            visible={this.state.hasLoaded}
          >
            <LoadingBar
              onRef={ref => (this.LoadingBar = ref)}
              height={8}
              color={
                this.state.isDarkMode
                  ? darkTheme.colors.foreground
                  : theme.colors.foreground
              }
            />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}
