interface Props {
    title:string
}

export default function BlueButton({title}:Props) {
    return (
        <button className="w-44 h-14 rounded-3xl bg-darkBlue text-white text-base font-bold">{title}</button>
    )
}