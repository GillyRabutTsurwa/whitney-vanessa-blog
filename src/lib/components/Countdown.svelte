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
        <h1>Inaugural Site Launch</h1>
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
        font-size: 2.4rem;

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
