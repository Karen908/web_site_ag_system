import { useState } from 'react';

const Cm = ({ isVisible }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleCommentSubmit = () => {
        if (newComment.trim() === "" || username.trim() === "" || email.trim() === "") return;

        setComments([...comments, { username, text: newComment }]);
        setNewComment("");
        setUsername("");
        setEmail("");
    };

    if (!isVisible) return null;

    return (
        <div className="comments-section">
            <div className="comment-input">
                <input
                    type="text"
                    placeholder="Agrega un apodo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Dirección de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Escribe un comentario..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button onClick={handleCommentSubmit}>Enviar como invitado</button>
            </div>
            <div className="comments-list">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p><strong>{comment.username}</strong> (Invitado) dijo:</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cm;