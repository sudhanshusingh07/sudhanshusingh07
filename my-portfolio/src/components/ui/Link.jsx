import React from 'react';

function Link({ children, href, ...props }) {
    return (
        <a
            className="text-org hover:underline"
            target="_blank"
            href={href} {...props}>
            {children}
        </a>
    )
}

export default Link