/**
 * Callbacks are functions that are called after an action was executed
 */

//EVENT
const buttonEvent = document.querySelector('[data-event=button]')
const inputEvent = document.querySelector('[data-event=input]')

// button.addEventListener('click' /* this is a callback */)

buttonEvent.addEventListener('click', () => {
    const span = document.querySelector('[data-event=button-text]')

    span.textContent = 'hooray callback'
})

inputEvent.addEventListener('keyup', (e) => {
    const span = document.querySelector('[data-event=input-text]')

    span.textContent = `callback says ${e.target.value}`
})

// TIMEOUT
const buttonTimeOut = document.querySelector('[data-timeout=button]')

buttonTimeOut.addEventListener('click', () => {
    const span = document.querySelector('[data-timeout=button-text]')

    // Annoymious function
    // setTimeout(() => {
    //     span.textContent = 'hooray callback'
    // }, 1000)

    // or call it
    const log = () => {
        span.textContent = 'hooray callback'
    }

    setTimeout(log, 1000)
})
