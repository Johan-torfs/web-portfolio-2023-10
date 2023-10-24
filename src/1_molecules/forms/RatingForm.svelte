<script>
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

export let className;
export let states;
export let storyblokEditableData;

let formState = 0;
let finalState = 0;
let postSubmitState = 0;

states.forEach((state, index) => {
    if (state == "final") {
        finalState = index;
    }
    if (state == "post-submit") {
        postSubmitState = index;
    }
});

function updateForm(e) {
    if (formState == finalState) {
        submitForm(e);
        if (postSubmitState == 0) {
            e.target.reset();
            changeFormState(0)
        } else {
            changeFormState(postSubmitState);
        }
    } else {
        changeFormState(formState + 1);
    }
}

function submitForm(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}

const delay = 300;
function changeFormState(number) {
    if (number == formState) return;
    formState = -1;
    setTimeout(() => {
        formState = number;
    }, delay);
}
</script>

<form on:submit|preventDefault={updateForm} class={className} data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    {#if formState == 0}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-0"/>
        </div>
    {:else if formState == 1}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-1"/>
        </div>
    {:else if formState == 2}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-2"/>
        </div>
    {:else if formState == 3}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-3"/>
        </div>
    {:else if formState == 4}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-4"/>
        </div>
    {:else if formState == 5}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-5"/>
        </div>
    {:else if formState == 6}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-6"/>
        </div>
    {:else if formState == 7}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-7"/>
        </div>
    {:else if formState == 8}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-8"/>
        </div>
    {:else if formState == 9}
        <div in:fly={{delay: delay, duration: delay, x: '100%', y: 0, opacity: 1, easing: quadInOut }} out:fly={{duration: delay, x: '-100%', y: 0, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-9"/>
        </div>
    {/if}
</form>