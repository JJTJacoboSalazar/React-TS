import {Sub} from '../types'

interface Props {
    subs: Array<Sub>
}

const List = ({subs}: Props) => {
return ( 
    <div>
        {
        subs.map(sub => (
            <div key={sub.nick}>
                <img src={sub.avatar} alt={sub.nick} />
                <h2>{sub.nick}</h2>
                <p>{sub.subMonths} months</p>
                {sub.description && <p>{sub.description}</p>}
            </div>
        ))}
    </div>
)
}

export default List