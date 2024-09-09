import s from './Options.module.css';
const Options = ({handleClickFeedback, resetFeedback, resetBtn }) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <button className={s.itemBtn} onClick={() => handleClickFeedback ('good')}>Good</button>
            </li>
            <li className={s.item}>
                <button className={s.itemBtn} onClick={() => handleClickFeedback ('neutral')}>Neutral</button>
            </li>
            <li className={s.item}>
                <button className={s.itemBtn} onClick={() => handleClickFeedback ('bad')}>Bad</button>
            </li>
            {resetFeedback >=1 && 
            (<li className={s.item}>
                <button className={s.itemBtn} onClick={resetBtn}>Reset</button>
            </li>)
            }
        </ul>
    )
}

export default Options;