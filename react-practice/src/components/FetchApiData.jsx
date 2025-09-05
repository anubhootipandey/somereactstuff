import React, { useEffect, useState } from 'react';

const FetchApiData = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Something went wrong!", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const paginated = filteredPosts.slice(start, start + pageSize);

  return (
    <div>
        <h1>Fetch Posts</h1>
        <input type='text' placeholder='Search here...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        
        <div>
            {loading && <p>Loading...</p>}
            {!loading && paginated.map((post) => (
            <div key={post.id} className=''>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
        </div>
        <div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}
            >Previous</button>
            <button disabled={start + pageSize >= filteredPosts.length} onClick={() => setPage(page + 1)}
            >Next</button>
        </div>
    </div>
  )
};

export default FetchApiData;