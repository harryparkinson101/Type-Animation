import { TypeAnimation } from 'react-type-animation';

// Define the TypeTextExample component.
const TypeTextExample = () => {

  // Create an array of texts for the typing animations. 
  // Each item in the array is a sequence of text and delays.
  const texts = [
    ['We produce food for Mice', 1000, 'We produce food for Hamsters', 1000, 'We produce food for Guinea Pigs', 1000, 'We produce food for Chinchillas', 1000],
    ['We create digital products', 1000, 'We develop mobile applications', 1000, 'We design modern websites', 1000, 'We offer cloud solutions', 1000],
    ['We innovate in fintech', 1000, 'We revolutionize biotech', 1000, 'We excel in edutech', 1000, 'We lead in agritech', 1000],
    ['We explore AI solutions', 1000, 'We apply Machine Learning', 1000, 'We deploy Deep Learning', 1000, 'We leverage Natural Language Processing', 1000],
    ['We specialize in data analysis', 1000, 'We master in data visualization', 1000, 'We are experts in data mining', 1000, 'We provide data consulting', 1000],
    ['We are agile', 1000, 'We value customer collaboration', 1000, 'We respond to change', 1000, 'We deliver working software', 1000]
  ];
  
  // Define an array of typing speeds for each of the texts above. 
  // The typing speeds go from slower to faster.
  const speeds = [50, 40, 30, 20, 10, 5];

  // Render a section element with a grid of text animations.
  return (
    <section className="flex flex-wrap p-5 bg-blue-900">
      {/* Map over the texts array and create a card with a typing animation for each one. */}
      {texts.map((text, i) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={i}>
          <div className="bg-blue-800 p-4 rounded-md h-full">
            {/* Render the TypeAnimation component with the current text and speed. */}
            <TypeAnimation
              sequence={text}
              speed={{type: "keyStrokeDelayInMs", value: speeds[i]}}
              deletionSpeed={{type: "keyStrokeDelayInMs", value: speeds[i]}}
              wrapper="p"
              className="text-white"
              style={{fontSize: '1.25em'}}
              cursor
              repeat={Infinity}
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default TypeTextExample;
