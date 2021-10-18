import React from 'react'


function About() {
    return (
        <div>
            <div className="items-center flex flex-direction-col">
                {/*photos */}
                <div>
                    <img src="todo/todo" alt="todo..." />
                </div>
                {/*descriptions */}
                <div>
                    <h4>
                        To do...
                    </h4>
                    <p clasName="text-center m-3">
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                        lorem Ipsum is Lorem Ipsum, Lorem Ipsum lorem et just 
                    </p>
                    <button type="button">More</button>
                </div>
            </div>
        </div>
    )
}

export default About
