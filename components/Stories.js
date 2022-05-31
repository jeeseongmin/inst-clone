// import faker from "faker";
import faker from "faker";
import React, { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const _suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(_suggestions);

    setSuggestions(_suggestions);
  }, []);

  return (
    <div className='flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-thin scrollbar-thumb-black '>
      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
}

export default Stories;
