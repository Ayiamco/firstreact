import React,{useState} from 'react'
import "../css/Exercise4.css"

const iconClass={Rain:"fas fa-cloud-showers-heavy fa-3x",Clouds:"fas fa-cloud fa-2x",Clear:"fas fa-sun fa-2x"}
const colorStyle={Rain:"rgb(65, 52, 177)",Clouds:"rgb(82, 208, 224)",Clear:"yellow"}

const Exercise4 = () => {
    const [location,setLocation]=useState("");
    const [isInputEmpty,setIsInputEmpty]=useState(false)
    const [weatherToday,setWeatherToday]=useState([])
    const [weatherFuture,setWeatherFuture]=useState([])
    const [weatherCurrent,setWeatherCurrent]=useState({})
    const[display,setDisplay]=useState("")

    function getTime(time){
        if(time==="00"){time="12AM"}
        else{
            if(parseInt(time)<10){time=time[1]+"AM";}
            else if(parseInt(time)===12){time="12PM"}
            else{
                    time=parseInt(time)<11 ? time+"AM" : (parseInt(time)-12) +"PM"
            }
        }
        return time;
    }
    
    async function submitForm (e){
        //Clear,Clouds,Rain
        e.preventDefault();
        if(location===""){
            setIsInputEmpty(true);
            return;
        }
        const url=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=b88f28378cd3b5baab1e28f17612802d`
        await getData(url).then(data=> {
            let daysToDisplay=getDaysToDisplay()
            let hasFoundData=[true,false,false,false,false];
            let _weatherFuture=[];
            const dates=Object.keys(daysToDisplay);

            setWeatherCurrent({
                weather:data[0].weather[0].main,
                temp:data[0].main.temp,
                location:String(location)
            })
            
            for(let i=1;i<6;i++){
                daysToDisplay[Object.keys(daysToDisplay)[0]][i-1]= {}
                let time=data[i]["dt_txt"].split(" ")[1].split(":")[0]
                time=getTime(time)
                daysToDisplay[Object.keys(daysToDisplay)[0]][i-1]["id"]=data[i].dt;
                daysToDisplay[Object.keys(daysToDisplay)[0]][i-1]["temp"]=data[i].main.temp;
                daysToDisplay[Object.keys(daysToDisplay)[0]][i-1]["time"]=time;
                daysToDisplay[Object.keys(daysToDisplay)[0]][i-1]["weather"]=data[i].weather[0].main;
            }         
            //set todays obj state
            setWeatherToday(daysToDisplay[Object.keys(daysToDisplay)[0]])
        
            data.forEach((element) => {
                let _date=element["dt_txt"].split(" ")[0]
                if(!hasFoundData[1] &&  dates[1]===_date){
                    daysToDisplay[dates[1]]["id"]=element.dt;
                    daysToDisplay[dates[1]]["tempMin"]=element.main.temp_min;
                    daysToDisplay[dates[1]]["tempMax"]=element.main.temp_max;
                    daysToDisplay[dates[1]]["weather"]=element.weather[0].main;
                    hasFoundData[1]=true
                    _weatherFuture[0]=daysToDisplay[dates[1]]

                    
                }
                if(!hasFoundData[2] &&  dates[2]===_date){
                    daysToDisplay[dates[2]]["id"]=element.dt;
                    daysToDisplay[dates[2]]["tempMin"]=element.main.temp_min;
                    daysToDisplay[dates[2]]["tempMax"]=element.main.temp_max;
                    daysToDisplay[dates[2]]["weather"]=element.weather[0].main;
                    hasFoundData[2]=true
                    _weatherFuture[1]=daysToDisplay[dates[2]]
                }
                if(!hasFoundData[3] &&  dates[3]===_date){
                    daysToDisplay[dates[3]]["id"]=element.dt;
                    daysToDisplay[dates[3]]["tempMin"]=element.main.temp_min;
                    daysToDisplay[dates[3]]["tempMax"]=element.main.temp_max;
                    daysToDisplay[dates[3]]["weather"]=element.weather[0].main;
                    hasFoundData[3]=true
                    _weatherFuture[2]=daysToDisplay[dates[3]]
                }
                if(!hasFoundData[4] &&  dates[4]===_date){
                    daysToDisplay[dates[4]]["id"]=element.dt;
                    daysToDisplay[dates[4]]["tempMin"]=element.main.temp_min;
                    daysToDisplay[dates[4]]["tempMax"]=element.main.temp_max;
                    daysToDisplay[dates[4]]["weather"]=element.weather[0].main;
                    hasFoundData[4]=true;
                    _weatherFuture[3]=daysToDisplay[dates[4]]
                }
             });
             console.log(_weatherFuture)
            //update future weather states 
            setWeatherFuture(_weatherFuture)
            setIsInputEmpty(false);
            setLocation("");
            setDisplay("block")
             
        } );
    }

    const onChangeHandler= (e)=>{
        setLocation(e.target.value)
        console.log("changing value....")
    }
    
    return (
        <div className="Exercise4-container" >
            <form  >
                <input type="text" name="location" value={location} onChange={onChangeHandler} placeholder="Enter the city "/>
                {isInputEmpty?<p className="p-error">Feild is empty</p> : ""} 
                <button type="submit" onClick={submitForm}> Get Forecast</button>
            </form> 
            {
                display===""? "":
                <WeatherCardCurrent style={{display:`${display}`}} temp={weatherCurrent.temp} 
                weather={weatherCurrent.weather} location={weatherCurrent.location}></WeatherCardCurrent>
            }
        
            <div id="Exercise4-weather">
                <section id="Exercise4-weatherCard1">
                    {weatherToday.map( (obj) => {
                        return <WeatherCard1 key={obj.id} weatherIcon={obj.weather} time={obj.time} temp={obj.temp}></WeatherCard1>
                    })}
                </section>
                {
                    display===""?"":<div className="Exercise4-line"></div>
                }
                
                <aside id="Exercise4-weatherCard2">
                    {weatherFuture.map( (obj) => {
                        return (<WeatherCard2 key={obj.id} weatherIcon={obj.weather} time={obj.time}
                             tempMax={obj.tempMax} tempMin={obj.tempMin}></WeatherCard2>)
                    })}
                </aside>
            </div>
            

        </div>
    )
}

async function getData(url){
    return await fetch(url)
                    .then((res)=> {return res.json()})
                    .then(res=>{return res["list"]})
                    
}

function getDaysToDisplay(){
    let today=[new Date(Date.now()),new Date(Date.now()),new Date(Date.now())
        ,new Date(Date.now()),new Date(Date.now())]
    let daysToDisplay={}
    for(let i=0;i<5;i=i+1){
        today[i].setHours(24*i);
        if(i===0){
            daysToDisplay[`${today[i].getFullYear()}-${today[i].getMonth()+1}-${today[i].getDate()}`]=[]
        }
        else if(i===1){
            daysToDisplay[`${today[i].getFullYear()}-${today[i].getMonth()+1}-${today[i].getDate()}`]={}
            daysToDisplay[`${today[i].getFullYear()}-${today[i].getMonth()+1}-${today[i].getDate()}`]["time"]="Tommorow";
        }
        else{
            let dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            daysToDisplay[`${today[i].getFullYear()}-${today[i].getMonth()+1}-${today[i].getDate()}`]={}
            daysToDisplay[`${today[i].getFullYear()}-${today[i].getMonth()+1}-${today[i].getDate()}`]["time"]=dayOfWeek[today[i].getDay()]
        }
        
    }
    return daysToDisplay;
}

const WeatherCardCurrent=({weather,temp,location})=>{
    return(
        <header id="Exercise4-header">
                <h1>{location}</h1>
                <p>{String(new Date()).slice(0,15)}</p>
                <h1>{String(temp).slice(0,4)}<span>&#8451;</span></h1>
                <i className={iconClass[weather]} style={{color:`${colorStyle[weather]}`}}></i>
        </header>
    )
}

const WeatherCard1 = ({weatherIcon,time,temp})=>{
    
    return(
        <section className="Exercise4-weatherCard1">
            <div className="Exercise4-weatherCard1-icon"><i className={iconClass[weatherIcon]} style={{color:`${colorStyle[weatherIcon]}`}}></i></div>
            <div className="Exercise4-weatherCard1-details">
                <p>{String(temp).slice(0,2)}<span>&#8451;</span> </p>
                <p>{time}</p>
            </div>
        </section>
    )
}

const WeatherCard2 = ({weatherIcon,time,tempMax,tempMin}) =>{
    return(
        <section class="Exercise4-weatherCard2"> 
            <div>
                <p>{time}</p>
                <p>{String(tempMin).slice(0,-1)}<span>&#8451;</span>/{String(tempMax).slice(0,-1)}<span>&#8451;</span> </p>
            </div>
            <div><i className={iconClass[weatherIcon]} style={{color:`${colorStyle[weatherIcon]}`}}></i></div>
        </section>
    )
}

export default Exercise4;