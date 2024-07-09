interface Props {
    subs: Array<{
        nick: string
        subMonths: number
        avatar: string
        description?: string
    }>
}

export default function List({subs}: Props) {
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