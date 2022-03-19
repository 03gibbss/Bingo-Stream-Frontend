import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ConnectionList } from "./components/ConnectedList/Index";
import { Quad } from "./components/Quad/Index";
import { SimpleScene } from "./components/SimpleScene/Index";
// import { Dual } from "./components/Dual/Index";
import { DualWithCams } from "./components/DualWithCams/Index";
import { GameplayFocus } from "./components/GameplayFocus/Index";

function App() {
  const [OBS1Connected, setOBS1Connected] = useState(false);
  const [OBS2Connected, setOBS2Connected] = useState(false);
  const [OBS3Connected, setOBS3Connected] = useState(false);
  const [vMixConnected, setvMixConnected] = useState(false);

  const [inputs, setInputs] = useState([
    "Team 1 A",
    "Team 1 B",
    "Team 2 A",
    "Team 2 B",
    "Team 3 A",
    "Team 3 B",
    "Team 4 A",
    "Team 4 B",
    "Team 5 A",
    "Team 5 B",
    "Team 6 A",
    "Team 6 B",
  ]);

  const playerNames = ['Ravs', 'Martyn', 'Rythian', 'Daf', 'Ben', 'Zylus', 'Nilesy', 'Daltos'];

  const [loading, setLoading] = useState(true);

  const [scenes, setScenes] = useState({});

  const [currentScene, setCurrentScene] = useState("Multiview");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:3001");

    socketRef.current.on("connect", () => {
      console.log("Websocket connected");
    });

    socketRef.current.on(
      "init",
      ({ OBS1, OBS2, OBS3, vMix, availableInputs }) => {
        setOBS1Connected(OBS1.connected);
        setOBS2Connected(OBS2.connected);
        setOBS3Connected(OBS3.connected);
        setvMixConnected(vMix.connected);
        setInputs(availableInputs);
      }
    );

    socketRef.current.on("currentScene", (scene) => {
      setCurrentScene(scene);
    });

    socketRef.current.on("sceneInfo", (scenes) => {
      console.log(scenes);

      setScenes(scenes);
      setLoading(false);
    });

    return () => socketRef.current.disconnect();
  }, [OBS1Connected, OBS2Connected, OBS3Connected, vMixConnected]);

  const handleChange = (scene, position, input) => {
    console.log("change", scene, position, input);
    socketRef.current.emit("handleChange", scene, position, input);
  };

  const handleTransition = (scene) => {
    socketRef.current.emit("handleTransition", scene);
  };

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Elden Ringo</Navbar.Brand>
              <ConnectionList
                OBS1Connected={OBS1Connected}
                OBS2Connected={OBS2Connected}
                OBS3Connected={OBS3Connected}
                vMixConnected={vMixConnected}
              />
            </Container>
          </Navbar>
          <Container>
            <Row>
              {inputs.map((input, index) => {
                return (
                  <Col key={input}>
                    <SimpleScene
                      scene={`Solo ${input}`}
                      currentScene={currentScene}
                      handleTransition={handleTransition}
                    />
                    <h3>{playerNames[index]}</h3>
                  </Col>
                );
              })}
            </Row>

            <hr></hr>

            <Row>
            <Col>
                <SimpleScene
                  scene="vMix - Intro"
                  currentScene={currentScene}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <SimpleScene
                  scene="vMix - Map"
                  currentScene={currentScene}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <SimpleScene
                  scene="vMix - Rules"
                  currentScene={currentScene}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <SimpleScene
                  scene="Multiview A"
                  currentScene={currentScene}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <SimpleScene
                  scene="All Cams"
                  currentScene={currentScene}
                  handleTransition={handleTransition}
                />
              </Col>
            </Row>

            <hr></hr>

            <Row>
              <Col>
                <Quad
                  scene="Quad A"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <Quad
                  scene="Quad B"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
            </Row>

            <hr></hr>

            <Row>
              <Col>
                <DualWithCams
                  scene="Dual with Cams A"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <DualWithCams
                  scene="Dual with Cams B"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
            </Row>

            <hr></hr>

            <Row>
              <Col>
                <GameplayFocus
                  scene="All Gameplay A"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
              <Col>
                <GameplayFocus
                  scene="All Gameplay B"
                  inputs={inputs}
                  scenes={scenes}
                  currentScene={currentScene}
                  handleChange={handleChange}
                  handleTransition={handleTransition}
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
