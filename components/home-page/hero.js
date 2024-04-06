import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Hosein.png"
          alt="this is Hosein"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hosein</h1>
      <p>I want to show you how I tried to become a programmer</p>
    </section>
  );
}

export default Hero;
