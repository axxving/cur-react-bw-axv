import { CrossIcon } from './icons/CrossIcon'

export const TodoList = () => {
    return (
        <div className='mt-8 rounded-t-md bg-white [&>article]:p-4'>
            <article className="flex gap-4 border-b border-b-gray-400">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                </button>

                <p className="grow text-gray-600">
                    complete online javaScript curse in bluuweb
                </p>
                <button className="flex-one">
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                </button>

                <p className="grow text-gray-600">
                    complete online javaScript curse in bluuweb
                </p>
                <button className="flex-one">
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                </button>

                <p className="grow text-gray-600">
                    complete online javaScript curse in bluuweb
                </p>
                <button className="flex-one">
                    <CrossIcon />
                </button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400">
                <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                </button>

                <p className="grow text-gray-600">
                    complete online javaScript curse in bluuweb
                </p>
                <button className="flex-one">
                    <CrossIcon />
                </button>
            </article>
        </div>
    )
}
