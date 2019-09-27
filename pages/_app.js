import App from "next/app";
import { ThemeProvider } from "styled-components";
import LoadingBar from "react-top-loading-bar";
import Layout from "components/layout";
import theme from "styles/theme";
import darkTheme from "styles/dark";
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

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500)); //1500
  }

  handleRouteComplete = url => {
    var _myself = this;
    setTimeout(function() {
      _myself.LoadingBar.complete();
    }, 300);
  };

  handleRouteStart = url => {
    this.LoadingBar.continuousStart();
  };

  handleRouteError = (err, url) => {
    setTimeout(function() {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
      this.LoadingBar.complete();
      console.log("complete Error " + err);
    }, 300);
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

    Router.events.on("routeChangeStart", this.handleRouteStart);
    Router.events.on("routeChangeComplete", this.handleRouteComplete);
    Router.events.on("routeChangeError", this.handleRouteError);

    if (window.innerWidth < 1200) {
      this.changeTheme();
    }
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.handleRouteStart);
    Router.events.off("routeChangeComplete", this.handleRouteComplete);
    Router.events.off("routeChangeError", this.handleRouteError);
  }

  changeTheme() {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
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
    );
  }
}
