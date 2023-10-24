<script>
import { slide } from 'svelte/transition';

export let className;
export let storyblokEditableData;

let open = false;
function toggle() {
    open = !open;
}

</script>

<button class={className + ' transition'} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']} on:click={toggle}>
    <div class={"flex justify-between items-center" + (open ? ' mb-8' : '')}>
        <slot name="title"/>
        <svg class={"h-6 w-6 fill-current transition-transform" + ( open ? ' rotate-180' : '')} viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
    </div>
    {#if open}
    <div class="text-left" transition:slide>
        <slot name="content"/>
    </div>
    {/if}
</button>