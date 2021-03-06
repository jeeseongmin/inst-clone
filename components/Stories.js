// import faker from "faker";
import faker from "faker";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const _suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(_suggestions);
  }, []);

  return (
    <div className='flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-thin scrollbar-thumb-black '>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

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
