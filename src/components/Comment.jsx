import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'


export function Comment({content, onDeleteComment}){
    const [likeComment, setLikeComment] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeComment( (state)=>{
            return state + 1;
        })
    }

    return(
        <div className={styles.comment}>
            
            <Avatar hasBorder={false} src="https://github.com/milenavms.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorAndTime}>
                        <div>
                            <strong>Milena </strong>
                            <time title="11 de maio as 22:12h" dataTime="2022-11-02 09:09:09">Publicado a 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>

    );
}