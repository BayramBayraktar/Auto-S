import React from 'react';
import Link from 'next/link';
import {
    TurnBack
} from './style';


const index = () => {
    return (
        <TurnBack>
            <Link href="/">
                <a>
                    {`< Back`}
                </a>
            </Link>
        </TurnBack>
    )
}

export default index