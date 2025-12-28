import React from "react";
import styles from "./WorkingProcess.module.css";
import Process_one from "../../assets/work-one.jpg";
import Process_two from "../../assets/work-two.jpg";
import Process_three from "../../assets/work-three.jpg";
import Process_four from "../../assets/work-four.jpg";

const steps = [
  {
    num: "01",
    img: Process_one,
    title: "PROCESSING",
    desc: "This draw frame sliver is fed into simplex machines, which can handle any quantity."
  },
  {
    num: "02",
    img: Process_two,
    title: "PREPARATORY",
    desc: "The mixing department receives the cotton fibre to produce vibrant colors using computerized mixing systems."
  },
  {
    num: "03",
    img: Process_three,
    title: "RELIABLE INTEGRATION",
    desc: "Spinning is a process where fibres pass through processes like Blow Room, Carding, Combing, Simplex, and Ring Frame."
  },
  {
    num: "04",
    img: Process_four,
    title: "FINISHING",
    desc: "Best melange yarn is delivered to the customer after quality control tests and scrupulous inspections."
  }
];

const WorkingProcess = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.workTitle}>
        <h3>Working Process</h3>
        <h2>How It Works</h2>
      </div>
      <h2 className={styles.description}>
        The name Sowthanya signifies advanced quality color melange yarn for hosiery, woven, and home textiles.
      </h2>

      <div className={styles.processContainer}>
        {steps.map((step) => (
          <div className={styles.step} key={step.num}>
            <div className={styles.circle}>
              <span>{step.num}</span>
              <img src={step.img} alt={step.title} />
            </div>
            <h2>{step.title}</h2>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
