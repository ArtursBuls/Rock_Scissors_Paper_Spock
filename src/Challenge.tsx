import React, { useState } from "react";
import "flexboxgrid";
import { Button } from "../src/components/button/Button";
import computerImage from "../src/assets/4804443.jpg";
import mineImage from "../src/assets/me.jpeg";
import tieImage from "../src/assets/tie.jpg";
import questionMarkImage from "../src/assets/Questionmark.png";
import styles from "./styles/Challenge.module.scss";

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const Challenge = () => {
  const [myChoise, setMyChoise] = useState("");
  const [aiChoise, setAiChoise] = useState("");
  const [round, setRound] = useState(0);
  const [losses, setLosses] = useState(0);
  const [wins, setWins] = useState(0);
  const [ties, setTies] = useState(0);
  const [computerWins, setComputerWins] = useState(false);
  const [humanWins, setHumanWins] = useState(false);
  const [tieStatus, setTieStatus] = useState(false);

  const startNewRound = () => {
    setAiChoise("");
    setMyChoise("");
    const randomChoice =
      choices[Math.floor(Math.random() * (choices.length))];
    setAiChoise(randomChoice);
    setRound(round + 1);
    setHumanWins(false);
    setComputerWins(false);
    setTieStatus(false);
  };

  const gameRulesHandler = () => {
    if (myChoise) {
      if (myChoise === aiChoise) {
        setTies(ties + 1);
        setTieStatus(true);
        setHumanWins(false);
        setComputerWins(false);
      } else if (
        (myChoise === "scissors" && aiChoise === "paper") ||
        (myChoise === "rock" && aiChoise === "lizard") ||
        (myChoise === "paper" && aiChoise === "rock") ||
        (myChoise === "lizard" && aiChoise === "spock") ||
        (myChoise === "spock" && aiChoise === "scissors") ||
        (myChoise === "scissors" && aiChoise === "lizard") ||
        (myChoise === "lizard" && aiChoise === "paper") ||
        (myChoise === "paper" && aiChoise === "spock") ||
        (myChoise === "rock" && aiChoise === "scissors") ||
        (myChoise === "spock" && aiChoise === "rock")
      ) {
        setWins(wins + 1);
        setHumanWins(true);
        setComputerWins(false);
        setTieStatus(false);
      } else {
        setLosses(losses + 1);
        setHumanWins(false);
        setComputerWins(true);
        setTieStatus(false);
      }
    }
  };

  const resetHandler = () => {
    setRound(0);
    setWins(0);
    setLosses(0);
    setTies(0);
    setAiChoise("");
    setComputerWins(false);
    setHumanWins(false);
    setTieStatus(false);
  };

  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className="row">
          <h1 className={styles.header}>
            Rock, paper, scissors, lizard, Spock game
          </h1>
        </div>
      </div>
      <div className={styles.section}>
        <div className="row center-xs">
          <div className="col-xs-3">
            <div className={styles.options}>
              <h3 className={styles.subHeaders}>Options:</h3>
            </div>
            <div>
              <Button label="New round" onClick={startNewRound} />
            </div>
            <div>
              <Button label="Round result" onClick={gameRulesHandler} />
            </div>
            <div>
              <Button label="Clear all" onClick={resetHandler} />
            </div>
            <h4 className={styles.myChoise}>Me: {myChoise}</h4>
            <h4 className={styles.computerChoise}>Computer: {aiChoise}</h4>
            <h4>Rounds: {round}</h4>
            <h3 className={styles.myWins}>My wins: {wins}</h3>
            <h3 className={styles.myLosses}>My losses: {losses}</h3>
            <h4>Ties: {ties}</h4>
          </div>
          <div className="col-xs-3">
            <div className={styles.winnerWrapper}>
              <h3 className={styles.winner}>Winner:</h3>
              <h1 className={styles.winnerText}>
                {humanWins ? (
                  <img
                    src={mineImage}
                    alt="MineImage"
                    className={styles.meImage}
                  />
                ) : computerWins ? (
                  <img
                    src={computerImage}
                    alt="Computer"
                    className={styles.compImage}
                  />
                ) : tieStatus ? (
                  <img
                    src={tieImage}
                    alt="tieImage"
                    className={styles.tieImage}
                  />
                ) : (
                  <img
                    src={questionMarkImage}
                    alt="questionMarkImage"
                    className={styles.questionMark}
                  />
                )}
              </h1>
            </div>
          </div>
          <div className="col-xs-3">
            <div className={styles.weapons}>
              <h3 className={styles.subHeaders}>Weapons:</h3>
            </div>
            <div>
              <Button label="Rock" onClick={() => setMyChoise("rock")} />
            </div>
            <div>
              <Button
                label="Scissors"
                onClick={() => setMyChoise("scissors")}
              />
            </div>
            <div>
              <Button label="Paper" onClick={() => setMyChoise("paper")} />
            </div>
            <div>
              <Button label="Lizard" onClick={() => setMyChoise("lizard")} />
            </div>
            <div>
              <Button label="Spock" onClick={() => setMyChoise("spock")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
