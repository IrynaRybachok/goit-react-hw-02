import s from './Description.module.css'
const Description = () => {
    return (
        <section className={s.container}>
            <h1 className={s.title}>Sip Happens Café</h1>
            <p className={s.text}>Please leave your feedback about our service by selecting one of the options below.</p>
        </section>
    )
}

export default Description;