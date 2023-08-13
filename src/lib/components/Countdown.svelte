<script>
    import spinner from "../assets/img/spinner.gif";
    let currentYear = new Date().getFullYear();
    let newYearTime = new Date(`August 17 ${currentYear} 00:00:00`);

    let countdownVisible = false;
    let countdownLoading = true;

    let d4Days = 0;
    let h4Hours = 0;
    let m4Minutes = 0;
    let s4Seconds = 0;

    function updateCountdown() {
        const currentTime = new Date();
        const difference = newYearTime - currentTime;

        d4Days = Math.floor(difference / 1000 / 60 / 60 / 24);
        h4Hours = Math.floor(difference / 1000 / 60 / 60) % 24;
        m4Minutes = Math.floor(difference / 1000 / 60) % 60;
        s4Seconds = Math.floor(difference / 1000) % 60;
    }

    setTimeout(() => {
        countdownLoading = false;
        countdownVisible = true;
    }, 3000);

    setInterval(updateCountdown, 1000);
</script>

<div class="container">
    {#if countdownLoading}
        <img src={spinner} alt="Loading..." id="loading" class="loading" />
    {:else}
        <div id="year" class="year">{currentYear}</div>
        <h1>Site Launch Countdown</h1>
        <div id="countdown" class="countdown" style="display: flex;">
            <div class="time">
                <h2 id="days">{d4Days}</h2>
                <small>days</small>
            </div>
            <div class="time">
                <h2 id="hours">{h4Hours}</h2>
                <small>hours</small>
            </div>
            <div class="time">
                <h2 id="minutes">{m4Minutes}</h2>
                <small>minutes</small>
            </div>
            <div class="time">
                <h2 id="seconds">{s4Seconds}</h2>
                <small>seconds</small>
            </div>
        </div>
    {/if}
</div>

<!-- <script>
    import { onMount } from "svelte";
    onMount(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                (document.getElementById("days").innerText = Math.floor(distance / day)),
                    (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
                    (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
                    (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0);
    });
</script>

<div class="container">
    <h1 id="headline">Countdown to my birthday</h1>
    <div id="countdown">
        <ul>
            <li><span id="days" />days</li>
            <li><span id="hours" />Hours</li>
            <li><span id="minutes" />Minutes</li>
            <li><span id="seconds" />Seconds</li>
        </ul>
    </div>
    <div id="content" class="emoji">
        <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
    </div>
</div>

<style>
    :root {
        --smaller: 0.75;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
        margin: 0;
    }

    body {
        align-items: center;
        background-color: #ffd54f;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    .container {
        color: #333;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-weight: normal;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
    }

    li {
        display: inline-block;
        font-size: 1.5em;
        list-style-type: none;
        padding: 1em;
        text-transform: uppercase;
    }

    li span {
        display: block;
        font-size: 4.5rem;
    }

    .emoji {
        display: none;
        padding: 1rem;
    }

    .emoji span {
        font-size: 4rem;
        padding: 0 0.5rem;
    }

    @media all and (max-width: 768px) {
        h1 {
            font-size: calc(1.5rem * var(--smaller));
        }

        li {
            font-size: calc(1.125rem * var(--smaller));
        }

        li span {
            font-size: calc(3.375rem * var(--smaller));
        }
    }
</!-->
-->

<style lang="scss">
    .container {
        background-image: url("https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        font-family: "Lato", sans-serif;
        height: 100vh;
        color: #fff;

        display: -webkit-box;

        display: -ms-flexbox;

        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        & * {
            z-index: 1;
        }
    }

    h1 {
        font-size: 6rem;
        margin: -8rem 0 4rem;
    }

    .year {
        font-size: 20rem;
        // z-index: -1;
        opacity: 0.2;
        position: absolute;
        bottom: 2rem;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .countdown {
        display: none;
        -webkit-transform: scale(2);
        transform: scale(2);

        .time {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin: 1.5rem;

            h2 {
                margin: 0 0 0.5rem;
            }
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 4.5rem;
        }

        .time {
            margin: 0.5rem;

            h2 {
                font-size: 1.2rem;
                margin: 0;
            }

            small {
                font-size: 1rem;
            }
        }
    }
</style>
