'use client';
import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { RiReplyAllFill } from "react-icons/ri";
import { db } from '../../../../../../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, onSnapshot } from 'firebase/firestore';

const Cm = ({ isVisible, onClose }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [sortOrder, setSortOrder] = useState('relevancia');
    const [replyTo, setReplyTo] = useState(null);
    const [replyText, setReplyText] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            const querySnapshot = await getDocs(collection(db, "comments"));
            const commentsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setComments(commentsData);
        };

        // Listener para actualizaciones en tiempo real
        const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setComments(commentsData);
        });

        fetchComments();

        return () => unsubscribe();
    }, []);

    const handleCommentSubmit = async () => {
        if (newComment.trim() === "" || username.trim() === "" || email.trim() === "") return;

        const date = new Date().toISOString();
        await addDoc(collection(db, "comments"), {
            username,
            text: newComment,
            date,
            replies: []
        });

        setNewComment("");
        setUsername("");
        setEmail("");
    };

    const handleReplySubmit = async (commentId) => {
        if (replyText.trim() === "") return;

        const commentDoc = doc(db, "comments", commentId);
        const commentData = comments.find(comment => comment.id === commentId);
        const updatedReplies = [...commentData.replies, { username: "Invitado", text: replyText, date: new Date().toISOString() }];

        await updateDoc(commentDoc, { replies: updatedReplies });

        setReplyTo(null);
        setReplyText("");
    };

    const sortedComments = () => {
        switch (sortOrder) {
            case 'recientes':
                return [...comments].sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'antiguos':
                return [...comments].sort((a, b) => new Date(a.date) - new Date(b.date));
            default:
                return comments;
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    if (!isVisible) return null;

    return (
        <div className="comments-section">
            <div className="comments-header">
                <p>{comments.length} comentario{comments.length !== 1 ? 's' : ''}</p>
                <div className="sort-options">
                    Ordenar por 
                    <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                        <option value="relevancia">relevancia</option>
                        <option value="recientes">más recientes</option>
                        <option value="antiguos">más antiguos</option>
                    </select>
                </div>
                <button className="close-button" onClick={onClose}><IoMdClose size={24} /></button>
            </div>
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
                <h1>Comentarios:</h1>
                {sortedComments().map((comment, index) => (
                    <div key={index} className="comment">
                        <p><strong>{comment.username}</strong> dijo:</p>
                        <p>{comment.text}</p>
                        <p><small>{formatDate(comment.date)}</small></p>
                        <button onClick={() => setReplyTo(comment.id)}><RiReplyAllFill size={24} /> </button>
                        {comment.replies.map((reply, replyIndex) => (
                            <div key={replyIndex} className="reply">
                                <p><strong>{reply.username}</strong> respondió:</p>
                                <p>{reply.text}</p>
                                <p><small>{formatDate(reply.date)}</small></p>
                            </div>
                        ))}
                        {replyTo === comment.id && (
                            <div className="reply-input">
                                <textarea
                                    placeholder="Escribe una respuesta..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                ></textarea>
                                <button onClick={() => handleReplySubmit(comment.id)}>Responder</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cm;
