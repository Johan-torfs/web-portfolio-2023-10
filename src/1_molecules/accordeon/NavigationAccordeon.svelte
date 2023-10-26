<script>
import { slide } from 'svelte/transition';

export let className;
export let storyblokEditableData;

let open = false;
function toggle() {
    open = !open;
}

</script>

<div class={className + ' transition'} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <button class={"flex justify-between items-center text-start w-full" + (open ? ' mb-8' : '')} on:click={toggle}>
        <slot name="title"/>
        <svg class={"h-6 w-6 fill-current transition-transform flex-shrink-0" + ( open ? ' rotate-180' : '')} viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
    </button>
    {#if open}
    <div transition:slide>
        <slot name="content"/>
    </div>
    {/if}
</div>