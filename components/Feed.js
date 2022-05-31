import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";
function Feed() {
  return (
    <main className='grid grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl'>
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        <Posts />
      </section>

      <section>
        {/* Mini Profile */}
        {/* Suggestion */}
      </section>
    </main>
  );
}

export default Feed;
