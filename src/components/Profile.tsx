import { useContext } from "react";

import { ChallengesContext } from "../hooks/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luizhttps.png" alt="Luiz Otavio" />
      <div>
        <strong>Luiz Otavio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}