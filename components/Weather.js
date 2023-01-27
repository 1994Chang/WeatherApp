import Image from "next/image"

const Weather = ({data}) => {

console.log(data)
  return (
    <>
        <div  className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-5 text-neutral-200 z-10'>
            <div className="relative flex justify-between pt-12">
                <div className="flex flex-col items-center">
                    <Image alt="weather" width='100' height='100' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                    <p className="text-2xl font-medium"> {data.weather[0].main}</p>
                </div>
                <h1 className="font-semibold text-9xl"> {data.main.temp.toFixed(0)}&#176; </h1>
            </div>
            <div className="bg-black/60 p-5 rounded-lg">
                <p className="text-2xl text-center pb-5">Weather in {data.name}</p>
                <div className="flex justify-between text-center">
                    <div>
                        <p className="text-lg font-medium">Feels Like</p>
                        <p className="font-semibold text-3xl">{data.main.feels_like.toFixed(0)}&#176;</p>  
                    </div>
                    <div>
                        <p className="text-lg font-medium">Humidity</p>
                        <p className="font-semibold text-3xl">{data.main.humidity}%</p>  
                    </div>
                    <div>
                        <p className="text-lg font-medium">Winds</p>
                        <p className="font-semibold text-3xl">{data.wind.speed.toFixed(0)}MPH</p>  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weather