import { MoonIcon } from "./icons/MoonIcon";

export const Header = () => {
    return (
        <header className='container pt-8 mx-auto px-4'>
            <div className='flex justify-between'>
                <h1 className='text-3x1 font-semibold uppercase tracking-[0.3em] text-white'>
                    Todo
                </h1>
                <buttonn>
                    <MoonIcon on/>
                </buttonn>
            </div>
        </header>
    )
}


