import { getPosts } from '@/utils/actions.js';

export default async function Page() {
    let posts = await getPosts();

    return (
        <main>
            {console.log(posts) &&
                posts.map((item) => {
                    return <p>{item}</p>;
                })}
        </main>
    );
}
