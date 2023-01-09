import { Avatar } from './Avatar';
import { Comment } from './Comment';

import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'Muito bom o post!!!'
    ]);

    const [newComment, setNewComments] = useState('');

    const isNewCommentEmpty =  newComment.length === 0;

    const postDateFormatted = format(publishedAt," d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateTelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    
    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...comments, newComment])

        setNewComments('');

    }
    
    function handleNewCommentChange(){
        setNewComments(event.target.value);
    }

    function deleteComment(commentToDelete){
        const NewLisCommentsWithoutTheDeleted =  comments.filter(
            comment => {
                return comment != commentToDelete;
            }
        )
           
        setComments(NewLisCommentsWithoutTheDeleted);
    }


    return(
        <article className={styles.post}>

            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={postDateFormatted} dataTime={publishedAt.toISOString()}>
                    {publishedDateTelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map( line => {
                        if(line.type === 'paragraph'){
                           return <p key={line.content}>{line.content}</p>
                        }else if (line.type === 'link'){
                           return <p key={line.content}><a href="">{line.content}</a></p>
                        }
                    })
                }
                

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea  
                    name="textArea"  
                    placeholder="Deixe um comentário"
                    value={newComment}
                    onChange={handleNewCommentChange}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={styles.contentList}>
                {
                    comments.map( comment => {
                        return ( 
                            <Comment 
                                key={comment} 
                                content={comment}
                                onDeleteComment= {deleteComment}
                            />
                        )
                    })
                }
               
            </div>

        </article>
    );
}