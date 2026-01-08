function CalenderIcon( { day, month }: { day: number; month: string } ) {
  return (
    <div className="w-13 h-13 bg-my-lime/10 border border-my-black rounded-lg flex flex-col items-center justify-center text-base">
        <div className="w-full rounded-t-lg flex justify-center">
            <p className="text-center">{month}</p>
        </div>
        <div className="bg-my-ash w-full rounded-b-lg py-1">
            <p className="text-center text-my-black">{day}</p>
        </div>
    </div>
  )
}

export default CalenderIcon