import React, { useState, useEffect } from 'react';

const Greeting = ({ name }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Function to get the greeting based on the time
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    // Set the greeting immediately
    getGreeting();

    // Update the greeting every minute to catch changes in time
    const interval = setInterval(getGreeting, 60000); // 60000 ms = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>{greeting}, {name || 'Guest'}!</h1>
    </div>
  );
};

export default Greeting;