<script>
import { storeInput } from '../../stores.js';

export let className;
export let storyblokEditableData;
export let blok;
let { name, value, label } = {...blok};

const id = "input-" + Math.random().toString(36).slice(2, 11);
const classNameLocal = ['cursor-pointer aspect-square w-12 flex items-center justify-center', className].join(' ');
</script>

<div data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <input on:change={(e) => storeInput(name, e)} type="radio" id={id} name={name} value={value} class="peer hidden">
    <label for={id} class={classNameLocal}>{label}</label>
</div>