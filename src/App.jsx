import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import style from './App.module.css'
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=50',
      name: 'Marcos',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloremque odit sint '},
      {type: 'paragraph', content: 'laborum a architecto aspernatur non sunt! Temporibus quis eum totam unde beatae quas? Totam mollitia exercitationem doloribus delectus.'},
      {type: 'link', content: 'marcos/portfolio'}
    ],
    publishedAt: new Date('2023-01-01 20:00:01'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40',
      name: 'Ana Vitoria',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloremque odit sint '},
      {type: 'paragraph', content: 'laborum a architecto aspernatur non sunt! Temporibus quis eum totam unde beatae quas? Totam mollitia exercitationem doloribus delectus.'},
      {type: 'link', content: 'ana/portfolio'}
    ],
    publishedAt: new Date('2023-03-05 21:00:01'),
  },
];


export function App() {

  return (
    <div>
          <Header/>
          <div className={style.wrapper}>
            <Sidebar/>
            <main>

            {posts.map( post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}

            </main>
           
          </div>
    </div>
  )
}


