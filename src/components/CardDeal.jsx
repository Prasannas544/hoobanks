import { card } from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Find a better card deal<br className="sm:block hidden"/>
        ine few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purusin sfasf as
        vdas d ienrte fcunti oc, fa kfdhfh fhakshfasfhasj hasjkgfagf hasjf.</p>

        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className="w-[100%] h-[100%]"/>
      </div>

    </section>
  )


export default CardDeal