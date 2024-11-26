import CircuitList from "../../components/CircuitList";
import RaceCountdown from "../../components/Countdown/Race";
import style from "../../components/Countdown/Countdown.module.css";

export default function CircuitPage() {
  return (
    <>
      <section className={style.countdownSection}>
        <RaceCountdown />
      </section>

      <section>
        <CircuitList />
      </section>
    </>
  );
}
