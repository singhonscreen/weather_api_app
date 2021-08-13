import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState("Ambah")

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=230ac2bd77b3b2471fcca16f13beb4a8`;
      const response = await fetch(url)
      const resJson = await response.json()
      setData(resJson.main)
      console.log(resJson.main)
    }
    fetchApi();
  }, [search])


  const InputEvent = (e) => {
    setSearch(e.target.value)

  }


  return (
    <>
      <div className="box" >
        <div className="main">
          <div className="inp">
            <p>Please Enter your city Name</p>
            <input type="search" placeholder={search} onChange={InputEvent} />
          </div>
          {
            !data ? (<p>City not found</p>) :
              <div>
                <div className="showdata">
                  <h2 className="icon">
                    <i className="fas fa-street-view" />{search} </h2>
                </div>

                <div className="showData">
                  <h3> {data.temp}°C </h3>
                </div>
                <div className="para">
                  <p>Min temp {data.temp_min}°C and max temp {data.temp_max}°C   </p>
                  <p>Humidity {data.humidity}</p>
                  <p>Feel like {data.feels_like}</p>
                </div>
              </div>

          }
        </div>

      </div>
    </>
  )
}

export default App

