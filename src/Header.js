function header() {
    return (
        <div className="container">
            
            {/*Navigations*/}
            <div className="flex border-b-2 border-gray-300  justify-between w-full mx-auto"> 
                {/*Logo*/}
            <div className="bg-red-800 flex md: m-5">
                <img src="https://cutt.ly/EE8VJcc" alt="logo" width={100} height={100}/>
            </div>
              <ul className="flex items-center justify md:space-x-10 sm:space-x-10 font-semibold">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQ</a></li>
              </ul>
            </div>
           
        </div>
    )
}

export default header
