import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.pexels.com/photo/mountain-in-fog-against-sky-background-6930919/"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital StoryTellers</h1>
          <h2>HadnCrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quis ipsa explicabo esse numquam, vitae neque molestias cum itaque?
            Pariatur modi minus odio cupiditate eaque nesciunt explicabo dolorem
            fugiat? Natus, ullam, aliquid rerum odit eligendi, ducimus possimus
            cum maiores facere autem maxime excepturi molestiae? Excepturi vel
            perferendis corrupti ratione autem.
          </p>
        </div>
        <div className={styles.item}>
          <h2>What We Do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio
            eum, eius similique expedita saepe nostrum autem illum tenetur dolor
            quidem! Nesciunt pariatur accusamus debitis animi repellendus totam
            exercitationem voluptas eius incidunt magni enim ratione suscipit
            repellat, <br />error distinctio numquam eaque blanditiis quam,
            <br />necessitatibus vero.
          </p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  );
};

export default About;
