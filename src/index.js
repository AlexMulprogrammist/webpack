import  "../index.css";
import js_img from '../assets/js_image.png';

console.log('Hello World');

const i_love_js = document.createElement('h1')
i_love_js.className = 'love_js'
i_love_js.innerHTML = 'I love JavaScript'

const image = document.createElement('img')
image.className = 'js_img'
image.src = js_img

document.body.append(i_love_js, image)

