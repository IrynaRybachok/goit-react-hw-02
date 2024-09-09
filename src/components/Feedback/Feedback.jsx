import s from './Feedback.module.css'
const Feedback = ({quantity, feedbackPositive}) =>{
    return (
        <>
            <ul className={s.list}>
                <li className={s.item}>Good: {quantity.good}</li>
                <li className={s.item}>Neutral: {quantity.neutral}</li>
                <li className={s.item}>Bad: {quantity.bad}</li>
            </ul>
            <p className={s.item}>Positive: {feedbackPositive}%</p>
        </>
    )
}

export default Feedback;