import HomeValueItem from "./HomeValueItem"

const VALUE_LIST = [
    'Optimistiska',
    'Nyttoskapande',
    'Förbättrande',
    'Lösningsfokuserade',
    'Agerande',
]

export default function HomeValuesList() {
    return(
        <ul className="grid gap-[1px] overflow-hidden">
            {VALUE_LIST.map((value, index) => (
                <li key={value}>
                    <HomeValueItem reversed={index % 2 === 0}>
                        {value}
                    </HomeValueItem>
                </li>
            ))}
        </ul>
    )
}