function CalenderIcon( { day, month }: { day: number; month: string } ) {
  return (
    <div className="w-14 h-14 bg-my-lime/10 border border-my-black rounded-lg flex flex-col items-center justify-center">
        <div className="w-full rounded-t-lg">
            <p className="text-center">{month}</p>
        </div>
        <div className="bg-my-ash w-full rounded-b-lg py-1">
            <p className="text-center text-my-black">{day}</p>
        </div>
    </div>
  )
}

export default CalenderIcon