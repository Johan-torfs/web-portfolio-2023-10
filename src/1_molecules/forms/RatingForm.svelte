<script>
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { storeInput } from '../../stores.js';

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
        storeInput("__submitting", true);
        submitForm(e)
        .then(
            (value) => {
                if (value.status == 201) {
                    if (postSubmitState == 0) {
                        e.target.reset();
                        changeFormState(0)
                    } else {
                        changeFormState(postSubmitState);
                    }
                }
                else {
                    alert("Wegens migratie, werkt deze functie tijdelijk niet. Gelieve voor contact het onderstaande emailadres te gebruiken.");
                }
            }
        )
        .catch((error) => alert("Wegens migratie, werkt deze functie tijdelijk niet. Gelieve voor contact het onderstaande emailadres te gebruiken."))
        .finally(() => storeInput("__submitting", false));
    } else {
        changeFormState(formState + 1);
    }
}

function submitForm(e) {
    const formData = new FormData(e.target);
    return fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    });
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
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-0"/>
        </div>
    {:else if formState == 1}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-1"/>
        </div>
    {:else if formState == 2}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-2"/>
        </div>
    {:else if formState == 3}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-3"/>
        </div>
    {:else if formState == 4}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-4"/>
        </div>
    {:else if formState == 5}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-5"/>
        </div>
    {:else if formState == 6}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-6"/>
        </div>
    {:else if formState == 7}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-7"/>
        </div>
    {:else if formState == 8}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-8"/>
        </div>
    {:else if formState == 9}
        <div transition:fade={{delay: delay, duration: delay, opacity: 1, easing: quadInOut }} class="w-full">
            <slot name="name-9"/>
        </div>
    {/if}
</form>