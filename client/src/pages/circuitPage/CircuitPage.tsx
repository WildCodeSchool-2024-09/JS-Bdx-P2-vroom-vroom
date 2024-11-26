import CircuitList from "../../components/CircuitList";
import style from "../../components/Countdown/Countdown.module.css";
import RaceCountdown from "../../components/Countdown/Race";

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
