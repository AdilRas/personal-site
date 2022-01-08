import { useState } from "react";
import Posts from "./posts/Posts";
import MiniProfile from "./sidebar/MiniProfile";
import Suggestions from "./suggestions/Suggestions";
// import Stories from "./stories/Stories";

function Feed() {

    const [category, setCategory] = useState("experience");

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                {/* <Stories /> */}
                <Posts category={category}/>
            </section>

            <section className="hidden xl:inline-grid md:col-span-1">
                <div className="fixed top-20">
                    <MiniProfile />
                    <Suggestions category={category} setCategory={setCategory} />
                </div>
            </section>
        </main>
    );
}

export default Feed;
