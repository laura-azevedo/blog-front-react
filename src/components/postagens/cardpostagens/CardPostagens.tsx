import { Link } from 'react-router-dom'
import Postagem from '../../../models/Post'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagem({ post }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={post.user?.photo}
                        className='h-12 rounded-full'
                        alt={post.user?.name} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {post.user?.name}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{post.title}</h4>
                    <p>{post.text}</p>
                    <p>Tema: {post.theme?.description}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.date))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${post.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem