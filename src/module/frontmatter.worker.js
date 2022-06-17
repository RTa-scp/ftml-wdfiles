let fm = require('front-matter');
onmessage = async (e) => {
    const mdSource = e.data;
    const {attributes, body} = fm(mdSource);
    postMessage({attributes, body});
}