import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { GlobalStyles } from "./styles";

// Layout
import { Container, Col } from "styled-bootstrap-grid";
import Masonry from "react-masonry-component";

// Card
import { Card } from "./components/card/";
import { Avatar } from "./components/avatar/";
import { Box } from "./utilities";
import { Badge } from "./components/avatar/Badge";
import { Image } from "./components/image/Image";
import { Tag } from "./components/tag/Tag";

// Styles
import "./sass/config.scss";

// Footer
import Footer from "./template/Footer";
import Typography from "./components/typography";

// Toggle theme
import { Toggle } from "./components/toggle/ToggleTheme";
import Sun from "./components/toggle/Sun";
import Moon from "./components/toggle/Moon";

// Emoji
import Twemoji from "react-twemoji";

// App

const App = () => {
  const [mode, setMode] = useState("dark");
  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [mode]);

  return (
    <ThemeProvider theme={mode === "light" ? light : dark}>
      <div className="App">
        <GlobalStyles />

        <Container>
          <Box display="flex" justifyContent="center" pt="3rem" pb="3rem">
            <Toggle onClick={() => toggleTheme()}>
              {mode === "light" ? (
                <Sun color="orange" size="35px" />
              ) : (
                <Moon color="orange" size="35px" />
              )}
            </Toggle>
          </Box>
        </Container>

        <Container>
          <Masonry className="row js-animation">

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Card.Header>
                  <Box
                    className="card-media"
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Box
                      as="a"
                      href="/#"
                      mr="1rem"
                      position="relative"
                      display="inline-flex"
                    >
                      <Badge online={true}></Badge>
                      <Avatar
                        size={60}
                        radius={true}
                        src="https://randomuser.me/api/portraits/women/60.jpg"
                      />
                    </Box>
                    <Box className="card-media-body">
                      <Card.Text tag="h5">
                        <Card.Link href="/#">Bessie Cooper</Card.Link>
                      </Card.Text>
                      <Card.Text tag="span">Web designer</Card.Text>
                    </Box>
                  </Box>
                </Card.Header>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Card.Image
                  alt="Image"
                  src="https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Card.Image>
                <Card.Body>
                  <Box mb="1rem">
                    <Card.Text tag="h5">Pintura Abstracta</Card.Text>
                    <Card.Text tag="span">23 de mayo de 2018</Card.Text>
                  </Box>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Box position="relative">
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    left={0}
                    p="1.5rem 1.5rem"
                  >
                    <Tag href="/#" variant="primary">
                      Photography
                    </Tag>
                    <Tag href="/#" variant="primary">
                      Art
                    </Tag>
                  </Box>
                  <Card.Image
                    alt="Image"
                    src="https://images.pexels.com/photos/4856662/pexels-photo-4856662.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  ></Card.Image>
                </Box>
                <Card.Body>
                  <Box mb="1rem">
                    <Card.Text tag="h5">New</Card.Text>
                    <Card.Text tag="span">Published on April 1, 2016</Card.Text>
                  </Box>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <Twemoji tag="span" options={{ className: "twemoji" }}>
                      😋
                    </Twemoji>{" "}
                    <Twemoji tag="span" options={{ className: "twemoji" }}>
                      🤪
                    </Twemoji>{" "}
                    <Twemoji tag="span" options={{ className: "twemoji" }}>
                      😬
                    </Twemoji>{" "}
                    adipiscing elit, sed do eiusmod
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Card.Body>
                  <Box mb="1rem">
                    <Card.Text tag="h4">New art</Card.Text>
                    <Card.Text tag="span">
                      Published on January 19, 2019
                    </Card.Text>
                    <Box mt=".5rem">
                      <Card.Link href="/#">Editorial, Arts & Culture</Card.Link>
                    </Box>
                  </Box>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </Card.Text>
                </Card.Body>
                <Card.Image
                  alt="Image"
                  src="https://images.pexels.com/photos/1070536/pexels-photo-1070536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Card.Image>
                <Card.Footer>
                  <Box
                    className="card-media"
                    display="flex"
                    alignItems="center"
                  >
                    <Box
                      as="a"
                      href="/#"
                      mr="1rem"
                      position="relative"
                      display="inline-flex"
                    >
                      <Avatar
                        size={50}
                        radius={true}
                        src="https://randomuser.me/api/portraits/men/25.jpg"
                      />
                    </Box>
                    <Box className="card-media-body">
                      <Card.Text tag="h5">
                        <Card.Link href="/#">Alessandro</Card.Link>
                      </Card.Text>
                      <Card.Text tag="span">Graphic artist</Card.Text>
                    </Box>
                  </Box>
                </Card.Footer>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Card.Header
                  children={
                    <Box
                      className="card-media"
                      display="flex"
                      alignItems="flex-start"
                    >
                      <Box as="a" href="/#" mr="1rem">
                        <Avatar
                          size={60}
                          radius={true}
                          src="https://randomuser.me/api/portraits/women/75.jpg"
                        />
                      </Box>
                      <Box className="card-media-body">
                        <Card.Text tag="h5">
                          <Card.Link href="/#">Emma</Card.Link>
                        </Card.Text>
                        <Typography tag="span">
                          Photographer{" "}
                          <Twemoji
                            tag="span"
                            options={{ className: "twemoji" }}
                          >
                            📷
                          </Twemoji>
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
                <Image
                  alt="Image"
                  src="https://images.pexels.com/photos/3166677/pexels-photo-3166677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Image>
                <Card.Body>
                  <Box mb="1rem">
                    <Card.Text tag="h5">New notice</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore{" "}
                      <Twemoji tag="span" options={{ className: "twemoji" }}>
                        ❤
                      </Twemoji>{" "}
                      <Twemoji tag="span" options={{ className: "twemoji" }}>
                        ❤
                      </Twemoji>{" "}
                      <Twemoji tag="span" options={{ className: "twemoji" }}>
                        ❤
                      </Twemoji>{" "}
                      et dolore magna aliqua
                    </Card.Text>
                  </Box>
                  <Box>
                    <Tag href="/#" variant="warning">
                      Photography
                    </Tag>
                    <Tag href="/#" variant="info">
                      Art
                    </Tag>
                  </Box>
                </Card.Body>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Card.Header>
                  <Box className="card-media" display="flex">
                    <Box as="a" href="/#" mr="1rem">
                      <Avatar
                        size={60}
                        radius={true}
                        src="	https://randomuser.me/api/portraits/men/35.jpg"
                      />
                    </Box>
                    <Box className="card-media-body">
                      <Card.Text tag="h5">
                        <Card.Link href="/#">Jhonny</Card.Link>
                      </Card.Text>
                      <Card.Text tag="span">Programer</Card.Text>
                    </Box>
                  </Box>
                </Card.Header>
              </Card>
            </Col>

            <Col col xl="4" lg="4" md="6" sm="12" xs="12">
              <Card mb="1.5rem">
                <Box position="relative">
                  <Box
                    display="flex"
                    position="absolute"
                    top={0}
                    bottom={0}
                    right={0}
                    left={0}
                    p="1.5rem"
                    bg="#000000c7"
                    zIndex="1"
                    children={
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <Box mb="auto">
                          <ThemeProvider
                            theme={{
                              color: "white"
                            }}
                          >
                            <Card.Text tag="h5">News</Card.Text>
                            <Card.Text tag="span">23 de mayo de 2018</Card.Text>
                          </ThemeProvider>
                        </Box>
                        <Box mt="auto">
                          <ThemeProvider
                            theme={{
                              color: "white"
                            }}
                          >
                            <Card.Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod
                            </Card.Text>
                          </ThemeProvider>
                        </Box>
                      </Box>
                    }
                  ></Box>
                  <Card.Image
                    alt="Image"
                    src="https://images.pexels.com/photos/6145852/pexels-photo-6145852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  ></Card.Image>
                </Box>
                <Card.Body>
                  <Box mb="1rem">
                    <Card.Text tag="h5">Fotografía antigua</Card.Text>
                    <Card.Text tag="span">23 de mayo de 2018</Card.Text>
                  </Box>
                </Card.Body>
              </Card>
            </Col>
          </Masonry>
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
