import React from 'react'

function Demo() {
  return (
    <div>Demo</div>
  )
}

export default Demo


/*import ReactJoyride from 'react-joyride';
import React, { useState } from 'react';



function Demo() {

    const [value, setValue] = useState(false)
    const steps = [
        {
            target: ".target1",
            content: "About the sentence"
        }
    ];

    return (
        <div className="App">
            <p className="target1">I want to say something about this in my tour</p>
            <ReactJoyride steps={steps}
                run={value}
                continuous
                showProgress
                showSkipButton
                styles={{
                    options: {
                        // modal arrow and background color
                        arrowColor: "#eee",
                        backgroundColor: "#eee",
                        // page overlay color
                        backdropFilter:"blur(5px)",
                        //button color
                        primaryColor: "mediumaquamarine",
                        //text color
                        textColor: "#333",

                        //width of modal
                        width: 500,
                        //zindex of modal
                        zIndex: 1000
                    }
                }}
            />
            <button onClick={() => setValue("true")}>Use Me</button>
        </div>
    )
}

export default Demo*/