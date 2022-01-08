import { useState } from "react";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";

function Feed() {

    const [category, setCategory] = useState("Experience");

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                {/* <Stories /> */}
                <Posts category={category}/>
            </section>

            <section className="hidden xl:inline-grid md:col-span-1">
                {/* <MiniProfile /> */}
                {/* <Suggestions /> */}
            </section>
        </main>
    );
}

export default Feed;
