import React, { useEffect, useState } from 'react';

const Accordion = () => {
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                console.log(data);
                setPosts(data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const toggleAccordion = (index) => {
        setOpen(index === open ? null : index);
    };

  return (
    <div className='accordion'>
        {posts.map((post, index) => (
            <div key={post.id} style={{backgroundColor: "pink"}}>
                <div onClick={() => toggleAccordion(index)}>
                    <h2 style={{padding: "20px", color: "white"}}>{post.title}</h2>
                </div>
                {open === index && (
                    <div style={{padding: "20px"}}>
                        <p style={{color: "white"}}>{post.body}</p>
                    </div>
                )}
            </div>
        ))}
    </div>
  );
};

export default Accordion;