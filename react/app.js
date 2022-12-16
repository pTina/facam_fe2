
function createDOM(node){
    if(typeof node == 'string'){
        return document.createTextNode(node);
    }
    const el = document.createElement(node.tag);

    node.children
        .map(createDOM)
        .forEach(el.appendChild.bind(el));
    
    return el;
}


const vdom ={
    tag: 'p',
    props: {},
    children: [
        {
            tag: 'h1',
            props: {},
            children: [
                "React 만들기"
            ]
        },
        {
            tag: 'ul',
            props: {},
            children: [
                {
                    tag: 'li',
                    props: {},
                    children: ['첫 번째']
                },
                {
                    tag: 'li',
                    props: {},
                    children: ['두 번째']
                },
                {
                    tag: 'li',
                    props: {},
                    children: ['세 번째']
                },
            ]
        },
    ]
}

document
    .querySelector('#root')
    .appendChild(createDOM(vdom));



